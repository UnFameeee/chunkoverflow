# Project Overview

## What is Chunkoverflow?

Chunkoverflow is a modern web application for managing and showcasing a collection of tools, projects, and solutions. It provides a clean, user-friendly interface for browsing published content and a powerful admin panel for content management.

## Key Features

### Public Features
- **Browse Tools**: View a grid of published blocks/tools
- **Search**: Real-time search functionality
- **Detailed View**: Read full descriptions and details
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Status Indicators**: Visual badges for project status

### Admin Features
- **Authentication**: Secure JWT-based login system
- **CRUD Operations**: Create, read, update, delete blocks
- **Image Upload**: Upload and manage block icons
- **Status Management**: Set blocks as Pending, In Development, or Published
- **Soft Delete**: Archive blocks instead of permanent deletion
- **Modern UI**: Clean admin interface built with Shadcn UI

## Project Structure

```
chunkoverflow/
├── backend/          # Express TypeScript API
├── frontend/         # React TypeScript SPA
├── knowledge-base/   # Documentation
└── [legacy files]    # Old EJS-based code (to be removed)
```

## Design Philosophy

1. **Separation of Concerns**: Clear separation between frontend and backend
2. **Type Safety**: TypeScript throughout for better DX
3. **Modern Stack**: Latest stable versions of React, Express, and tools
4. **Developer Experience**: Easy setup, clear documentation
5. **User Experience**: Fast, responsive, intuitive interface

## Primary Color

The application uses **#72d1a8** (mint green) as its primary brand color, creating a modern and fresh look.

## Target Users

- **Public Users**: Browse and discover tools/projects
- **Administrators**: Manage content, update blocks, control visibility
