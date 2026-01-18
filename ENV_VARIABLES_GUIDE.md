# Environment Variables Quick Reference

## 📋 Required Variables

Copy this template to your `.env.local` file and replace the values:

```env
# ============================================
# WIX CONFIGURATION
# ============================================

# Your Wix Client ID
# Where to find: Wix Developers Dashboard → Settings → API Keys
# Format: UUID (e.g., 12345678-abcd-1234-abcd-123456789abc)
NEXT_PUBLIC_WIX_CLIENT_ID=your_wix_client_id_here

# ============================================
# PRODUCT CATEGORIES
# ============================================

# Featured Products Collection ID
# Where to find: Wix Dashboard → Store Products → Collections → Click collection → Copy ID from URL
# Format: UUID or Wix collection ID
FEATURED_PRODUCT_CATEGORY_ID=your_featured_category_id_here

# New Products Collection ID (Optional - can use same as featured)
# Where to find: Same as above
# Format: UUID or Wix collection ID
NEW_PRODUCT_CATEGORY_ID=your_new_category_id_here

# ============================================
# APPLICATION SETTINGS
# ============================================

# Base URL of your application
# Development: http://localhost:3000
# Production: Your deployed URL (e.g., https://yourdomain.com)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 🔍 How to Get Each Variable

### 1. NEXT_PUBLIC_WIX_CLIENT_ID

**Step-by-step:**
1. Go to [https://dev.wix.com/](https://dev.wix.com/)
2. Log in to your account
3. Select your project (or create a new one)
4. Click on **Settings** in the left sidebar
5. Click on **API Keys**
6. Click **"Create API Key"** (or use existing)
7. Copy the **Client ID** value
8. Paste it in your `.env.local` file

**What it looks like:**
```
NEXT_PUBLIC_WIX_CLIENT_ID=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

**Why it's needed:**
- Authenticates your app with Wix services
- Required for all Wix API calls
- Enables user authentication and cart functionality

---

### 2. FEATURED_PRODUCT_CATEGORY_ID

**Step-by-step:**
1. Go to [https://manage.wix.com/](https://manage.wix.com/)
2. Select your site
3. Click **Store Products** in left sidebar
4. Click **Collections** tab
5. Create a collection named "Featured Products" (or select existing)
6. Click on the collection to open it
7. Look at the browser URL bar
8. The URL will be: `https://manage.wix.com/.../collections/YOUR_ID_HERE`
9. Copy the ID from the URL
10. Paste it in your `.env.local` file

**What it looks like:**
```
FEATURED_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000001
```

**Why it's needed:**
- Displays featured products on the homepage
- Filters products for the "Featured" section
- Required for homepage to load products

---

### 3. NEW_PRODUCT_CATEGORY_ID

**Step-by-step:**
1. Same process as Featured Products
2. Create or select a "New Products" collection
3. Copy the collection ID from the URL
4. Paste it in your `.env.local` file

**What it looks like:**
```
NEW_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000002
```

**Why it's needed:**
- Displays new products on the homepage
- Optional - you can use the same ID as featured products if you want

**Note:** If you don't have a separate "New Products" collection, you can use the same ID as `FEATURED_PRODUCT_CATEGORY_ID`

---

### 4. NEXT_PUBLIC_BASE_URL

**For Development:**
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**For Production (after deployment):**
```
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

**Why it's needed:**
- Used for OAuth redirects
- Required for authentication flow
- Needed for absolute URLs in the app

---

## ✅ Verification Checklist

After setting up your `.env.local` file:

- [ ] File is named exactly `.env.local` (not `.env` or `env.local`)
- [ ] File is in the root directory of your project
- [ ] All four variables are set
- [ ] No quotes around the values
- [ ] No spaces around the `=` sign
- [ ] Client ID is a valid UUID format
- [ ] Collection IDs exist in your Wix dashboard
- [ ] Base URL matches your environment (localhost for dev)

---

## 🚨 Common Mistakes

### ❌ Wrong:
```env
NEXT_PUBLIC_WIX_CLIENT_ID = "your_id_here"
FEATURED_PRODUCT_CATEGORY_ID='your_id_here'
NEXT_PUBLIC_BASE_URL = http://localhost:3000/
```

### ✅ Correct:
```env
NEXT_PUBLIC_WIX_CLIENT_ID=a1b2c3d4-e5f6-7890-abcd-ef1234567890
FEATURED_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000001
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 🔄 After Adding Variables

**Important:** You must restart your development server after creating or modifying `.env.local`

1. Stop the server (press `Ctrl + C` in terminal)
2. Start it again: `npm run dev`
3. Refresh your browser

---

## 🔒 Security Notes

- **Never commit `.env.local` to Git** (it's already in `.gitignore`)
- **Never share your Client ID publicly**
- **Use different Client IDs for development and production** (if possible)
- **Keep your Wix API keys secure**

---

## 📝 Example Complete File

Here's what your `.env.local` should look like with real values:

```env
# Wix Configuration
NEXT_PUBLIC_WIX_CLIENT_ID=a1b2c3d4-e5f6-7890-abcd-ef1234567890

# Product Categories
FEATURED_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000001
NEW_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000002

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 🆘 Still Having Issues?

### Error: "Client ID not found"
- Check that `.env.local` exists in root directory
- Verify the variable name is exactly `NEXT_PUBLIC_WIX_CLIENT_ID`
- Restart your development server

### Error: "Collection not found"
- Verify the collection ID exists in your Wix dashboard
- Check that you copied the entire ID from the URL
- Make sure the collection has products assigned to it

### Error: "Unauthorized"
- Verify your Client ID is correct
- Check that APIs are enabled in Wix dashboard
- Ensure OAuth redirect URLs are configured

---

## 🎯 Quick Test

After setting up, test if variables are loaded:

1. Start your dev server: `npm run dev`
2. Open browser console (F12)
3. Type: `console.log(process.env.NEXT_PUBLIC_WIX_CLIENT_ID)`
4. You should see your Client ID (not `undefined`)

If you see `undefined`, the variable isn't loaded correctly.

---

## 📞 Need Help?

- Check the main `SETUP_GUIDE.md` for detailed setup instructions
- Review the `README.md` for troubleshooting tips
- Visit [Wix Developer Forum](https://forum.wix.com/)
- Check [Wix Documentation](https://dev.wix.com/docs)
