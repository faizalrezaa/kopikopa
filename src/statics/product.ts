export interface Product {
  id: number;
  img: string;
  judul: string;
  rasa: string;
  deskripsi: string;
  levelRoast: string;
  origin: string;
  berat: string;
  harga: number;
}

export const products: Product[] = [
  {
    id: 1,
    img: "/images/kintamani.png",
    judul: "Kintamani",
    rasa: "Citrus, Fruity, Jasmine",
    deskripsi:
      "Kopi Arabika khas Bali dengan karakter rasa buah yang segar dan aroma bunga melati yang menenangkan.",
    levelRoast: "Light",
    origin: "Kintamani, Bali",
    berat: "250g",
    harga: 85000,
  },
  {
    id: 2,
    img: "/images/kintamani.png",
    judul: "Gayo Heritage",
    rasa: "Dark Chocolate, Nutty, Brown Sugar",
    deskripsi:
      "Kopi dengan body yang tebal dan tingkat keasaman rendah, memberikan sentuhan rasa cokelat yang intens.",
    levelRoast: "Dark",
    origin: "Aceh Tengah, Gayo",
    berat: "250g",
    harga: 90000,
  },
  {
    id: 3,
    img: "/images/kintamani.png",
    judul: "Toraja Midnight",
    rasa: "Caramel, Syrupy, Hint of Vanilla",
    deskripsi:
      "Kekayaan rasa dari pegunungan Sulawesi dengan tekstur yang lembut seperti sirup dan aroma vanila.",
    levelRoast: "Medium",
    origin: "Toraja, Sulawesi Selatan",
    berat: "250g",
    harga: 88000,
  },
  {
    id: 4,
    img: "/images/kintamani.png",
    judul: "House Blend",
    rasa: "Balanced, Creamy, Cocoa",
    deskripsi:
      "Campuran biji pilihan yang diracik khusus untuk menghasilkan rasa yang seimbang, cocok untuk penikmat kopi susu.",
    levelRoast: "Medium",
    origin: "Indonesia Archipelago",
    berat: "500g",
    harga: 120000,
  },
];
