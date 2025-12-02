# Chunkoverflow Backend

TypeScript Express backend for Chunkoverflow application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

3. Set up PostgreSQL database and update `DATABASE_URL` in `.env`

4. Generate Prisma client:
```bash
npm run prisma:generate
```

5. Run migrations:
```bash
npm run prisma:migrate
```

6. Seed the database:
```bash
npm run prisma:seed
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm start
```

## API Endpoints

### Public
- `GET /api/blocks` - Get all published blocks
- `GET /api/blocks/:slug` - Get block by slug

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout (requires auth)
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/profile` - Get user profile (requires auth)

### Admin (requires authentication)
- `GET /api/blocks/admin/all` - Get all blocks (including archived)
- `POST /api/blocks` - Create new block
- `PUT /api/blocks/:id` - Update block
- `PATCH /api/blocks/:id/archive` - Archive block
- `PATCH /api/blocks/:id/unarchive` - Unarchive block
- `DELETE /api/blocks/:id` - Delete block permanently
