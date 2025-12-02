# API Development Rules & Standards

## 🎯 Core Principles

### 1. **All List/Pagination APIs MUST Use POST Method**

**Rule**: Any endpoint that returns a list of items with pagination MUST use POST method with payload.

**Rationale**:
- Complex filtering requires structured payload
- Query strings have length limitations
- POST body allows nested objects and arrays
- Better for sensitive filter criteria
- Consistent pattern across all list endpoints

**✅ Correct**:
```typescript
POST /api/blocks/list
POST /api/blocks/admin/list
POST /api/users/list

Body: {
  page: 1,
  pageSize: 20,
  search: "keyword",
  status: "PUBLISHED",
  sortBy: "createdAt",
  sortOrder: "desc"
}
```

**❌ Incorrect**:
```typescript
GET /api/blocks?page=1&pageSize=20&search=keyword
GET /api/blocks/admin/all?status=PUBLISHED
```

### 2. **Pagination Payload Standard**

All pagination endpoints must accept this standard payload structure:

```typescript
interface PaginationPayload {
  page?: number;          // Default: 1
  pageSize?: number;      // Default: 10 or 20
  search?: string;        // Optional search term
  sortBy?: string;        // Default: 'createdAt'
  sortOrder?: 'asc' | 'desc'; // Default: 'desc'
  // ... additional filters
}
```

### 3. **Pagination Response Standard**

All pagination endpoints must return this standard response structure:

```typescript
interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  message?: string;
}
```

### 4. **HTTP Methods by Operation**

| Operation | Method | Example |
|-----------|--------|---------|
| List/Search with pagination | `POST` | `POST /api/blocks/list` |
| Get single by ID/slug | `GET` | `GET /api/blocks/:slug` |
| Create new resource | `POST` | `POST /api/blocks` |
| Update existing resource | `PUT` or `PATCH` | `PUT /api/blocks/:id` |
| Partial update | `PATCH` | `PATCH /api/blocks/:id/archive` |
| Delete resource | `DELETE` | `DELETE /api/blocks/:id` |

### 5. **Response Format Standard**

All API responses must follow this format:

**Success Response**:
```json
{
  "success": true,
  "data": { ... },
  "pagination": { ... } // For list endpoints only
}
```

**Error Response**:
```json
{
  "success": false,
  "message": "Error description"
}
```

### 6. **Route Naming Conventions**

- Use **nouns** for resources (not verbs)
- Use **plural** for collections
- Use **kebab-case** for multi-word paths
- Group related endpoints logically

**✅ Good**:
```
POST /api/blocks/list
POST /api/blocks/admin/list
GET /api/blocks/:slug
POST /api/user-profiles/list
```

**❌ Bad**:
```
GET /api/getBlocks
GET /api/block_list
POST /api/blocks/getAllData
```

### 7. **Authentication & Authorization**

- Protected routes require `authenticate` middleware
- Use JWT Bearer token in Authorization header
- Token format: `Authorization: Bearer <token>`

```typescript
// Public routes - no auth
router.post('/blocks/list', blockController.getAllBlocks);
router.get('/blocks/:slug', blockController.getBlockBySlug);

// Protected routes - requires auth
router.post('/blocks/admin/list', authenticate, blockController.getAdminBlocks);
router.post('/blocks', authenticate, upload.single('icon'), blockController.createBlock);
```

### 8. **Error Handling**

Always use try-catch and return proper error responses:

```typescript
export const getAllBlocks = async (req: Request, res: Response) => {
  try {
    // Business logic
    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching blocks:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blocks'
    });
  }
};
```

### 9. **Input Validation**

- Validate all required fields
- Sanitize search strings (trim whitespace)
- Set sensible defaults for pagination
- Validate enum values (status, sort order)

```typescript
const {
  page = 1,
  pageSize = 10,
  search,
  sortBy = 'createdAt',
  sortOrder = 'desc'
} = req.body;

// Sanitize search
if (search && search.trim()) {
  where.OR = [
    { title: { contains: search.trim(), mode: 'insensitive' } }
  ];
}
```

### 10. **File Upload Standards**

- Use `multipart/form-data` content type
- Use Multer middleware for file handling
- Validate file types and sizes
- Store in `uploads/` directory
- Save relative path in database

```typescript
const upload = multer({
  storage: multer.diskStorage({...}),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    // Validate file types
  }
});

router.post('/', authenticate, upload.single('icon'), controller.create);
```

## 📝 Example Implementation

### Backend Controller:
```typescript
export const getAllBlocks = async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10, search, status } = req.body;
    const skip = (page - 1) * pageSize;
    
    const where: any = { isArchived: false };
    if (status) where.status = status;
    if (search?.trim()) {
      where.OR = [
        { title: { contains: search.trim(), mode: 'insensitive' } },
        { description: { contains: search.trim(), mode: 'insensitive' } }
      ];
    }

    const [data, total] = await Promise.all([
      prisma.block.findMany({ where, skip, take: pageSize }),
      prisma.block.count({ where })
    ]);

    res.json({
      success: true,
      data,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        hasNext: page < Math.ceil(total / pageSize),
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};
```

### Backend Route:
```typescript
router.post('/list', blockController.getAllBlocks);
router.post('/admin/list', authenticate, blockController.getAdminBlocks);
```

### Frontend Service:
```typescript
export const blockService = {
  getAllBlocks: async (payload?: BlockListPayload) => {
    const response = await api.post<PaginatedResponse<Block>>('/blocks/list', payload || {});
    return response.data;
  }
};
```

### Frontend Usage:
```typescript
const response = await blockService.getAllBlocks({
  page: 1,
  pageSize: 20,
  search: searchTerm,
  status: 'PUBLISHED',
  sortBy: 'createdAt',
  sortOrder: 'desc'
});

const blocks = response.data;
const { total, totalPages, hasNext } = response.pagination;
```

## 🚫 Common Mistakes to Avoid

1. ❌ Using GET with query params for pagination
2. ❌ Inconsistent response formats
3. ❌ Missing pagination metadata
4. ❌ Not validating/sanitizing inputs
5. ❌ Returning raw errors to client
6. ❌ Using verbs in route names
7. ❌ Inconsistent naming conventions
8. ❌ Missing try-catch blocks
9. ❌ Not setting default values
10. ❌ Exposing sensitive data in responses

## ✅ Checklist for New Endpoints

- [ ] Uses POST for list/pagination endpoints
- [ ] Implements standard pagination payload
- [ ] Returns standard pagination response
- [ ] Includes try-catch error handling
- [ ] Validates and sanitizes inputs
- [ ] Sets sensible defaults
- [ ] Uses proper HTTP status codes
- [ ] Follows naming conventions
- [ ] Includes authentication where needed
- [ ] Documents in API docs

---

**Last Updated**: December 2, 2025
**Version**: 1.0.0
