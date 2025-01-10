# Chunkoverflow

A modern web application for managing and showcasing various projects and solutions. Built with Node.js, Express, and Prisma.

## Features

- 🚀 Modern and responsive UI using TailwindCSS
- 🔐 Secure admin panel for content management
- 📱 Mobile-friendly design
- 🖼️ Image upload support for block icons
- 🔍 SEO-friendly URLs
- 🎨 Beautiful UI with primary color #72d1a8

### Core Functionalities

- **Public Access**
  - View list of tools/blocks
  - Read detailed descriptions
  - Filter by status
  - Responsive design for all devices

- **Admin Panel**
  - Secure authentication
  - CRUD operations for blocks
  - Image upload management
  - Status management (Pending, In Development, Published)
  - Soft delete (archive) functionality

## Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - Prisma (ORM)
  - MySQL

- **Frontend**
  - EJS (Embedded JavaScript Templates)
  - TailwindCSS
  - AOS (Animate On Scroll)

- **Tools & Utilities**
  - Multer (File uploads)
  - Slugify (URL-friendly slugs)
  - Express Session
  - Method Override

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chunkoverflow.git
   cd chunkoverflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/dbname"
   PORT=3000
   SESSION_SECRET="your-secret-key"
   ADMIN_USERNAME="admin"
   ADMIN_PASSWORD="your-secure-password"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```

5. **Build CSS**
   ```bash
   npm run build:css
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Development

- **Watch CSS changes**
  ```bash
  npm run watch:css
  ```

- **Build CSS for production**
  ```bash
  npm run build:css
  ```

## Project Structure
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