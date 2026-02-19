export interface ProductType {
  id: string;
  src: string;
  alt: string;
  name: string;
  taste: string;
  price: string;
  weight: string;
  level: string;
  origin: string;
  desc: string;
}

export const products: ProductType[] = [
  {
    id: "1",
    name: "Kintamani Bright",
    taste: "Citrus, Fruity, Jasmine",
    price: "125.000",
    weight: "250g",
    level: "Light to Medium Roast",
    origin: "Bangli, Bali",
    desc: "Kopi dengan karakter segar khas pegunungan Bali. Memiliki aroma bunga melati yang kuat dan tingkat keasaman buah jeruk yang cerah di akhir sesapan.",
    src: "/kintamani.png",
    alt: "Biji kopi Kintamani Bali dengan karakter rasa citrus dan aroma melati",
  },
  {
    id: "2",
    name: "Gayo Heritage",
    taste: "Dark Chocolate, Nutty, Brown Sugar",
    price: "115.000",
    weight: "250g",
    level: "Medium to Dark Roast",
    origin: "Takengon, Aceh",
    desc: "Kopi klasik dari dataran tinggi Gayo. Teksturnya kental (bold) dengan sensasi rasa cokelat pahit yang manis, sangat cocok dinikmati sebagai kopi susu atau kopi hitam pekat.",
    src: "/kintamani.png",
    alt: "Biji kopi Gayo Aceh kualitas premium dengan rasa cokelat hitam dan kacang",
  },
  {
    id: "3",
    name: "Toraja Midnight",
    taste: "Caramel, Syrupy, Hint of Vanilla",
    price: "135.000",
    weight: "250g",
    level: "Medium Roast",
    origin: "Tana Toraja, Sulawesi",
    desc: "Kopi dengan body yang sangat halus seperti sirup. Perpaduan karamel yang manis dan sedikit sentuhan vanila memberikan pengalaman minum kopi yang elegan.",
    src: "/kintamani.png",
    alt: "Kopi Toraja Midnight dengan tekstur sirup dan aroma vanila karamel",
  },
  {
    id: "4",
    name: "House Blend",
    taste: "Balanced, Creamy, Cocoa",
    price: "95.000",
    weight: "250g",
    level: "Medium Roast",
    origin: "Nusantara Blend",
    desc: "Campuran biji kopi pilihan dari berbagai daerah di Indonesia yang dirancang untuk keseimbangan rasa. Creamy di mulut dengan sentuhan akhir rasa kakao yang lembut.",
    src: "/kintamani.png",
    alt: "Kopi House Blend Kopi Kopa yang seimbang dengan sentuhan rasa kakao",
  },
];
