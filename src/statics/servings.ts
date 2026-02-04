export interface Servings {
  img: string;
  judul: string;
  isi: string;
}

export const servings: Servings[] = [
  {
    img: "/images/persiapan.png",
    judul: "Persiapan",
    isi: "Giling 15-18 gram biji kopi dengan tingkat kehalusan medium-fine (seperti garam dapur)",
  },
  {
    img: "/images/penyeduhan.png",
    judul: "Penyeduhan",
    isi: "Tuangkan 250ml air bersuhu 90-92°C secara perlahan dengan gerakan melingkar yang konsisten.",
  },
  {
    img: "/images/penikmatan.png",
    judul: "Penikmatan",
    isi: " Tunggu hingga ekstraksi selesai (sekitar 2.5 menit), tuang ke cangkir favorit, dan nikmati selagi hangat.",
  },
];
