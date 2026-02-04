import MotionDiv from "./MotionDiv";

const Location = () => {
  return (
    <section
      id="location"
      className="flex flex-col justify-center items-center gap-7 py-10 px-8 text-center bg-primary"
    >
      <MotionDiv className="font-poppins-el text-sm uppercase md:text-lg">
        Lokasi
      </MotionDiv>
      <MotionDiv className="font-poppins-md text-3xl md:text-4xl">
        Ruang Jeda di Tengah Kota.
      </MotionDiv>
      <MotionDiv className="md:w-full flex justify-center">
        <iframe
          title="Lokasi Toko"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273648509015!2d106.8166!3d-6.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          className="md:max-w-129 w-full h-80"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MotionDiv>
      <MotionDiv className="font-poppins-reg py-4  text-eb md:text-lg max-w-96">
        Lebih dari sekadar tempat menikmati kopi, kami menyediakan ruang bagi
        ide-ide besar dan percakapan hangat yang tak terburu-buru. Nikmat
        suasana sangrai langsung dari sumbernya.
      </MotionDiv>
      <MotionDiv className="bg-tertiary text-white font-poppins-reg py-3.5 px-5 rounded-4xl text-[0.7rem] md:text-sm">
        Alamat: Jl. Soekarno Hatta No. D-505, Malang{" "}
      </MotionDiv>
      <MotionDiv className="bg-tertiary text-white font-poppins-reg py-3.5 px-5 rounded-4xl text-[0.7rem] -mt-2 md:text-sm">
        Jam Buka: Senin – Minggu | 08.00 – 22.00 WIB.
      </MotionDiv>
    </section>
  );
};

export default Location;
