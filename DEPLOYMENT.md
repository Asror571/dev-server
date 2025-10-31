# Deployment Guide

## Environment Variables Required

Set these environment variables in your deployment platform:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret_key
NODE_ENV=production
```

## Platform-Specific Deployment

### 1. Railway
- Connect your GitHub repository
- Set environment variables in Railway dashboard
- Deploy automatically on push

### 2. Vercel
- Connect GitHub repository
- Add environment variables in Vercel dashboard
- Uses `vercel.json` configuration

### 3. Heroku
- Create new Heroku app
- Set config vars (environment variables)
- Uses `Procfile` for process definition
- Deploy via Git or GitHub integration

### 4. Render
- Connect GitHub repository
- Set environment variables in Render dashboard
- Auto-deploy on push

## MongoDB Setup

1. Create MongoDB Atlas account
2. Create new cluster
3. Get connection string
4. Add to MONGODB_URI environment variable

## Post-Deployment

1. Test API endpoints
2. Run seed script if needed: `npm run seed`
3. Verify admin user creation

## Security Notes

- Change JWT_SECRET to a strong, unique value
- Use MongoDB Atlas IP whitelist
- Enable MongoDB authentication
- Use HTTPS in production