# Firebase Deployment Guide

This guide will help you deploy your React portfolio to Firebase Hosting.

## Prerequisites

1. A Google account
2. Firebase CLI installed (already done)
3. A Firebase project

## Step-by-Step Deployment

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. **Important**: Enter project name as "Karthik Peddi Portfolio" 
4. **Critical**: When prompted for Project ID, change it to `karthikpeddiportfolio`
   - This will give you the URL: `https://karthikpeddiportfolio.web.app`
5. Follow the setup wizard (disable Google Analytics if not needed)
6. Once created, verify your project ID is `karthikpeddiportfolio`

### 2. Login to Firebase

```bash
npm run firebase:login
```

This will open your browser to authenticate with Google.

### 3. Verify Project Configuration

The `.firebaserc` file is already configured for your desired URL:

```json
{
  "projects": {
    "default": "karthikpeddiportfolio"
  }
}
```

**This configuration will deploy to: `https://karthikpeddiportfolio.web.app`**

### 4. Initialize Firebase (Optional)

If you want to reconfigure Firebase settings:

```bash
npm run firebase:init
```

Select:
- Hosting: Configure files for Firebase Hosting
- Use existing project
- Select your project
- Public directory: `dist` (already configured)
- Single-page app: `Yes`
- Set up automatic builds: `No` (for now)

### 5. Build and Deploy

```bash
npm run firebase:deploy
```

This command will:
1. Build your React app (`npm run build`)
2. Deploy to Firebase Hosting (`firebase deploy`)

### 6. Test Locally (Optional)

To test your build locally before deploying:

```bash
npm run firebase:serve
```

## Available Scripts

- `npm run firebase:login` - Login to Firebase
- `npm run firebase:init` - Initialize Firebase configuration
- `npm run firebase:deploy` - Build and deploy to Firebase
- `npm run firebase:serve` - Build and serve locally

## Configuration Files

- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project configuration
- `.gitignore` - Updated to exclude Firebase cache files

## Important Notes

1. **Build Directory**: The app builds to `dist/` directory (Vite default)
2. **Single Page App**: Configured for React Router with catch-all routing
3. **Caching**: Optimized cache headers for static assets
4. **Custom Domain**: You can add a custom domain in Firebase Console > Hosting

## Troubleshooting

### Common Issues

1. **Build fails**: Run `npm run build` separately to check for build errors
2. **404 on refresh**: Make sure `rewrites` are configured in `firebase.json`
3. **Assets not loading**: Check if paths are correct and assets are in `public/` or imported properly

### Getting Help

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)

## Next Steps

After successful deployment:

1. Set up custom domain (optional)
2. Configure GitHub Actions for automatic deployment
3. Set up Firebase Analytics (optional)
4. Configure performance monitoring