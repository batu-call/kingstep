export type Product = {
  id: string;
  name: string;
  brand: "nike" | "adidas" | "new-balance" | "converse";
  price: number;
  tag: string;
  tagHot?: boolean;
  meta: string;
  image?: string;
};

export const COLORWAYS = [
  { name: "Bone", bg: "#262522" },
  { name: "Ember", bg: "#5a2018" },
  { name: "Navy", bg: "#2a3040" },
];

export const FILTERS = [
  { value: "all", label: "All" },
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "new-balance", label: "New Balance" },
  { value: "converse", label: "Converse" },
] as const;

export const products: Product[] = [
  {
    id: "af1-07",
    name: "Nike Air Force 1 '07",
    brand: "nike",
    price: 115,
    tag: "Bestseller",
    tagHot: true,
    meta: "Leather • Air cushioning • Lifestyle",
    image: "/products/af1-07.jpg",
  },
  {
    id: "dunk-low",
    name: "Nike Dunk Low Retro",
    brand: "nike",
    price: 120,
    tag: "Trending",
    tagHot: true,
    meta: "Leather • Low top • Skate heritage",
    image: "/products/dunk-low.jpg",
  },
  {
    id: "am-90",
    name: "Nike Air Max 90",
    brand: "nike",
    price: 140,
    tag: "Classic",
    meta: "Visible Air unit • Waffle outsole",
    image: "/products/am-90.jpg",
  },
  {
    id: "ss-1906r",
    name: "New Balance 1906R",
    brand: "new-balance",
    price: 155,
    tag: "New",
    meta: "ABZORB • Mesh + synthetic • Retro running",
    image: "/products/ss-1906r.jpg",
  },
  {
    id: "nb-574",
    name: "New Balance 574",
    brand: "new-balance",
    price: 90,
    tag: "Everyday",
    meta: "Suede • ENCAP midsole • Lightweight",
    image: "/products/nb-574.jpg",
  },
  {
    id: "ult-1",
    name: "Adidas Ultraboost 1.0",
    brand: "adidas",
    price: 190,
    tag: "Comfort",
    meta: "Boost midsole • Primeknit • Running",
    image: "/products/ult-1.jpg",
  },
  {
    id: "samba-og",
    name: "Adidas Samba OG",
    brand: "adidas",
    price: 100,
    tag: "Popular",
    tagHot: true,
    meta: "Leather • Suede toe • Flat sole",
    image: "/products/samba-og.jpg",
  },
  {
    id: "cons-chuck",
    name: "Converse Chuck Taylor All Star",
    brand: "converse",
    price: 65,
    tag: "Iconic",
    meta: "Canvas • High top • Vulcanized sole",
    image: "/products/cons-chuck.jpg",
  },
];