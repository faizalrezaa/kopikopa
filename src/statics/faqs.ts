export interface FaqItems {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItems[] = [
  {
    id: 1,
    question: "Apakah biji kopi dipanggang sendiri?",
    answer:
      "Ya, kami memanggang (roasting) dalam jumlah kecil setiap minggu untuk menjamin kesegaran aroma dan profil rasa yang konsisten.",
  },
  {
    id: 2,
    question: "Apakah bisa membeli biji kopinya saja?",
    answer:
      "Tentu, kami menyediakan kemasan 250g dan 500g yang bisa kamu beli langsung di kedai atau melalui website ini.",
  },
  {
    id: 3,
    question: "Bisa minta tolong digilingkan sekalian?",
    answer:
      "Bisa banget. Kami menyediakan pilihan gilingan Coarse (V60/Manual Brew), Medium, hingga Fine (Espresso) sesuai kebutuhan alat seduhmu.",
  },
  {
    id: 4,
    question: "Apakah ada menu selain kopi?",
    answer:
      "Ada, kami juga menyediakan Artisan Tea dan cokelat premium pilihan bagi kamu yang ingin variasi lain.",
  },
];
