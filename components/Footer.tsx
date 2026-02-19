import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-9 mt-16  py-16 px-7 bg-tertiary text-primary ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:px-17 gap-9 ">
        <div>
          <h2 className="font-medium text-xl pb-3.5">
            Mari Berdiskusi Tentang Kopi.
          </h2>
          <p className="text-sm font-extralight lg:max-w-70">
            KOPI KOPA menghadirkan cita rasa terbaik dari pegunungan Indonesia
            langsung ke cangkir Anda melalui proses yang jujur dan transparan.
          </p>
        </div>

        <div className="text-sm font-extralight">
          <h3>Navigasi</h3>
          <ul className="list-disc list-inside cursor-pointer">
            <li>
              <a href="/#about-us">Tentang Kami</a>
            </li>
            <li>
              <a href="/#product">Produk</a>
            </li>
            <li>
              <a href="/#serving">Ritual Seduh</a>
            </li>
            <li>
              <a href="/#location">Lokasi</a>
            </li>
            <li>
              <a href="/#faq">FAQS</a>
            </li>
          </ul>
        </div>
        <div className="text-sm font-extralight">
          <h3>Kontak & Sosial Media</h3>
          <ul className="list-disc list-inside">
            <li>Email: hello@kopikopa.id</li>
            <li>Instagram: @KopiKopa_id</li>
          </ul>
        </div>
      </div>

      <h4 className="text-center text-xs font-extralight ">
        © 2026 KOPI KOPA. Dibuat dengan dedikasi oleh Faizal Reza |{" "}
        <a href="/credits">Kredit</a>
      </h4>
    </footer>
  );
}
