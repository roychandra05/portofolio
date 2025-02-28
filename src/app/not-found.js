"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const route = useRouter();
  const back = () => {
    route.back();
  };
  return (
    <section className="w-full h-[80vh] flex flex-col justify-center items-center text-lg max-[640px]:h-[90vh] sm:max-lg:h-[90vh] lg:h-[91.5vh] xl:h-[80vh] 2xl:h-[80vh]">
      <div>Page not found</div>
      <button onClick={back} className="underline underline-offset-4">
        Back
      </button>
    </section>
  );
};
export default NotFound;
