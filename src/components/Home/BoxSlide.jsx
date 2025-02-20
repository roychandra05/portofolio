const BoxSlide = ({ svg, delay }) => {
  return (
    <div
      className="w-1/6 h-full absolute left-full flex items-center justify-center animate-infiniteScroll p-2"
      style={{ animationDelay: delay}}
    >
      {svg}
    </div>
  );
};
export default BoxSlide;
