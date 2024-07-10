import imgUrl from "../../../assets/images/bg_2.jpg.webp";

const Hero = () => {
  return (
    <div className=" bg-blue-100 grid grid-cols-2 min-h-screen items-center w-full relative px-[64px]">
      <div className=" space-y-6  h-full  flex flex-col justify-center w-[50%]">
        <h1 className="text-4xl font-thin">
          Best Design of <br />
          <span className="font-bold ">Furniture Collections</span>
        </h1>
        <p className="text-gray-600">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button className="uppercase rounded-full bg-white px-4  py-3 w-fit shadow-sm">
          Discover
        </button>
      </div>
      <div className="h-full overflow-hidden w-[50%] relative">
        <img
          src={imgUrl}
          alt="object-cover w-full h-full absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

export default Hero;
