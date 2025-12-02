# Chunkoverflow

A modern web application for managing and showcasing tools and projects.

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS v3** - Utility-first styling
- **Shadcn UI** - Accessible components
- **Zustand** - State management
- **React Router** - Client-side routing

### Backend
- **Express** with TypeScript
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Multer** - File uploads

## 📁 Project Structure

```
chunkoverflow/
├── backend/          # Express TypeScript API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── lib/
│   │   └── server.ts
│   ├── prisma/
│   └── package.json
├── frontend/         # React TypeScript SPA
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── main.tsx
│   └── package.json
└── knowledge-base/   # Documentation
```

## 🎯 Features

### Public Features
- Browse published blocks/tools
- Search functionality
- Detailed block views
- Responsive design
- Markdown support

### Admin Features
- Secure authentication
- CRUD operations for blocks
- Image upload for icons
- Status management
- Soft delete (archive)
- Modern admin dashboard

## 🛠️ Setup

### Prerequisites
- Node.js v18+
- PostgreSQL v14+
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/thangnpq-dev/chunkoverflow.git
cd chunkoverflow
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

3. **Setup Frontend** (in new terminal)
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Admin: http://localhost:5173/admin/login
  - Username: `admin`
  - Password: `admin123`

## 📚 Documentation

See the [knowledge-base](./knowledge-base/) folder for comprehensive documentation:

- [Project Overview](./knowledge-base/01-project-overview.md)
- [Architecture](./knowledge-base/02-architecture.md)
- [Setup Guide](./knowledge-base/07-setup-guide.md)
- [API Documentation](./knowledge-base/06-api.md)

## 🎨 Design

- **Primary Color**: #72d1a8 (Mint Green)
- **UI Framework**: Shadcn UI (Radix UI + Tailwind)
- **Typography**: System fonts
- **Icons**: Lucide React

## 📝 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Express
chunkoverflow/
├── prisma/
│   └── schema.prisma
├── public/
│   ├── css/
│   ├── js/
│   └── uploads/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   └── lib/
├── views/
│   ├── admin/
│   ├── block/
│   └── partials/
└── server.js

### Directory Structure Description

- `prisma/`: Contains Prisma configuration files and database schema
- `public/`: Static files directory
  - `css/`: CSS files
  - `js/`: JavaScript files
  - `uploads/`: Uploaded images
- `src/`: Main source code
  - `controllers/`: Application logic
  - `middleware/`: Custom middleware functions
  - `routes/`: Route definitions
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