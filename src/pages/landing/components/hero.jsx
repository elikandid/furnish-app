import imgUrl from "../../../assets/images/bg_2.jpg.webp";

const Hero = () => {
  return (
    <div className=" bg-indigo-100 grid grid-cols-2 min-h-screen items-center w-screen relative px-[64px] overflow-hidden">
      <div className=" space-y-6  h-full  flex flex-col justify-center w-[390px]">
        <h1 className="text-4xl font-thin">
          Best Design of <br />
          <p className="font-bold block">Furniture Collections</p>
        </h1>
        <p className="text-black/60 text-lg ">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button className="uppercase rounded-full bg-white px-4  py-3 w-fit shadow-sm">
          Discover
        </button>
      </div>
      <div className="h-full">
        <img
          src={imgUrl}
          className="object-cover h-full absolute right-0 top-0 w-[50%]"
        />
      </div>
    </div>
  );
};

export default Hero;
