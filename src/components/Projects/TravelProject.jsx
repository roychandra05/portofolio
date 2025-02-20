import Image from "next/image";
import landingPage from "../../../public/travel/landing-page.png";
import sendEmail from "../../../public/travel/send-email.png";
import modal from "../../../public/travel/modal.png";

const TravelProject = () => {
  return (
    <div className="flex flex-col gap-5 h-full w-full">
      <div>
        <h2 className="font-semibold text-lg text-yellow-300">
          Bsmiley Tour
        </h2>
      </div>
      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 sm:max-lg:grid-cols-1 justify-around items-start gap-5 h-auto w-full p-4">
        <div className="col-span-1">
          <p className="leading-relaxed indent-8 text-justify">
            Platform yang menyediakan kemudahan dalam merencanakan perjalanan
            melalui sistem pemesanan via email. Situs ini menyajikan informasi
            mengenai tempat wisata yang menarik. Selain itu, website ini juga
            menyediakan halaman kontak yang memudahkan pengguna untuk
            menghubungi tim layanan dan mendapatkan bantuan secara langsung.
          </p>
        </div>
        <div className="col-span-1 border 2xl:h-[17.5em] xl:h-[17.5em] max-[640px]:h-[18em] sm:h-[27vh] md:h-[21em] lg:h-[13em] w-full relative rounded-md overflow-hidden ">
          <Image
            src={landingPage}
            alt="landing page"
            fill
            loading="eager"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 sm:max-lg:grid-cols-1 justify-around items-start gap-5 h-auto w-full p-4">
        <div className="col-span-1">
          <p className="leading-relaxed indent-8 text-justify">
            Users dapat dengan mudah mengajukan pertanyaan terkait paket
            perjalanan, destinasi, dan layanan yang disediakan. Selain itu,
            mereka juga dapat langsung melakukan booking untuk merencanakan
            liburan impian melalui sistem reservasi yang sederhana dan intuitif.
            Untuk memudahkan komunikasi, website ini menyediakan fitur kontak
            langsung via WhatsApp sehingga pengguna bisa mendapatkan respons
            cepat dan bantuan personal.
          </p>
        </div>
        <div className="col-span-1 border 2xl:h-[17.5em] xl:h-[17.5em] max-[640px]:h-[18em] sm:h-[27vh] md:h-[21em] lg:h-[13em] w-full relative rounded-md overflow-hidden ">
          <Image
            src={sendEmail}
            alt="sending email"
            fill
            loading="eager"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 sm:max-lg:grid-cols-1 justify-around items-start gap-5 h-auto w-full p-4">
        <div className="col-span-1">
          <h3 className="font-semibold py-2">Tech Stack</h3>
          <ul className="list-disc leading-relaxed text-justify">
            <li>
              <span>Framework & Library</span>: Next.js, React.js
            </li>
            <li>
              <span>UI & styling</span>: Tailwind CSS
            </li>
            <li>
              <span>validation</span>: Zod
            </li>
            <li>
              <span>Utilities</span>: resend, Phosphor Icons
            </li>
          </ul>
        </div>
        <div className="col-span-1 2xl:h-[17.5em] xl:h-[17.5em] max-[640px]:h-[18em] sm:h-[27vh] md:h-[21em] lg:h-[13em] w-full relative flex border rounded-md overflow-hidden ">
          <Image
            src={modal}
            alt="modal"
            fill
            loading="eager"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};
export default TravelProject;
