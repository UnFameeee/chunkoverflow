# Chunkoverflow

A modern tools platform with React TypeScript frontend and Express.js backend.

## Architecture

This project has been restructured into a modern full-stack application:

- **Frontend**: React TypeScript with Vite, Tailwind CSS
- **Backend**: Express.js API server with Prisma ORM
- **Database**: Prisma ORM (supports PostgreSQL, MySQL, SQLite)

## Project Structure

```
├── Frontend/              # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── Backend/               # Express.js API server
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # Data models
│   │   ├── routes/        # Express routes
│   │   └── utils/         # Utility functions
│   ├── views/             # EJS templates (for admin)
│   ├── prisma/            # Database schema and migrations
│   ├── scripts/           # Utility scripts
│   └── package.json       # Backend dependencies
└── package.json           # Root package.json for scripts
```

## Installation
  - `lib/`: Helper libraries
- `views/`: EJS template files
  - `admin/`: Admin panel views
  - `block/`: Block-related views
  - `partials/`: Reusable view components
- `server.js`: Application entry point

## Routes

### Public Routes

- `GET /` - Homepage, displays all published blocks
- `GET /blocks/:slug` - Display detailed view of a specific block
- `GET /about` - About page
- `GET /privacy` - Privacy policy page

### Admin Routes

#### Authentication
- `GET /admin/login` - Display login form
- `POST /admin/login` - Process login
- `GET /admin/logout` - Logout

#### Block Management
- `GET /admin/blocks` - List all blocks
- `POST /admin/blocks` - Create new block
- `PUT /admin/blocks/:id` - Update block
- `DELETE /admin/blocks/:id` - Delete block
- `PATCH /admin/blocks/:id/archive` - Archive/Unarchive block

### API Routes

- `GET /api/blocks` - Get all blocks (JSON)
- `GET /api/blocks/:id` - Get specific block (JSON)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Email: thangnpq29@gmail.com

Project Link: [https://github.com/yourusername/chunkoverflow](https://github.com/yourusername/chunkoverflow)