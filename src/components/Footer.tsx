import HashLinkSmooth from "./HashLinkSmooth";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-tertiary text-primary pt-16 pb-6 px-6 ">
      <div className="w-full flex flex-col md:flex-row justify-around r gap-8 ">
        {" "}
        <div>
          {" "}
          <div className="font-poppins-md  text-xl">
            Mari Berdiskusi Tentang Kopi.
          </div>
          <div className="font-poppins-el text-sm w-64 pt-4">
            KOPI KOPA menghadirkan cita rasa terbaik dari pegunungan Indonesia
            langsung ke cangkir Anda melalui proses yang jujur dan transparan..
          </div>
        </div>
        <div className="font-poppins-el text-sm">
          <div>Navigasi</div>
          <ul className="list-disc list-inside">
            <li>
              <HashLinkSmooth to="/#about-us">Tentang Kami</HashLinkSmooth>
            </li>
            <li>
              {" "}
              <HashLinkSmooth to="/#prducts">Produk</HashLinkSmooth>
            </li>
            <li>
              <HashLinkSmooth to="/#servings">Ritual Seduh</HashLinkSmooth>
            </li>
            <li>
              <HashLinkSmooth to="/#location">Lokasi</HashLinkSmooth>
            </li>
            <li>
              {" "}
              <HashLinkSmooth to="/#faq">FAQ</HashLinkSmooth>
            </li>
          </ul>
        </div>
        <div className=" font-poppins-el text-sm">
          <div>Kontak & Sosial Media</div>
          <ul className="list-disc list-inside">
            <li>Email : hello@kopikopa.id</li>
            <li>Instagram : @KopiKopa_id</li>
          </ul>
        </div>
      </div>

      <div className=" pt-9 font-poppins-el w-full text-center text-sm">
        © 2026 KOPI KOPA. Dibuat dengan dedikasi oleh Faizal Reza &nbsp;| &nbsp;
        <HashLinkSmooth to="/credits" className="cursor-pointer">
          Kredit
        </HashLinkSmooth>
      </div>
    </footer>
  );
};

export default Footer;
