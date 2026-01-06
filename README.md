# Private Beauty Salon - Luxury Mobile Spa Bali

This project is a modern, responsive web application for a luxury mobile spa service in Bali. It features a premium design, mobile-first approach, and full booking capabilities.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4, Framer Motion, Wouter (routing)
- **Backend:** Node.js, Express
- **Language:** TypeScript
- **UI Components:** Radix UI, Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

```bash
npm install
```

### Development

To start the development server (frontend and backend):

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

### Build

To build the application for production:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled assets.

## Project Structure

- `client/`: Frontend source code
- `server/`: Backend source code
- `shared/`: Shared types and utilities
- `attached_assets/`: Static assets and generated images (Optimized WebP)

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/). 

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the button above or go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your GitHub repository
3. Vercel will auto-detect settings from `vercel.json`
4. Click "Deploy"

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Environment Variables

No environment variables are required for basic functionality. The current implementation uses in-memory storage.
