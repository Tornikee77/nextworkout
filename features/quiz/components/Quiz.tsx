const Quiz = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-8 min-h-screen">
      <h1 className="mb-6 font-bold text-3xl">Find the Dog</h1>
      <p className="mb-4 text-lg">
        Click the dog to score and load new round!{" "}
      </p>

      <div className="gap-6 grid-cols-3">IMG</div>
      <img
        className="blur-sm rounded-xl w-[48px] h-[48px] object-cover hover:scale-105 transition-300 ease-in-out cursor-pointer"
        src=""
        alt=""
      />
      <div></div>
    </div>
  );
};

export default Quiz;
