# Complete Setup Guide for E-Commerce Application

## 🚀 Quick Start

Follow these steps to get your e-commerce application up and running.

---

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- React 19
- Wix SDK packages (@wix/sdk, @wix/stores, @wix/members, @wix/ecom)
- Zustand (state management)
- Tailwind CSS
- TypeScript

---

## Step 2: Set Up Wix Account

### 2.1 Create a Wix Account
1. Go to [https://www.wix.com/](https://www.wix.com/)
2. Sign up for a free account
3. Verify your email

### 2.2 Create a Headless Project
1. Visit [Wix Developers](https://dev.wix.com/)
2. Click **"Create New Project"**
3. Select **"Headless"** as project type
4. Give your project a name (e.g., "My E-Commerce Store")
5. Click **"Create"**

### 2.3 Get Your Client ID
1. In your Wix project dashboard
2. Navigate to **Settings** → **API Keys**
3. Click **"Create API Key"** or use existing one
4. Copy the **Client ID** (looks like: `12345678-abcd-1234-abcd-123456789abc`)
5. Save this - you'll need it for `.env.local`

---

## Step 3: Enable Required Wix APIs

In your Wix project dashboard, enable these APIs:

### 3.1 Wix Stores
1. Go to **APIs** section
2. Find **"Wix Stores"**
3. Click **"Enable"**
4. This allows you to manage products, collections, and inventory

### 3.2 Wix Members
1. In **APIs** section
2. Find **"Wix Members"**
3. Click **"Enable"**
4. This enables user authentication and profiles

### 3.3 Wix eCommerce
1. In **APIs** section
2. Find **"Wix eCommerce"**
3. Click **"Enable"**
4. This enables cart and checkout functionality

---

## Step 4: Add Products to Your Store

### 4.1 Access Wix Dashboard
1. Go to [https://manage.wix.com/](https://manage.wix.com/)
2. Select your site/project
3. Click on **"Store Products"** in the left sidebar

### 4.2 Create Collections (Categories)
1. Click on **"Collections"** tab
2. Click **"+ New Collection"**
3. Create these collections:
   - **"Featured Products"** - for homepage featured items
   - **"New Products"** - for new arrivals
   - **"All Products"** - for general catalog
4. For each collection:
   - Add a name
   - Add a description
   - Upload a cover image
   - Click **"Save"**

### 4.3 Get Collection IDs
1. Click on a collection (e.g., "Featured Products")
2. Look at the URL in your browser
3. The URL will look like: `https://manage.wix.com/.../collections/YOUR_COLLECTION_ID`
4. Copy the collection ID (the long string after `/collections/`)
5. Save these IDs - you'll need them for `.env.local`

### 4.4 Add Products
1. Go to **"Products"** tab
2. Click **"+ New Product"**
3. Fill in product details:
   - **Name**: Product name
   - **Price**: Product price
   - **Description**: Detailed description
   - **Images**: Upload product images (at least 2 for hover effect)
   - **Collections**: Assign to relevant collections
   - **Inventory**: Set stock quantity
4. (Optional) Add variants:
   - Click **"Add Options"**
   - Add options like Size (S, M, L, XL) or Color (Red, Blue, etc.)
   - Set prices and inventory for each variant
5. Click **"Save"**
6. Repeat for multiple products (add at least 8-10 for best experience)

---

## Step 5: Configure OAuth Settings

### 5.1 Add Redirect URLs
1. In your Wix project dashboard
2. Go to **Settings** → **OAuth**
3. Add these redirect URLs:
   - `http://localhost:3000` (for development)
   - `http://localhost:3000/login` (for login page)
   - Your production URL when you deploy (e.g., `https://yourdomain.com`)
4. Click **"Save"**

---

## Step 6: Create Environment Variables File

### 6.1 Create `.env.local` File
In the root of your project, create a file named `.env.local`

### 6.2 Add Environment Variables

```env
# Wix Client ID (from Step 2.3)
NEXT_PUBLIC_WIX_CLIENT_ID=your_wix_client_id_here

# Featured Products Collection ID (from Step 4.3)
FEATURED_PRODUCT_CATEGORY_ID=your_featured_collection_id_here

# New Products Collection ID (from Step 4.3)
NEW_PRODUCT_CATEGORY_ID=your_new_collection_id_here

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 6.3 Replace Placeholder Values

Replace the placeholder values with your actual IDs:

**Example:**
```env
NEXT_PUBLIC_WIX_CLIENT_ID=a1b2c3d4-e5f6-7890-abcd-ef1234567890
FEATURED_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000001
NEW_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000002
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## Step 7: Run the Application

### 7.1 Start Development Server
```bash
npm run dev
```

### 7.2 Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

### 7.3 Test the Application
1. **Homepage**: Should display featured products and categories
2. **Product Listing**: Click on a category to view products
3. **Product Details**: Click on a product to see details
4. **Add to Cart**: Select options and add items to cart
5. **Login/Register**: Create an account or log in
6. **Cart**: View cart and proceed to checkout

---

## Step 8: Troubleshooting

### Issue: "Client ID not found"
**Solution:**
- Verify `.env.local` file exists in root directory
- Check that `NEXT_PUBLIC_WIX_CLIENT_ID` is set correctly
- Restart the development server: Stop (Ctrl+C) and run `npm run dev` again

### Issue: No products showing
**Solution:**
- Verify you've added products in Wix dashboard
- Check collection IDs in `.env.local` match your Wix collections
- Open browser console (F12) and check for API errors
- Ensure Wix Stores API is enabled

### Issue: Cart not working
**Solution:**
- Ensure Wix eCommerce API is enabled in your project
- Check that you're logged in
- Clear browser cookies and try again
- Check browser console for errors

### Issue: Login not working
**Solution:**
- Verify Wix Members API is enabled
- Check OAuth redirect URLs are configured correctly
- Ensure `NEXT_PUBLIC_WIX_CLIENT_ID` is correct
- Try clearing browser cache and cookies

### Issue: Images not loading
**Solution:**
- Check that images are uploaded in Wix dashboard
- Verify image URLs in browser network tab
- Ensure `next.config.ts` has correct image domains

---

## Step 9: Build for Production

### 9.1 Build the Application
```bash
npm run build
```

### 9.2 Test Production Build Locally
```bash
npm start
```

### 9.3 Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click **"New Project"**
   - Import your repository
   - Add environment variables:
     - `NEXT_PUBLIC_WIX_CLIENT_ID`
     - `FEATURED_PRODUCT_CATEGORY_ID`
     - `NEW_PRODUCT_CATEGORY_ID`
     - `NEXT_PUBLIC_BASE_URL` (set to your Vercel URL)
   - Click **"Deploy"**

3. **Update Wix OAuth Settings:**
   - Add your Vercel URL to Wix OAuth redirect URLs
   - Example: `https://your-app.vercel.app`

---

## Step 10: Customize Your Store

### 10.1 Update Branding
- Edit `src/components/Navbar.tsx` to change "LAMA" to your brand name
- Edit `src/components/Footer.tsx` to update contact info and social links
- Update `src/app/layout.tsx` metadata (title, description)

### 10.2 Customize Colors
- Edit `tailwind.config.ts` to change color scheme
- Update button colors in components (currently using red-400)

### 10.3 Add More Features
- Order history page
- Wishlist functionality
- Product reviews
- Advanced filtering
- Payment gateway integration

---

## 📚 Additional Resources

- **Wix Headless Docs**: [https://dev.wix.com/docs/sdk](https://dev.wix.com/docs/sdk)
- **Wix Stores API**: [https://dev.wix.com/docs/sdk/api-reference/stores](https://dev.wix.com/docs/sdk/api-reference/stores)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🎉 You're All Set!

Your e-commerce application is now ready to use. Happy selling! 🛍️

For questions or issues, refer to the troubleshooting section or check the documentation links above.
