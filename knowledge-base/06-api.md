# API Documentation

Complete REST API reference for Chunkoverflow.

## Base URL

```
http://localhost:5000/api
```

## Authentication

Protected endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <access_token>
```

## Response Format

All responses follow this structure:

```typescript
{
  success: boolean;
  data?: any;           // Present on success
  message?: string;     // Present on error
}
```

## Endpoints

### Authentication

#### POST /auth/login

Login and receive tokens.

**Request**:
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": 1,
      "username": "admin"
    }
  }
}
```

#### POST /auth/logout

Logout current user (requires auth).

**Headers**: `Authorization: Bearer <token>`

**Response**:
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### POST /auth/refresh

Refresh access token.

**Request**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "accessToken": "new_token...",
    "refreshToken": "new_refresh_token..."
  }
}
```

#### GET /auth/profile

Get current user profile (requires auth).

**Headers**: `Authorization: Bearer <token>`

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "admin",
    "lastLogin": "2024-01-01T00:00:00.000Z",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Blocks (Public)

#### POST /blocks/list

Get all published blocks with pagination.

**Request Body**:
```json
{
  "page": 1,
  "pageSize": 10,
  "status": "PUBLISHED",
  "search": "keyword",
  "sortBy": "createdAt",
  "sortOrder": "desc"
}
```

**All fields are optional. Defaults**:
- `page`: 1
- `pageSize`: 10
- `status`: "PUBLISHED"
- `sortBy`: "createdAt"
- `sortOrder`: "desc"

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Sample Block",
      "slug": "sample-block",
      "summaryDescription": "Short description",
      "fullDescription": "Full markdown content",
      "iconPath": "/uploads/icon.png",
      "url": "https://example.com",
      "status": "PUBLISHED",
      "isArchived": false,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 25,
    "totalPages": 3,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### GET /blocks/:slug

Get single block by slug.

**Example**:
```
GET /api/blocks/sample-block
```

**Response**: Same as individual block object above.

### Blocks (Admin)

All admin endpoints require authentication.

#### POST /blocks/admin/list

Get all blocks (including archived) with pagination.

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "page": 1,
  "pageSize": 20,
  "status": "ALL",
  "includeArchived": true,
  "search": "keyword",
  "sortBy": "createdAt",
  "sortOrder": "desc"
}
```

**All fields are optional. Defaults**:
- `page`: 1
- `pageSize`: 20
- `includeArchived`: false
- `sortBy`: "createdAt"
- `sortOrder`: "desc"

**Response**: Same format as public blocks list with pagination metadata.

#### POST /blocks

Create new block.

**Headers**: 
- `Authorization: Bearer <token>`
- `Content-Type: multipart/form-data`

**Form Data**:
```
title: "New Block"
summaryDescription: "Short description"
fullDescription: "Full markdown content"
url: "https://example.com"
status: "PENDING" | "IN_DEVELOPMENT" | "PUBLISHED"
icon: [file]  (optional)
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 2,
    "title": "New Block",
    "slug": "new-block",
    // ... other fields
  }
}
```

#### PUT /blocks/:id

Update existing block.

**Headers**: 
- `Authorization: Bearer <token>`
- `Content-Type: multipart/form-data`

**Form Data**: Same as POST (all fields optional except required validations)

**Response**: Updated block object.

#### PATCH /blocks/:id/archive

Archive a block (soft delete).

**Headers**: `Authorization: Bearer <token>`

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "isArchived": true,
    // ... other fields
  }
}
```

#### PATCH /blocks/:id/unarchive

Unarchive a block.

**Headers**: `Authorization: Bearer <token>`

**Response**: Same as archive.

#### DELETE /blocks/:id

Permanently delete a block.

**Headers**: `Authorization: Bearer <token>`

**Response**:
```json
{
  "success": true,
  "message": "Block deleted successfully"
}
```

## Status Codes

- `200 OK`: Successful request
- `201 Created`: Resource created
- `400 Bad Request`: Invalid input
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Error Responses

```json
{
  "success": false,
  "message": "Error description"
}
```

In development, may include:
```json
{
  "success": false,
  "message": "Error description",
  "stack": "Error stack trace..."
}
```

## File Uploads

### Accepted Image Types
- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- SVG (.svg)
- WebP (.webp)

### File Size Limit
- Maximum: 5MB

### Storage
- Files stored in: `backend/uploads/`
- Accessed via: `http://localhost:5000/uploads/filename.ext`

## Rate Limiting

Currently not implemented. Consider adding for production.

## CORS

Backend accepts requests from:
- `http://localhost:5173` (frontend dev server)

Update `FRONTEND_URL` in backend `.env` for other origins.

## Example Usage (JavaScript)

```javascript
// Login
const loginResponse = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: 'admin123' })
});
const { data } = await loginResponse.json();
const token = data.accessToken;

// Get blocks with pagination
const blocksResponse = await fetch('http://localhost:5000/api/blocks/list', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  },
  body: JSON.stringify({
    page: 1,
    pageSize: 10,
    status: 'PUBLISHED',
    search: 'tool'
  })
});
const { data: blocks, pagination } = await blocksResponse.json();
console.log(`Showing ${blocks.length} of ${pagination.total} blocks`);

// Create block with image
const formData = new FormData();
formData.append('title', 'My Block');
formData.append('summaryDescription', 'Description');
formData.append('status', 'PUBLISHED');
formData.append('icon', fileInput.files[0]);

const createResponse = await fetch('http://localhost:5000/api/blocks', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}` },
  body: formData
});
```
