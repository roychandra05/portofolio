import HeronProject from "@/components/Projects/HeronProject";
import TravelProject from "@/components/Projects/TravelProject";

const Projects = () => {
  return (
    <section className="w-full h-[auto] bg-black relative flex flex-col max-[640px]:text-[.6em] justify-center items-center animate-fadeIn my-10">
      <main className="w-[80%] max-[640px]:w-[90%] lg:w-[90%] h-full flex flex-col gap-5">
        <h1 className="font-bold text-xl">My projects</h1>
        <HeronProject />
        <TravelProject />
      </main>
    </section>
  );
};
export default Projects;
