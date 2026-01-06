# Deployment Guide for Vercel

This guide will help you deploy the Private Beauty Salon website to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Git repository connected to Vercel

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ddandanell/Private-Beauty-Salon)

## Manual Deployment Steps

### 1. Connect Your Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Select "Private-Beauty-Salon"

### 2. Configure Build Settings

Vercel should automatically detect the settings from `vercel.json`, but verify:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Install Command:** `npm install`

### 3. Environment Variables

No environment variables are required for basic functionality. The app uses in-memory storage for the current implementation.

### 4. Deploy

Click "Deploy" and Vercel will:
1. Install dependencies
2. Build the client (Vite)
3. Build the server (esbuild)
4. Deploy to production

## Vercel Configuration

The project includes a `vercel.json` file with optimized settings:

- **Framework:** Vite (auto-detected)
- **API Routes:** `/api/*` requests are routed to the serverless API
- **Static Assets:** Cached with optimal headers
- **Clean URLs:** Enabled
- **Trailing Slashes:** Disabled

## Post-Deployment Checklist

After deployment, verify:

- [x] Homepage loads correctly
- [x] Hero section displays properly
- [x] All images load (check WebP support)
- [x] Navigation works (all routes)
- [x] Favicon appears
- [x] Open Graph tags work (test with [Facebook Debugger](https://developers.facebook.com/tools/debug/))
- [x] Mobile responsiveness
- [x] WhatsApp button links work

## Troubleshooting

### Build Fails

If the build fails, check:
- Node.js version (should be 20+)
- All dependencies are in `package.json`
- Run `npm run build` locally to test

### Images Don't Load

If images don't appear:
- Verify images are in `attached_assets/generated_images/`
- Check browser console for 404 errors
- Ensure WebP images are supported

### API Routes Not Working

If `/api/*` routes fail:
- Check `api/index.ts` is properly configured
- Verify `vercel.json` rewrites are correct
- Check Vercel function logs

### Hero Section Issues

The Hero component requires:
- `elegant_manicure_in_a_luxury_bali_villa_setting.webp`
- All assets are copied during build

## Performance Optimization

The site is optimized with:
- WebP images (smaller file sizes)
- Asset caching (1 year)
- Code splitting ready
- Production builds minified

## Custom Domain

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed
4. Wait for SSL certificate

## Support

For issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Project README](./README.md)
- GitHub Issues
