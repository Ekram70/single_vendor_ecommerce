const categories = [
  {
    label: 'Food',
    subCategories: [
      {
        label: 'Fruits & Vegetables',
        subSubCategories: ['Fresh Vegetables', 'Fresh Fruits']
      },
      {
        label: 'Meat & Fish',
        subSubCategories: [
          'Chicken & Poultry',
          'Frozen Fish',
          'Meat',
          'Tofu & Meat Alternatives',
          'Dried Fish'
        ]
      },
      {
        label: 'Cooking',
        subSubCategories: [
          'Spices',
          'Salt & Sugar',
          'Rice',
          'Dal or Lentil',
          'Ready Mix',
          'Shemai & Suji',
          'Special Ingredients',
          'Oil',
          'Colors & Flavours',
          'Ghee',
          'Premium Ingredients'
        ]
      },
      {
        label: 'Sauces & Pickles',
        subSubCategories: ['Tomato Sauces', 'Pickles', 'Cooking Sauces', 'Other Table Sauces']
      },
      {
        label: 'Dairy & Eggs',
        subSubCategories: [
          'Eggs',
          'Powder Milk',
          'Liquid & UHT Milk',
          'Yogurt & Sweets',
          'Cheese',
          'Condensed Milk & Cream',
          'Butter & Sour Cream'
        ]
      },
      {
        label: 'Breakfast',
        subSubCategories: [
          'Eggs',
          'Breads',
          'Tea & Coffe',
          'Local Breakfast',
          'Cereals',
          'Honey',
          'Dips, Spreads & Syrups',
          'Energy Boosters',
          'Jams & Jellies'
        ]
      },
      {
        label: 'Candy & Chocolate',
        subSubCategories: [
          'Chocolates',
          'Wafers',
          'Candies',
          'Gums, Mints & Mouth Freshners',
          'Jellies & Marshmallows'
        ]
      },
      {
        label: 'Snacks',
        subSubCategories: [
          'Noodles',
          'Cookies',
          'Local Sancks',
          'Chips & Pretzels',
          'Plain Biscuits',
          'Toast & Bakery Biscuits',
          'Cream Biscuits',
          'Pasta & Macaroni',
          'Soups',
          'Popcorn & Nuts',
          'Salted Biscuits',
          'Cakes',
          'Salad Dressing'
        ]
      },
      {
        label: 'Beverages',
        subSubCategories: [
          'Tea',
          'Soft Drinks',
          'Coffee',
          'Syrups & Powder Drinks',
          'Juice',
          'Water'
        ]
      },
      {
        label: 'Baking',
        subSubCategories: [
          'Flour',
          'Nuts & Dried Fruits',
          'Baking Ingredients',
          'Baking Tools',
          'Baking & Dessert Mixes'
        ]
      },
      {
        label: 'Forzen & Canned',
        subSubCategories: [
          'Chicken Sancks',
          'Frozen Parathas & Roti',
          'Vegetable Snacks',
          'Mushroom Cans',
          'Beef Snacks',
          'Vegetables Cans',
          'Fish Cans',
          'Canned Fruits & Sweets',
          'Fish Snacks',
          'Ice Cream'
        ]
      },
      {
        label: 'Diabetic Food',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Cleaning Supplies',
    subCategories: [
      {
        label: 'Dishwashing Supplies',
        subSubCategories: null
      },
      {
        label: 'Laundry',
        subSubCategories: null
      },
      {
        label: 'Toilet Cleaners',
        subSubCategories: null
      },
      {
        label: 'Napkins & Paper Products',
        subSubCategories: null
      },
      {
        label: 'Pest Control',
        subSubCategories: null
      },
      {
        label: 'Floor & Glass Cleaners',
        subSubCategories: null
      },
      {
        label: 'Cleaning Accessories',
        subSubCategories: null
      },
      {
        label: 'Air Freshners',
        subSubCategories: null
      },
      {
        label: 'Disposables & Trash Bags',
        subSubCategories: null
      },
      {
        label: 'Shoe Care',
        subSubCategories: null
      },
      {
        label: 'Trash Bin & Basket',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Personal Care',
    subCategories: [
      {
        label: "Women's Care",
        subSubCategories: [
          "Woman's Soaps",
          'Hair Care',
          "Women's Shampoos & Conditioners",
          'Feminine Care',
          'Female Moisturizer',
          'Face Wash & Scrub',
          'Female Deo',
          "Women's Perfume",
          "Women's Shower Gel",
          'Masks & Cleaners',
          'Serum, Oil & Toners'
        ]
      },
      {
        label: "Men's Care",
        subSubCategories: [
          "Men's Soaps",
          "Men's Perfume",
          "Men's Shampoos & Conditioners",
          'Shaving Needs',
          'Beard Gromming',
          "Men's Deodorants",
          'Razors & Blades',
          "Men's Hair Care",
          'Cream & Lotion',
          "Men's Facewash",
          "Men's Shower Gels"
        ]
      },
      {
        label: 'Handwash',
        subSubCategories: ['Liquid Handwash', 'Hand Sanitizer']
      },
      {
        label: 'Tissue & Wipes',
        subSubCategories: null
      },
      {
        label: 'Oral Care',
        subSubCategories: ['Toothpastes', 'Toothbrushes', 'Mouthwash & Others']
      },
      {
        label: 'Skin Care',
        subSubCategories: [
          'Soaps',
          'Lotions',
          'Petroleum Jelly',
          'Creams',
          'Face Wash & Mask',
          'Body & Hair Oil',
          'Lipsticks & Lip Balm'
        ]
      },
      {
        label: 'Talcom Powder',
        subSubCategories: null
      },
      {
        label: 'Hair Color',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Health & Wellness',
    subCategories: [
      {
        label: 'Keto Food',
        subSubCategories: null
      },
      {
        label: 'Antiseptics',
        subSubCategories: null
      },
      {
        label: 'Handwash & Handrub',
        subSubCategories: null
      },
      {
        label: 'Herbal & Digestive Aids',
        subSubCategories: null
      },
      {
        label: 'Food Supplements',
        subSubCategories: null
      },
      {
        label: 'Face Masks & Safety',
        subSubCategories: null
      },
      {
        label: 'Family Planning',
        subSubCategories: null
      },
      {
        label: 'Mouthwashed, Inhaler & Balm',
        subSubCategories: null
      },
      {
        label: 'Adult Diapers',
        subSubCategories: null
      },
      {
        label: 'Multipurpose Spray',
        subSubCategories: null
      },
      {
        label: 'Medical Devices',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Baby Care',
    subCategories: [
      {
        label: 'Diapers',
        subSubCategories: [
          'Medium (5-13 kg) Diapers',
          'Large (10-16 kg) Diapers',
          'Extra Large (15+ kg) Diapers',
          'Small (3-7 kg) Diapers',
          'Newborn (2-5 kg) Diapers'
        ]
      },
      {
        label: 'Baby Food',
        subSubCategories: ['Milk, Juice & Drinks', 'Baby & Toodler Food', 'Formula']
      },
      {
        label: 'Baby Skincare',
        subSubCategories: null
      },
      {
        label: 'Wipes',
        subSubCategories: null
      },
      {
        label: 'Baby Oral Care',
        subSubCategories: null
      },
      {
        label: 'Newborn Essentials',
        subSubCategories: null
      },
      {
        label: 'Baby Accessories',
        subSubCategories: null
      },
      {
        label: 'Feeders',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Home & Kitchen',
    subCategories: [
      {
        label: 'Kitchen Accessories',
        subSubCategories: null
      },
      {
        label: 'Kitchen Appliances',
        subSubCategories: null
      },
      {
        label: 'Lights & Electrical',
        subSubCategories: null
      },
      {
        label: 'Tools & HardWare',
        subSubCategories: null
      },
      {
        label: 'Basket & Bucket',
        subSubCategories: null
      },
      {
        label: 'Box & Container',
        subSubCategories: null
      },
      {
        label: 'Gardening',
        subSubCategories: null
      },
      {
        label: 'Rack & Organizer',
        subSubCategories: null
      },
      {
        label: 'Disposables',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Stationary & Office',
    subCategories: [
      {
        label: 'Office Electronics',
        subSubCategories: ['Battries', 'Calculators']
      },
      {
        label: 'Organizers',
        subSubCategories: [
          'Tapes, Glues & Adhesive',
          'Stapler & Punch',
          'Organizing Accessories',
          'Cutting',
          'Files & Folders',
          'Measuring Tools',
          'Desk Organizers',
          'Lable & Stamp'
        ]
      },
      {
        label: 'Writing & Printing',
        subSubCategories: [
          'Pens',
          'Highlighters & Markers',
          'Toner & Ink',
          'Pencils',
          'Erasers & Correction Fluid'
        ]
      },
      {
        label: 'Paper Supplies',
        subSubCategories: ['Printing Paper', 'Diaries & Notebooks', 'Cards & Envelopes']
      },
      {
        label: 'School Supplies',
        subSubCategories: null
      },
      {
        label: 'Arts & Crafts',
        subSubCategories: ['Color Pencils', 'Pastel & Crayon', 'Oil & Watercolor']
      }
    ]
  },
  {
    label: 'Pet Care',
    subCategories: [
      {
        label: 'Cat Food',
        subSubCategories: null
      },
      {
        label: 'Cat Litters',
        subSubCategories: null
      },
      {
        label: 'Kitten Food',
        subSubCategories: null
      },
      {
        label: 'Dog Food',
        subSubCategories: null
      },
      {
        label: 'Grooming & Cleaning',
        subSubCategories: null
      },
      {
        label: 'Bird & Other Pet Food',
        subSubCategories: null
      },
      {
        label: 'Aquarium Fish Food',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Toys & Sports',
    subCategories: [
      {
        label: 'Exercise & Fitness',
        subSubCategories: null
      },
      {
        label: 'Toy Vehicles',
        subSubCategories: null
      },
      {
        label: 'Dolls & Action Figures',
        subSubCategories: null
      },
      {
        label: 'Plush & stuffed Animals',
        subSubCategories: null
      },
      {
        label: 'Learning Toys',
        subSubCategories: null
      },
      {
        label: 'Blocks & Building Sets',
        subSubCategories: null
      },
      {
        label: 'Kids Books',
        subSubCategories: null
      },
      {
        label: 'Sports',
        subSubCategories: null
      },
      {
        label: 'Board Game',
        subSubCategories: null
      },
      {
        label: 'Party Supplies',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Beauty & Makeup',
    subCategories: [
      {
        label: 'Eyes',
        subSubCategories: null
      },
      {
        label: 'Lips',
        subSubCategories: null
      },
      {
        label: 'Nails',
        subSubCategories: null
      },
      {
        label: 'Tools & Brushes',
        subSubCategories: null
      },
      {
        label: 'Face',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Fashion & Lifestyle',
    subCategories: [
      {
        label: 'Clothing Essentials',
        subSubCategories: null
      },
      {
        label: 'Money Bags',
        subSubCategories: null
      },
      {
        label: 'Travel Accessories',
        subSubCategories: null
      },
      {
        label: 'Bedding & Blankets',
        subSubCategories: null
      },
      {
        label: 'Baby Clothes',
        subSubCategories: null
      },
      {
        label: 'Ladies Handbags',
        subSubCategories: null
      }
    ]
  },
  {
    label: 'Vehicle Essentials',
    subCategories: null
  }
];

export default categories;

/* Categories Structure
  {
    label: "",
    subCategories: [
      {
        label: "",
        subSubCategories: [],
      },
      {
        label: "",
        subSubCategories: [],
      },
    ],
  },
*/
