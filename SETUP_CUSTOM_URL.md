# Getting Your Custom URL: karthikpeddiportfolio.web.app

## Current Situation
- You have an existing project: `eventbazzar-e3f15` 
- Current URL: `https://eventbazzar-e3f15.web.app`
- **Desired URL**: `https://karthikpeddiportfolio.web.app`

## Solution: Create New Project with Correct ID

### Step 1: Create New Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" (or "Add project")
3. **Project Name**: Enter "Karthik Peddi Portfolio"
4. **Project ID**: When you see the project ID field, click "Edit" and change it to:
   ```
   karthikpeddiportfolio
   ```
5. **Important**: Make sure the project ID shows exactly `karthikpeddiportfolio`
6. Continue with setup (you can disable Google Analytics)
7. Wait for project creation

### Step 2: Verify Project ID
After creation, check that your project URL is:
- Console: `https://console.firebase.google.com/project/karthikpeddiportfolio/overview`
- Future Hosting URL: `https://karthikpeddiportfolio.web.app`

### Step 3: Deploy to New Project

Your configuration is already set up for the new project:

```bash
# Login (if not already logged in)
npm run firebase:login

# Deploy to the new project
npm run firebase:deploy
```

## Alternative: If Project ID is Taken

If `karthikpeddiportfolio` is already taken, try these alternatives:

1. `karthik-peddi-portfolio`
2. `karthikpeddi-portfolio`  
3. `kpeddi-portfolio`
4. `karthikpeddi-dev`

Then update `.firebaserc` with the chosen ID:

```json
{
  "projects": {
    "default": "your-chosen-project-id"
  }
}
```

## What About the Old Project?

You can:
1. **Keep it**: Leave `eventbazzar-e3f15` as is (no cost for unused projects)
2. **Delete it**: Go to Project Settings → General → Delete Project (if you don't need it)

## Quick Commands

```bash
# Check current Firebase projects
firebase projects:list

# Switch between projects (if you have multiple)
firebase use karthikpeddiportfolio

# Deploy
npm run firebase:deploy
```

## Expected Result

After successful deployment:
- **Your Portfolio URL**: `https://karthikpeddiportfolio.web.app`
- **Firebase Console**: `https://console.firebase.google.com/project/karthikpeddiportfolio/overview`