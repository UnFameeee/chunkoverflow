# Setup Guide

Complete setup instructions for local development.

## Prerequisites

- **Node.js**: v18 or higher
- **PostgreSQL**: v14 or higher
- **npm** or **yarn**: Latest version
- **Git**: For cloning repository

## Database Setup

### 1. Install PostgreSQL

**Windows**:
```powershell
# Download from https://www.postgresql.org/download/windows/
# Or use Chocolatey:
choco install postgresql
```

**macOS**:
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Linux**:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### 2. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE chunkoverflow;

# Create user (optional)
CREATE USER chunkuser WITH PASSWORD 'your-password';
GRANT ALL PRIVILEGES ON DATABASE chunkoverflow TO chunkuser;

# Exit
\q
```

## Backend Setup

### 1. Navigate to Backend

```powershell
cd backend
```

### 2. Install Dependencies

```powershell
npm install
```

### 3. Configure Environment

```powershell
# Copy example env file
cp .env.example .env

# Edit .env file
```

Update `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/chunkoverflow?schema=public"
PORT=5000
NODE_ENV=development

SESSION_SECRET="your-random-secret-key"
JWT_SECRET="your-jwt-secret-key"
JWT_EXPIRES_IN="7d"
JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_REFRESH_EXPIRES_IN="30d"

ADMIN_USERNAME="admin"
ADMIN_PASSWORD="admin123"

FRONTEND_URL="http://localhost:5173"
```

### 4. Setup Prisma

```powershell
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database (creates admin user)
npm run prisma:seed
```

### 5. Start Backend

```powershell
npm run dev
```

Backend will run on `http://localhost:5000`

## Frontend Setup

### 1. Navigate to Frontend

```powershell
cd frontend
```

### 2. Install Dependencies

```powershell
npm install
```

### 3. Configure Environment

```powershell
# Copy example env file
cp .env.example .env
```

The `.env` should contain:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Frontend

```powershell
npm run dev
```

Frontend will run on `http://localhost:5173`

## Verify Setup

### 1. Check Backend Health

```powershell
curl http://localhost:5000/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### 2. Test Frontend

Open browser to `http://localhost:5173`

You should see the homepage.

### 3. Test Admin Login

1. Go to `http://localhost:5173/admin/login`
2. Login with:
   - Username: `admin`
   - Password: `admin123` (or what you set in backend .env)

## Prisma Studio (Optional)

Visual database editor:

```powershell
cd backend
npm run prisma:studio
```

Opens at `http://localhost:5555`

## Common Issues

### Port Already in Use

**Backend (5000)**:
```powershell
# Find process
netstat -ano | findstr :5000
# Kill process
taskkill /PID <PID> /F
```

**Frontend (5173)**:
```powershell
# Find process
netstat -ano | findstr :5173
# Kill process
taskkill /PID <PID> /F
```

### Database Connection Failed

- Verify PostgreSQL is running
- Check DATABASE_URL in .env
- Ensure database exists
- Check firewall settings

### Prisma Generate Errors

```powershell
# Clear Prisma cache
rm -rf node_modules/.prisma
npm run prisma:generate
```

### Module Not Found

```powershell
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Read [API Documentation](./06-api.md)
2. Explore [Frontend Documentation](./04-frontend.md)
3. Review [Backend Documentation](./03-backend.md)
4. Start building features!

## Development Tips

### Hot Reload

Both frontend and backend support hot reload:
- **Frontend**: Vite HMR (instant)
- **Backend**: Nodemon (restarts on file change)

### Database Changes

After modifying `schema.prisma`:
```powershell
cd backend
npm run prisma:migrate
```

### Type Safety

TypeScript will catch errors at compile time. Always check types!

### Testing API

Use tools like:
- **Postman**: GUI API testing
- **curl**: Command line testing
- **Thunder Client**: VS Code extension
