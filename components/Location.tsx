import MotionWrapper from "./MotionWrapper";

export default function Location() {
  return (
    <MotionWrapper
      as="section"
      className="py-16 px-12 xl:px-40 flex flex-col gap-5.5"
    >
      <h3
        id="location"
        className="uppercase text-sm font-extralight text-center"
      >
        Lokasi
      </h3>
      <h1 className="w-full px-6 font-medium text-3xl md:text-4xl text-center">
        Ruang Jeda di Tengah Kota.
      </h1>
      <div className="w-full flex justify-center py-3">
        <iframe
          title="Lokasi Toko"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273648509015!2d106.8166!3d-6.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          className="md:max-w-129 w-full h-80"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="lg:px-50 xl:px-70">
        <p className="text-center font-light text-sm xl:text-lg">
          Lebih dari sekadar tempat menikmati kopi, kami menyediakan ruang bagi
          ide-ide besar dan percakapan hangat yang tak terburu-buru. Nikmati
          suasana sangrai langsung dari sumbernya.
        </p>
      </div>

      <div className="mt-7 text-[0.55rem] md:text-xs md:px-40 lg:px-70 xl:px-100">
        <h3 className="px-2 py-3 text-primary bg-tertiary rounded-3xl text-center mb-3.5">
          Alamat: Jl. Soekarno Hatta No. D-505, Malang
        </h3>
        <h3 className="px-2 py-3 text-primary bg-tertiary rounded-3xl text-center">
          Jam Buka: Senin – Minggu | 08.00 – 22.00 WIB
        </h3>
      </div>
    </MotionWrapper>
  );
}
