import Content from "@/components/Home/Content";

export default function Home() {
  return (
    <section className="w-full h-[80vh] max-[640px]:h-[90vh] sm:max-lg:h-[90vh] bg-black relative flex flex-col max-[640px]:text-[.6em] p-4">
      <Content />
    </section>
  );
}
