export interface ServingType {
  id: string;
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export const servings: ServingType[] = [
  {
    id: "1",
    src: "/coffee-seed.png",
    alt: "biji kopi",
    title: "Persiapan",
    desc: "Giling 15-18 gram biji kopi dengan tingkat kehalusan medium-fine (seperti garam dapur)",
  },
  {
    id: "2",
    src: "/v60.png",
    alt: "v60",
    title: "Penyeduhan",
    desc: "Tuangkan 250ml air bersuhu 90-92°C secara perlahan dengan gerakan melingkar yang konsisten.",
  },
  {
    id: "3",
    src: "/coffee-cup.png",
    alt: "cangkir kopi",
    title: "Penikmatan",
    desc: "Tunggu hingga ekstraksi selesai (sekitar 2.5 menit), tuang ke cangkir favorit, dan nikmati selagi hangat.",
  },
];
