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

Vercel will automatically use the settings from `vercel.json`:

- **Build Command:** `npm run build` (defined in vercel.json)
- **Output Directory:** `dist/public` (defined in vercel.json)
- **Install Command:** `npm install` (auto-detected)
- **Framework Preset:** None (we use custom configuration)

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

- **Build Command:** `npm run build` - Builds both client (Vite) and server (esbuild)
- **Output Directory:** `dist/public` - Static files served from here
- **API Routes:** `/api/*` requests are routed to the serverless API function
- **SPA Routing:** Catch-all rewrite `/(.*) -> /index.html` for client-side routing
- **Static Assets:** Cached with optimal headers (assets, images)
- **Headers:** Cache-Control headers for performance optimization

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

### Site Downloads a File Instead of Loading

**Fixed!** If you encountered this issue, it was caused by missing SPA routing configuration in `vercel.json`. The fix includes:
- Added catch-all rewrite rule `/(.*) -> /index.html`
- Explicitly defined `buildCommand` and `outputDirectory`
- Proper ordering of rewrites (API routes first, then catch-all)

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
- Verify `vercel.json` rewrites are correct (API routes should be before catch-all)
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
