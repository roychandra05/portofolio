import Link from "next/link";
import { GitHub, Mail } from "react-feather";
const Footer = () => {
  return (
    <footer className="h-[10vh] max-[640px]:h-[5vh] w-full sm:max-lg:h-[5vh] lg:h-[3.5em] xl:h-[4em] px-2 pb-2 bg-black">
      <section className="w-full h-full flex pr-10 bg-black gap-5">
        <div className="border-b-4 border-l-4 w-[5vw] max-[640px]:w-[10vw] h-full" />
        <div className="h-full max-[640px]:w-[90vw] w-[95vw] border-t-2 flex items-center justify-between px-6 ">
          <div className="flex w-full h-full items-center justify-end gap-9 py-1">
            <Link
              target="_blank"
              href={"https://github.com/roychandra05"}
              className=""
            >
              <GitHub color="white" />
            </Link>
            <div className="h-1/3 max-[640px]:h-full border" />
            <Link href={"mailto:royct0001@gmail.com"} className="">
              <Mail />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
