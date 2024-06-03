import bg from "../../images/bg.png";
const Loader = () => {
  return (
    <>
      <div
        className="absolute w-full h-screen z-50 flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="flex flex-row gap-2 ">
          <div className="w-4 h-4 rounded-full bg-indigo-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-700 animate-bounce animate-delay-300"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-700 animate-bounce animate-delay-500"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
