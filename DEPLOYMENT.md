# Backend Deployment Guide

This guide covers deploying the Todo App backend to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- MySQL database configured
- Environment variables set up

## Environment Variables

Set these environment variables on your hosting platform:

```env
DATABASE_URL=mysql://username:password@hostname:port/database_name
PORT=3001
FRONTEND_URL=https://your-frontend-domain.com
```

## Deployment Options

### Railway

1. **Connect your GitHub repository**
2. **Set environment variables:**
   ```bash
   railway variables set DATABASE_URL=your_mysql_connection_string
   railway variables set PORT=3001
   railway variables set FRONTEND_URL=https://your-frontend-domain.com
   ```

3. **Deploy automatically** on git push

### Render

1. **Create new Web Service**
2. **Connect your GitHub repository**
3. **Set environment variables:**
   ```env
   DATABASE_URL=your_mysql_connection_string
   PORT=3001
   FRONTEND_URL=https://your-frontend-domain.com
   ```

4. **Build command:** `npm install && npm run build`
5. **Start command:** `npm start`

### Heroku

1. **Create new Heroku app**
2. **Connect your GitHub repository**
3. **Set environment variables:**
   ```bash
   heroku config:set DATABASE_URL=your_mysql_connection_string
   heroku config:set PORT=3001
   heroku config:set FRONTEND_URL=https://your-frontend-domain.com
   ```

4. **Deploy automatically** on git push

### DigitalOcean App Platform

1. **Create new App**
2. **Connect your GitHub repository**
3. **Set environment variables:**
   ```env
   DATABASE_URL=your_mysql_connection_string
   PORT=3001
   FRONTEND_URL=https://your-frontend-domain.com
   ```

4. **Build command:** `npm install && npm run build`
5. **Run command:** `npm start`

## Database Setup

### MySQL Hosting Options

- **PlanetScale**: Modern MySQL hosting
- **Railway**: Easy MySQL setup
- **Clever Cloud**: European hosting
- **AWS RDS**: Enterprise-grade MySQL

### Connection String Format

```
mysql://username:password@hostname:port/database_name
```

## Build and Deploy

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

## Health Check

Your deployed backend will have a health check endpoint:
- **Health Check**: `https://your-domain.com/health`

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check your `DATABASE_URL`
   - Verify database is accessible
   - Check firewall settings

2. **Port Already in Use**
   - Use `PORT` environment variable
   - Most platforms set this automatically

3. **Build Failures**
   - Ensure Node.js 18+
   - Check for TypeScript errors
   - Verify all dependencies installed

### Logs

Check your hosting platform's logs for:
- Build errors
- Runtime errors
- Database connection issues

## Security Notes

- Never commit `.env` files to Git
- Use strong database passwords
- Enable HTTPS on production
- Set appropriate CORS origins
