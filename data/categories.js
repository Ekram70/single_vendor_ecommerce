const categories = [
  {
    label: "Food",
    subCategories: [
      {
        label: "Fruits & Vegetables",
        subSubCategories: ["Fresh Vegetables", "Fresh Fruits"],
      },
      {
        label: "Meat & Fish",
        subSubCategories: [
          "Chicken & Poultry",
          "Frozen Fish",
          "Meat",
          "Tofu & Meat Alternatives",
          "Dried Fish",
        ],
      },
      {
        label: "Cooking",
        subSubCategories: [
          "Spices",
          "Salt & Sugar",
          "Rice",
          "Dal or Lentil",
          "Ready Mix",
          "Shemai & Suji",
          "Special Ingredients",
          "Oil",
          "Colors & Flavours",
          "Ghee",
          "Premium Ingredients",
        ],
      },
      {
        label: "Sauces & Pickles",
        subSubCategories: [
          "Tomato Sauces",
          "Pickles",
          "Cooking Sauces",
          "Other Table Sauces",
        ],
      },
      {
        label: "Dairy & Eggs",
        subSubCategories: [
          "Eggs",
          "Powder Milk",
          "Liquid & UHT Milk",
          "Yogurt & Sweets",
          "Cheese",
          "Condensed Milk & Cream",
          "Butter & Sour Cream",
        ],
      },
      {
        label: "Breakfast",
        subSubCategories: [
          "Eggs",
          "Breads",
          "Tea & Coffe",
          "Local Breakfast",
          "Cereals",
          "Honey",
          "Dips, Spreads & Syrups",
          "Energy Boosters",
          "Jams & Jellies",
        ],
      },
      {
        label: "Candy & Chocolate",
        subSubCategories: [
          "Chocolates",
          "Wafers",
          "Candies",
          "Gums, Mints & Mouth Freshners",
          "Jellies & Marshmallows",
        ],
      },
      {
        label: "Snacks",
        subSubCategories: [
          "Noodles",
          "Cookies",
          "Local Sancks",
          "Chips & Pretzels",
          "Plain Biscuits",
          "Toast & Bakery Biscuits",
          "Cream Biscuits",
          "Pasta & Macaroni",
          "Soups",
          "Popcorn & Nuts",
          "Salted Biscuits",
          "Cakes",
          "Salad Dressing",
        ],
      },
      {
        label: "Beverages",
        subSubCategories: [
          "Tea",
          "Soft Drinks",
          "Coffee",
          "Syrups & Powder Drinks",
          "Juice",
          "Water",
        ],
      },
      {
        label: "Baking",
        subSubCategories: [
          "Flour",
          "Nuts & Dried Fruits",
          "Baking Ingredients",
          "Baking Tools",
          "Baking & Dessert Mixes",
        ],
      },
      {
        label: "Forzen & Canned",
        subSubCategories: [
          "Chicken Sancks",
          "Frozen Parathas & Roti",
          "Vegetable Snacks",
          "Mushroom Cans",
          "Beef Snacks",
          "Vegetables Cans",
          "Fish Cans",
          "Canned Fruits & Sweets",
          "Fish Snacks",
          "Ice Cream",
        ],
      },
      {
        label: "Diabetic Food",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Cleaning Supplies",
    subCategories: [
      {
        label: "Dishwashing Supplies",
        subSubCategories: [],
      },
      {
        label: "Laundry",
        subSubCategories: [],
      },
      {
        label: "Toilet Cleaners",
        subSubCategories: [],
      },
      {
        label: "Napkins & Paper Products",
        subSubCategories: [],
      },
      {
        label: "Pest Control",
        subSubCategories: [],
      },
      {
        label: "Floor & Glass Cleaners",
        subSubCategories: [],
      },
      {
        label: "Cleaning Accessories",
        subSubCategories: [],
      },
      {
        label: "Air Freshners",
        subSubCategories: [],
      },
      {
        label: "Disposables & Trash Bags",
        subSubCategories: [],
      },
      {
        label: "Shoe Care",
        subSubCategories: [],
      },
      {
        label: "Trash Bin & Basket",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Personal Care",
    subCategories: [
      {
        label: "Women's Care",
        subSubCategories: [
          "Woman's Soaps",
          "Hair Care",
          "Women's Shampoos & Conditioners",
          "Feminine Care",
          "Female Moisturizer",
          "Face Wash & Scrub",
          "Female Deo",
          "Women's Perfume",
          "Women's Shower Gel",
          "Masks & Cleaners",
          "Serum, Oil & Toners",
        ],
      },
      {
        label: "Men's Care",
        subSubCategories: [
          "Men's Soaps",
          "Men's Perfume",
          "Men's Shampoos & Conditioners",
          "Shaving Needs",
          "Beard Gromming",
          "Men's Deodorants",
          "Razors & Blades",
          "Men's Hair Care",
          "Cream & Lotion",
          "Men's Facewash",
          "Men's Shower Gels",
        ],
      },
      {
        label: "Handwash",
        subSubCategories: ["Liquid Handwash", "Hand Sanitizer"],
      },
      {
        label: "Tissue & Wipes",
        subSubCategories: [],
      },
      {
        label: "Oral Care",
        subSubCategories: ["Toothpastes", "Toothbrushes", "Mouthwash & Others"],
      },
      {
        label: "Skin Care",
        subSubCategories: [
          "Soaps",
          "Lotions",
          "Petroleum Jelly",
          "Creams",
          "Face Wash & Mask",
          "Body & Hair Oil",
          "Lipsticks & Lip Balm",
        ],
      },
      {
        label: "Talcom Powder",
        subSubCategories: [],
      },
      {
        label: "Hair Color",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Health & Wellness",
    subCategories: [
      {
        label: "Keto Food",
        subSubCategories: [],
      },
      {
        label: "Antiseptics",
        subSubCategories: [],
      },
      {
        label: "Handwash & Handrub",
        subSubCategories: [],
      },
      {
        label: "Herbal & Digestive Aids",
        subSubCategories: [],
      },
      {
        label: "Food Supplements",
        subSubCategories: [],
      },
      {
        label: "Face Masks & Safety",
        subSubCategories: [],
      },
      {
        label: "Family Planning",
        subSubCategories: [],
      },
      {
        label: "Mouthwashed, Inhaler & Balm",
        subSubCategories: [],
      },
      {
        label: "Adult Diapers",
        subSubCategories: [],
      },
      {
        label: "Multipurpose Spray",
        subSubCategories: [],
      },
      {
        label: "Medical Devices",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Baby Care",
    subCategories: [
      {
        label: "Diapers",
        subSubCategories: [
          "Medium (5-13 kg) Diapers",
          "Large (10-16 kg) Diapers",
          "Extra Large (15+ kg) Diapers",
          "Small (3-7 kg) Diapers",
          "Newborn (2-5 kg) Diapers",
        ],
      },
      {
        label: "Baby Food",
        subSubCategories: [
          "Milk, Juice & Drinks",
          "Baby & Toodler Food",
          "Formula",
        ],
      },
      {
        label: "Baby Skincare",
        subSubCategories: [],
      },
      {
        label: "Wipes",
        subSubCategories: [],
      },
      {
        label: "Baby Oral Care",
        subSubCategories: [],
      },
      {
        label: "Newborn Essentials",
        subSubCategories: [],
      },
      {
        label: "Baby Accessories",
        subSubCategories: [],
      },
      {
        label: "Feeders",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Home & Kitchen",
    subCategories: [
      {
        label: "Kitchen Accessories",
        subSubCategories: [],
      },
      {
        label: "Kitchen Appliances",
        subSubCategories: [],
      },
      {
        label: "Lights & Electrical",
        subSubCategories: [],
      },
      {
        label: "Tools & HardWare",
        subSubCategories: [],
      },
      {
        label: "Basket & Bucket",
        subSubCategories: [],
      },
      {
        label: "Box & Container",
        subSubCategories: [],
      },
      {
        label: "Gardening",
        subSubCategories: [],
      },
      {
        label: "Rack & Organizer",
        subSubCategories: [],
      },
      {
        label: "Disposables",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Stationary & Office",
    subCategories: [
      {
        label: "Office Electronics",
        subSubCategories: ["Battries", "Calculators"],
      },
      {
        label: "Organizers",
        subSubCategories: [
          "Tapes, Glues & Adhesive",
          "Stapler & Punch",
          "Organizing Accessories",
          "Cutting",
          "Files & Folders",
          "Measuring Tools",
          "Desk Organizers",
          "Lable & Stamp",
        ],
      },
      {
        label: "Writing & Printing",
        subSubCategories: [
          "Pens",
          "Highlighters & Markers",
          "Toner & Ink",
          "Pencils",
          "Erasers & Correction Fluid",
        ],
      },
      {
        label: "Paper Supplies",
        subSubCategories: [
          "Printing Paper",
          "Diaries & Notebooks",
          "Cards & Envelopes",
        ],
      },
      {
        label: "School Supplies",
        subSubCategories: [],
      },
      {
        label: "Arts & Crafts",
        subSubCategories: [
          "Color Pencils",
          "Pastel & Crayon",
          "Oil & Watercolor",
        ],
      },
    ],
  },
  {
    label: "Pet Care",
    subCategories: [
      {
        label: "Cat Food",
        subSubCategories: [],
      },
      {
        label: "Cat Litters",
        subSubCategories: [],
      },
      {
        label: "Kitten Food",
        subSubCategories: [],
      },
      {
        label: "Dog Food",
        subSubCategories: [],
      },
      {
        label: "Grooming & Cleaning",
        subSubCategories: [],
      },
      {
        label: "Bird & Other Pet Food",
        subSubCategories: [],
      },
      {
        label: "Aquarium Fish Food",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Toys & Sports",
    subCategories: [
      {
        label: "Exercise & Fitness",
        subSubCategories: [],
      },
      {
        label: "Toy Vehicles",
        subSubCategories: [],
      },
      {
        label: "Dolls & Action Figures",
        subSubCategories: [],
      },
      {
        label: "Plush & stuffed Animals",
        subSubCategories: [],
      },
      {
        label: "Learning Toys",
        subSubCategories: [],
      },
      {
        label: "Blocks & Building Sets",
        subSubCategories: [],
      },
      {
        label: "Kids Books",
        subSubCategories: [],
      },
      {
        label: "Sports",
        subSubCategories: [],
      },
      {
        label: "Board Game",
        subSubCategories: [],
      },
      {
        label: "Party Supplies",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Beauty & Makeup",
    subCategories: [
      {
        label: "Eyes",
        subSubCategories: [],
      },
      {
        label: "Lips",
        subSubCategories: [],
      },
      {
        label: "Nails",
        subSubCategories: [],
      },
      {
        label: "Tools & Brushes",
        subSubCategories: [],
      },
      {
        label: "Face",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Fashion & Lifestyle",
    subCategories: [
      {
        label: "Clothing Essentials",
        subSubCategories: [],
      },
      {
        label: "Money Bags",
        subSubCategories: [],
      },
      {
        label: "Travel Accessories",
        subSubCategories: [],
      },
      {
        label: "Bedding & Blankets",
        subSubCategories: [],
      },
      {
        label: "Baby Clothes",
        subSubCategories: [],
      },
      {
        label: "Ladies Handbags",
        subSubCategories: [],
      },
    ],
  },
  {
    label: "Vehicle Essentials",
    subCategories: [],
  },
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
