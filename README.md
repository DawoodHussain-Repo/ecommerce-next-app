# E-Commerce Application with Wix Integration

A modern, full-featured e-commerce application built with Next.js 15, React 19, TypeScript, and Wix Headless CMS.

## 🚀 Quick Start (Demo Mode)

**No configuration needed!** Just clone and run:

```bash
git clone <your-repo-url>
cd ecommerce-next-app
npm install
npm run dev
```

The app will automatically run in **Demo Mode** with sample products and categories. You'll see a warning banner indicating that Wix is not configured - this is expected!

> 💡 **For Recruiters:** The app works out-of-the-box with demo data. See [Configuration](#configuration) below to connect to a real Wix store.

## Features

- 🛍️ Product browsing and filtering
- 🛒 Shopping cart functionality
- 👤 User authentication (login/register)
- 🔍 Product search
- 📱 Responsive design
- 💳 Checkout integration with Wix
- 🎨 Modern UI with Tailwind CSS
- 📦 Product variants and customization
- 🏷️ Category management
- ✨ **Demo Mode** - Works without configuration!

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Backend/CMS:** Wix Headless
- **Authentication:** Wix Members
- **E-commerce:** Wix Stores & Wix eCommerce

## Demo Mode vs Live Mode

| Feature         | Demo Mode            | Live Mode (with Wix)  |
| --------------- | -------------------- | --------------------- |
| Product Display | ✅ Sample products   | ✅ Real products      |
| Categories      | ✅ Sample categories | ✅ Real categories    |
| Cart            | ⚠️ UI only           | ✅ Full functionality |
| Checkout        | ❌ Disabled          | ✅ Full functionality |
| User Auth       | ❌ Disabled          | ✅ Full functionality |

## Configuration

To connect to a real Wix store:

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Fill in your Wix credentials (see [Environment Variables](#environment-variables-setup))

3. Restart the development server

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Wix account with a Headless project set up (optional - for live data)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd ecommerce
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional - see below)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

### Required Environment Variables:

#### 1. NEXT_PUBLIC_WIX_CLIENT_ID

**How to get it:**

- Go to [Wix Developers](https://dev.wix.com/)
- Log in to your account
- Navigate to your project or create a new one
- Go to **Settings** → **API Keys**
- Create a new API key or use an existing one
- Copy the **Client ID**

**Example:**

```
NEXT_PUBLIC_WIX_CLIENT_ID=12345678-abcd-1234-abcd-123456789abc
```

#### 2. FEATURED_PRODUCT_CATEGORY_ID

**How to get it:**

- Log in to your [Wix Dashboard](https://manage.wix.com/)
- Go to **Store Products** → **Collections**
- Create a collection called "Featured Products" (or use an existing one)
- Click on the collection
- The collection ID is in the URL: `...collections/YOUR_COLLECTION_ID`
- Copy this ID

**Example:**

```
FEATURED_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000001
```

#### 3. NEW_PRODUCT_CATEGORY_ID (Optional)

**How to get it:**

- Same process as Featured Products
- Create or select a "New Products" collection
- Copy the collection ID from the URL

**Example:**

```
NEW_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000002
```

#### 4. NEXT_PUBLIC_BASE_URL

**What it is:**

- Your application's base URL
- For local development: `http://localhost:3000`
- For production: Your deployed URL (e.g., `https://yourdomain.com`)

**Example:**

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Complete .env.local Example:

```env
# Wix Configuration
NEXT_PUBLIC_WIX_CLIENT_ID=12345678-abcd-1234-abcd-123456789abc

# Product Categories
FEATURED_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000001
NEW_PRODUCT_CATEGORY_ID=00000000-000000-000000-000000000002

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Wix Setup Guide

### 1. Create a Wix Headless Project

1. Go to [Wix Developers](https://dev.wix.com/)
2. Click **Create New Project**
3. Select **Headless** project type
4. Follow the setup wizard

### 2. Enable Required APIs

In your Wix project dashboard, enable:

- **Wix Stores** (for products and collections)
- **Wix Members** (for user authentication)
- **Wix eCommerce** (for cart and checkout)

### 3. Add Products and Collections

1. Go to your Wix Dashboard
2. Navigate to **Store Products**
3. Add products with:
   - Product name
   - Description
   - Price
   - Images
   - Variants (optional: size, color, etc.)
4. Create collections (categories) and assign products

### 4. Configure OAuth

1. In your Wix project settings
2. Go to **OAuth** settings
3. Add your redirect URLs:
   - `http://localhost:3000` (for development)
   - Your production URL (when deployed)

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── cart/           # Shopping cart page
│   │   ├── list/           # Product listing page
│   │   ├── login/          # Authentication page
│   │   ├── profile/        # User profile page
│   │   └── [slug]/         # Dynamic product pages
│   ├── components/         # React components
│   │   ├── Add.tsx         # Add to cart component
│   │   ├── CartModal.tsx   # Cart dropdown
│   │   ├── Filter.tsx      # Product filters
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── ...
│   ├── context/            # React context
│   │   └── wixContext.tsx  # Wix client context
│   ├── hooks/              # Custom React hooks
│   │   ├── useCartStore.tsx    # Cart state management
│   │   └── useWixClient.tsx    # Wix client hook
│   ├── lib/                # Utility functions
│   │   └── wixClientServer.ts  # Server-side Wix client
│   └── middleware.ts       # Next.js middleware
├── public/                 # Static assets
├── .env.local             # Environment variables (create this)
└── package.json           # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Breakdown

### Authentication

- User registration and login
- OAuth integration with Wix
- Protected routes
- User profile management

### Shopping Cart

- Add/remove items
- Update quantities
- Persistent cart (stored in Wix)
- Real-time cart updates

### Products

- Product listing with pagination
- Product filtering (price, type, category)
- Product search
- Product variants (size, color, etc.)
- Product images with hover effects

### Checkout

- Integrated with Wix checkout
- Secure payment processing
- Order management

## Troubleshooting

### "Client ID not found" error

- Make sure you've created `.env.local` file
- Verify the `NEXT_PUBLIC_WIX_CLIENT_ID` is correct
- Restart the development server after adding env variables

### Products not showing

- Check that you've added products in your Wix dashboard
- Verify the collection IDs in `.env.local`
- Check browser console for API errors

### Cart not working

- Ensure Wix eCommerce API is enabled
- Check that you're logged in
- Verify network requests in browser dev tools

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Make sure to:

- Set all environment variables
- Update `NEXT_PUBLIC_BASE_URL` to your production URL
- Add production URL to Wix OAuth settings

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Wix Headless Documentation](https://dev.wix.com/docs/sdk)
- [Wix Stores API](https://dev.wix.com/docs/sdk/api-reference/stores)
- [Tailwind CSS](https://tailwindcss.com/docs)

## License

MIT

## Support

For issues and questions:

- Check the [Wix Developer Forum](https://forum.wix.com/)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Open an issue in this repository
