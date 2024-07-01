import { heroBg } from "../../../assets"


const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#d4eaf5] place-content-center ">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-2">
      <div className="flex flex-col">
        <span className="font-thin text-2xl text-[#052c43]">Best Design of</span>
        <span className="text-4xl font-bold text-[#052c43]">Future Collections</span>
      </div>
      <p className="w-66">A small river named Duden flows by their place <br/>and supplies it with the necessary regelialia.</p>
      <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-[#267aad]">Discover</button>
      </div>
      </div>
      
      
      <div className="w-1/2">

        <img src={heroBg}
          alt="hero background"
          className="object-cover w-full h-full "
        />
      </div>
    </div>
  )


}

export default Hero