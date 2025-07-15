# Forex Rates Table

A secure forex rates table application that uses backend proxy to protect API keys.

## 🔒 Security Features

- API keys stored on server-side, not exposed to clients
- Environment variables for sensitive information management
- Backend proxy for API requests

## 🚀 Installation and Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables Setup

Create a `.env` file and add your API key:

```
FIXER_API_KEY=your_actual_api_key_here
PORT=3000
```

### 3. Run the Application

```bash
# Production
npm start

# Development (auto-restart)
npm run dev
```

### 4. Access the Application

Open your browser and visit `http://localhost:3000`

## 📁 Project Structure

```
FXPage/
├── index.html          # Frontend page
├── server.js           # Backend server
├── package.json        # Project configuration
├── .env               # Environment variables (not committed to Git)
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

## 🔐 Security Notes

- ✅ API keys stored in server-side `.env` file
- ✅ `.env` file added to `.gitignore`, won't be committed to Git
- ✅ Frontend fetches data through local API endpoint `/api/rates`
- ✅ External API keys completely invisible to clients

## 🌐 Production Deployment

When deploying, ensure:

1. Set `FIXER_API_KEY` environment variable on server
2. Do not upload `.env` file to server
3. Use PM2 or similar tools to manage Node.js processes

## 🌍 Making Your Website Accessible to Others

### Option 1: Local Network Access

To allow others on your local network to access:

```bash
# Run server on all network interfaces
node server.js
# Then share your local IP: http://192.168.x.x:3000
```

### Option 2: Cloud Deployment

Deploy to cloud platforms:

- **Heroku**: Free tier available
- **Vercel**: Great for Node.js apps
- **Railway**: Simple deployment
- **DigitalOcean**: VPS hosting

### Option 3: Tunnel Services (Development)

For quick sharing during development:

- **ngrok**: `npx ngrok http 3000`
- **localtunnel**: `npx localtunnel --port 3000`
