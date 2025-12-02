# Architecture

## System Architecture

Chunkoverflow follows a modern **client-server architecture** with clear separation between frontend and backend.

```
┌─────────────────┐
│   React SPA     │  Frontend (Port 5173)
│  (TypeScript)   │
└────────┬────────┘
         │ HTTP/REST API
         │
┌────────▼────────┐
│   Express API   │  Backend (Port 5000)
│  (TypeScript)   │
└────────┬────────┘
         │ Prisma ORM
         │
┌────────▼────────┐
│   PostgreSQL    │  Database
└─────────────────┘
```

## Frontend Architecture

### Technology Stack
- **React 18**: UI library with hooks
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **Zustand**: Lightweight state management
- **Axios**: HTTP client with interceptors
- **Tailwind CSS v3**: Utility-first CSS
- **Shadcn UI**: Accessible component library
- **Marked**: Markdown rendering

### Project Structure
```
frontend/src/
├── components/       # Reusable UI components
│   ├── ui/          # Shadcn UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── BlockCard.tsx
├── pages/           # Route pages
│   ├── HomePage.tsx
│   ├── BlockDetailPage.tsx
│   └── admin/       # Admin pages
├── services/        # API service layer
│   ├── authService.ts
│   └── blockService.ts
├── store/           # Zustand stores
│   └── authStore.ts
├── lib/             # Utilities
│   ├── api.ts       # Axios instance
│   └── utils.ts     # Helper functions
└── types/           # TypeScript types
    └── index.ts
```

### State Management
- **Zustand** for global auth state (user, tokens)
- **React useState** for local component state
- **localStorage** for token persistence

### Routing
```
/                    → HomePage
/blocks/:slug        → BlockDetailPage
/admin/login         → LoginPage
/admin/blocks        → AdminBlocksPage (protected)
```

## Backend Architecture

### Technology Stack
- **Express**: Web framework
- **TypeScript**: Type safety
- **Prisma**: Database ORM
- **PostgreSQL**: Relational database
- **JWT**: Authentication tokens
- **Bcrypt**: Password hashing
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing

### Project Structure
```
backend/src/
├── controllers/      # Request handlers
│   ├── authController.ts
│   └── blockController.ts
├── routes/          # API routes
│   ├── index.ts
│   ├── auth.ts
│   └── blocks.ts
├── middleware/      # Express middleware
│   ├── auth.ts
│   └── errorHandler.ts
├── lib/             # Utilities
│   ├── prisma.ts    # Prisma client
│   └── jwt.ts       # JWT utilities
└── server.ts        # App entry point
```

### API Design
- **RESTful** endpoints
- **JSON** request/response format
- **JWT Bearer tokens** for authentication
- **Multipart form-data** for file uploads

### Middleware Stack
1. CORS (allow frontend origin)
2. Body parsers (JSON, URL-encoded)
3. Cookie parser
4. Authentication (protected routes)
5. Error handler (catch-all)

## Database Architecture

### ORM: Prisma
- Type-safe database client
- Automatic migrations
- Schema-first design
- PostgreSQL specific features

### Models
- **User**: Admin users with authentication
- **Block**: Content blocks/tools
- **Status Enum**: PENDING, IN_DEVELOPMENT, PUBLISHED

### Relationships
Currently no foreign key relationships (simple schema).

## Authentication Flow

```
1. User submits credentials
   ↓
2. Backend validates & generates JWT tokens
   ↓
3. Frontend stores tokens (localStorage + Zustand)
   ↓
4. Axios interceptor adds token to requests
   ↓
5. Backend middleware verifies token
   ↓
6. If expired, refresh token flow triggers
```

## File Upload Flow

```
1. User selects image file
   ↓
2. Frontend sends FormData (multipart)
   ↓
3. Multer middleware processes upload
   ↓
4. File saved to backend/uploads/
   ↓
5. Path stored in database
   ↓
6. Frontend displays from backend URL
```

## Security Measures

1. **Password Hashing**: Bcrypt with salt rounds
2. **JWT Tokens**: Short-lived access + long-lived refresh
3. **HTTP-Only Cookies**: Option for production
4. **CORS**: Restricted to frontend origin
5. **Input Validation**: On backend controllers
6. **SQL Injection**: Protected by Prisma
7. **XSS**: React auto-escaping + DOMPurify for markdown

## Development Workflow

1. **Frontend Dev**: `npm run dev` (Vite with HMR)
2. **Backend Dev**: `npm run dev` (Nodemon with ts-node)
3. **Database**: Prisma Studio for visual editing
4. **Proxy**: Vite proxies `/api` to backend

## Production Considerations

1. **Frontend**: Build static files, serve via CDN/Nginx
2. **Backend**: Run with PM2 or Docker
3. **Database**: Managed PostgreSQL (AWS RDS, Supabase, etc.)
4. **Environment**: Separate .env for each environment
5. **HTTPS**: Required for secure cookies
6. **Rate Limiting**: Add for API protection
