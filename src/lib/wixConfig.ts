// Utility to check Wix configuration status

export const isWixConfigured = (): boolean => {
  const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
  return !!(
    clientId &&
    clientId !== "your_wix_client_id_here" &&
    clientId.length > 10
  );
};

export const getWixConfigStatus = () => {
  const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;

  return {
    isConfigured: isWixConfigured(),
    clientIdPresent: !!clientId,
    clientIdValid:
      clientId &&
      clientId !== "your_wix_client_id_here" &&
      clientId.length > 10,
  };
};

// Dummy data for when Wix is not configured
export const dummyProducts = [
  {
    _id: "demo-1",
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    price: { price: 149.99, discountedPrice: 119.99 },
    priceData: { price: 149.99, discountedPrice: 119.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description:
          "High-quality wireless headphones perfect for music lovers.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-2",
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    description:
      "Track your health and fitness goals with this feature-packed smartwatch.",
    price: { price: 299.99, discountedPrice: 249.99 },
    priceData: { price: 299.99, discountedPrice: 249.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "Advanced fitness tracking with heart rate monitoring.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-3",
    name: "Premium Laptop Backpack",
    slug: "premium-laptop-backpack",
    description:
      "Durable and stylish backpack with dedicated laptop compartment and USB charging port.",
    price: { price: 79.99, discountedPrice: 59.99 },
    priceData: { price: 79.99, discountedPrice: 59.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "Water-resistant material with multiple compartments.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-4",
    name: "Portable Bluetooth Speaker",
    slug: "portable-bluetooth-speaker",
    description:
      "Waterproof portable speaker with 360° sound and 24-hour playtime.",
    price: { price: 89.99, discountedPrice: 89.99 },
    priceData: { price: 89.99, discountedPrice: 89.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "IPX7 waterproof rating for outdoor adventures.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-5",
    name: "Minimalist Desk Lamp",
    slug: "minimalist-desk-lamp",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature.",
    price: { price: 49.99, discountedPrice: 39.99 },
    priceData: { price: 49.99, discountedPrice: 39.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "Energy-efficient LED with touch controls.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-6",
    name: "Wireless Charging Pad",
    slug: "wireless-charging-pad",
    description:
      "Fast wireless charger compatible with all Qi-enabled devices.",
    price: { price: 34.99, discountedPrice: 29.99 },
    priceData: { price: 34.99, discountedPrice: 29.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "15W fast charging with LED indicator.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-7",
    name: "Ergonomic Mouse",
    slug: "ergonomic-mouse",
    description:
      "Vertical ergonomic mouse designed for comfort during long work sessions.",
    price: { price: 59.99, discountedPrice: 49.99 },
    priceData: { price: 59.99, discountedPrice: 49.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "Reduces wrist strain with natural hand position.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
  {
    _id: "demo-8",
    name: "USB-C Hub Adapter",
    slug: "usb-c-hub-adapter",
    description:
      "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.",
    price: { price: 44.99, discountedPrice: 44.99 },
    priceData: { price: 44.99, discountedPrice: 44.99 },
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        },
      ],
    },
    productType: "physical",
    variants: [],
    productOptions: [],
    additionalInfoSections: [
      {
        title: "Product Info",
        description: "Compact design perfect for travel.",
      },
      { title: "Return Policy", description: "30-day money back guarantee." },
    ],
  },
];

export const dummyCategories = [
  {
    _id: "cat-1",
    name: "Electronics",
    slug: "electronics",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
    },
  },
  {
    _id: "cat-2",
    name: "Fashion",
    slug: "fashion",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
    },
  },
  {
    _id: "cat-3",
    name: "Home & Living",
    slug: "home-living",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
    },
  },
  {
    _id: "cat-4",
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
    },
  },
];

// Get a single dummy product by slug
export const getDummyProductBySlug = (slug: string) => {
  return dummyProducts.find((p) => p.slug === slug) || dummyProducts[0];
};
