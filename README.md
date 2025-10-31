# Dev Hub 2.0 - Backend API

A modern REST API for managing technologies and user authentication.

## Features

- User authentication (JWT)
- Technology management (CRUD)
- Role-based access control
- MongoDB integration
- RESTful API design

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Setup environment:
```bash
cp .env.example .env
# Update .env with your MongoDB URI and JWT secret
```

3. Seed database (optional):
```bash
npm run seed
```

4. Start server:
```bash
# Production
npm start

# Development
npm run dev
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `NODE_ENV` - Environment (production/development)

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user

### User Management
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile

### Technology Management
- `GET /api/tech` - Get all technologies
- `GET /api/tech/:id` - Get technology by ID
- `GET /api/tech/slug/:slug` - Get technology by slug
- `POST /api/tech` - Create technology (admin only)
- `PUT /api/tech/:id` - Update technology (admin only)
- `DELETE /api/tech/:id` - Delete technology (admin only)

## Default Admin User
After seeding: `admin@devhub.com` / `admin123`

## Deployment

The application is ready for deployment on platforms like:
- Heroku
- Railway
- Render
- DigitalOcean App Platform
- AWS/GCP/Azure

Make sure to set environment variables in your deployment platform.
# dev-server
