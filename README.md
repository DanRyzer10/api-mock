# Latinia Mock API

A simple Next.js API that exposes a versioned endpoint for message handling.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Vercel Deployment

This project is configured for deployment on Vercel:

### Option 1: Using the Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Option 2: Using the Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your project in the Vercel dashboard (https://vercel.com/new)
3. Vercel will automatically detect it as a Next.js project and deploy it

## API Usage

Send a POST request to `/api/v1/send` with a JSON body:

```bash
curl -X POST https://your-vercel-deployment.vercel.app/api/v1/send \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello, world!"}'
```
