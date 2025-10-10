# Authentication Setup

This project includes a complete authentication system with the following components:

## Database Schema

The database includes three main tables:
- `users`: User accounts with id, name, email, password_hash, created_at
- `conversations`: Chat conversations linked to users
- `messages`: Messages within conversations from users or AI

## API Endpoints

### POST /api/auth/register
- Accepts: `{ name, email, password }`
- Returns: User data with status 201
- Validates email format and password length
- Checks for existing users
- Hashes passwords with bcrypt

### POST /api/auth/login
- Accepts: `{ email, password }`
- Returns: `{ token, user: { id, name, email } }`
- Validates credentials
- Issues JWT token with 7-day expiry

## Environment Variables

Create a `.env.local` file with:

```
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
JWT_SECRET=your-super-secret-jwt-key-here
```

## Client Components

- `/login` - Login form that stores JWT in localStorage and redirects to `/dashboard`

## Dependencies

All required packages are already installed:
- `drizzle-orm` - Database ORM
- `postgres` - PostgreSQL client
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT token generation

## Database Setup

Run the following to set up your database:
```bash
npm run db:push
```

This will create the tables in your PostgreSQL database.
