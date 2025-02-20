"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 w-full max-[640px]:text-[.6em] h-[10vh] max-[640px]:h-[5vh] sm:max-lg:h-[5vh] lg:h-[3.5em] xl:h-[4em] px-2 pt-2 bg-black">
      <section className="w-full h-full flex pl-10 bg-black gap-5 max-[640px]:gap-0">
        <div className="h-full max-[640px]:w-[90vw] w-[95vw]  border-b-2 flex items-center justify-between px-2">
          <div className="w-full ">
            <Link href={"/"}>
              <h1 className="font-bold max-[640px]:w-[105%] max-[640px]:text-[.9em] md:max-2xl:text-[1.2em] ">
                Roy Chandra Telaumbanua
              </h1>
            </Link>
          </div>
          <div className="flex w-full h-full items-center justify-end gap-4 ">
            <Link
              href={"/"}
              className={`${
                path === "/"
                  ? "line-through decoration-2 pointer-events-none"
                  : ""
              }`}
            >
              Profile
            </Link>
            <div className="h-1/3 max-[640px]:h-1/2 border" />
            <Link
              href={"/project"}
              className={`${
                path === "/project"
                  ? "line-through decoration-2 pointer-events-none"
                  : ""
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="border-t-4 border-r-4 w-[5vw] max-[640px]:w-[10vw] h-full" />
      </section>
    </nav>
  );
};
export default Navbar;
