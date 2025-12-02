# Chunkoverflow Frontend

React TypeScript SPA for Chunkoverflow.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v3
- Shadcn UI
- Zustand (state management)
- Axios (HTTP client)
- React Router

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## Project Structure

```
src/
├── components/       # Reusable components
│   └── ui/          # Shadcn components
├── pages/           # Route pages
│   └── admin/       # Admin pages
├── services/        # API services
├── store/           # Zustand stores
├── lib/             # Utilities
└── types/           # TypeScript types
```

## Routes

- `/` - Home page
- `/blocks/:slug` - Block detail
- `/admin/login` - Admin login
- `/admin/blocks` - Admin dashboard (protected)

## Development

The app runs on `http://localhost:5173` with hot module replacement.

API requests to `/api` are proxied to `http://localhost:5000`.
