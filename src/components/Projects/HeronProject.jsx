import Image from "next/image";
import landingPage from "../../../public/heron-fit/landing-page.jpeg";
import dashboard from "../../../public/heron-fit/dashboard.jpeg";
import chatting from "../../../public/heron-fit/chatting.jpeg";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "400"
})

const HeronProject = () => {
  return (
    <div className={`${montserrat.className} flex flex-col gap-5 h-full w-full`}>
      <div>
        <h2 className="font-semibold text-lg text-yellow-300">Heron Fitness</h2>
      </div>
      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 sm:max-lg:grid-cols-1 justify-around items-start gap-5 h-auto w-full p-4">
        <div className="col-span-1">
          <p className="leading-relaxed indent-8 text-justify">
            Heron Fitness App adalah sebuah website yang dibangun menggunakan
            framework Next.js. Website ini dirancang untuk memudahkan staf dalam
            melakukan input data penjualan, analisis penjualan, serta pemantauan
            dan pemanfaatan peralatan gym.
          </p>
        </div>
        <div className="col-span-1 border 2xl:h-[17.5em] xl:h-[17.5em] max-[640px]:h-[18vh] sm:h-[27vh] md:h-[17.5em] lg:h-[13em] w-full relative rounded-md overflow-hidden ">
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
      <div className="grid grid-cols-2 max-[640px]:grid-cols-1 sm:max-lg:grid-cols-1 justify-around gap-5 items-start p-4">
        <div className="col-span-1">
          <h3 className="font-semibold pb-2">Feature</h3>
          <ul className="list-disc leading-relaxed text-justify">
            <li>
              <span className="font-semibold">Authentication: </span>
              Mengelola akses pengguna terhadap halaman tertentu berdasarkan
              status autentikasi mereka.
            </li>
            <li>
              <span className="font-semibold">Chat: </span>
              Memfasilitasi pengiriman pesan antar pengguna.
            </li>
            <li>
              <span className="font-semibold">Notifications: </span>
              Menampilkan pemberitahuan untuk pesan masuk yang belum terbaca.
            </li>
            <li>
              <span className="font-semibold">Sales Analysis: </span>
              Memungkinkan pengguna untuk memasukkan, mengedit, dan menghapus
              data penjualan, serta memantau kinerja penjualan mereka.
            </li>
            <li>
              <span className="font-semibold">Body Mass Index (BMI): </span>
              Menentukan kategori berat badan seseorang berdasarkan perhitungan
              BMI.
            </li>
          </ul>
        </div>
        <div className="col-span-1 border 2xl:h-[19.2em] xl:h-[19.2em] max-[640px]:h-[20vh] sm:h-[30vh] md:h-[28vh] lg:h-[14em] w-full relative rounded-md overflow-hidden">
          <Image
            src={dashboard}
            alt="dashboard"
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
          <h3 className="font-semibold pb-2">Tech Stack</h3>
          <ul className="list-disc leading-relaxed text-justify">
            <li>
              <span className="font-bold">Framework & Library</span>: Next.js, React.js
            </li>
            <li>
              <span className="font-bold">UI & styling</span>: Tailwind CSS, Shadcn UI
            </li>
            <li>
              <span className="font-bold">Form handling & validation</span>: React Hook Form, Zod
            </li>
            <li>
              <span className="font-bold">Authentication & Security</span>: Bcryptjs, JWT
            </li>
            <li>
              <span className="font-bold">Real Time & database</span>: Supabase(PostgreSQL)
            </li>
            <li>
              <span className="font-bold">Utilities</span>: Mailersend, Recharts, uuid, Phosphor Icons
            </li>
          </ul>
        </div>
        <div className="col-span-1 2xl:h-[17.5em] xl:h-[17.5em] max-[640px]:h-[18vh] sm:h-[27vh] md:h-[17.5em] lg:h-[13em] w-full relative flex border rounded-md overflow-hidden ">
          <Image
            src={chatting}
            alt="chat page"
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
export default HeronProject;
