import { Play } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="bg-[url(/bg_4.jpg.webp)] w-full h-fit relative bg-no-repeat bg-center bg-cover py-[200px] flex justify-end">
      <div className="   px-[64px] w-[50%]">
        <div className=" flex justify-center max-w-[600px] flex-col space-y-4 ">
          ABOUT FURNISH
          <h1 className="text-4xl font-semibold">
            Quality Makes the Belief for Customers{" "}
          </h1>
          <p className="text-lg text-black/60">
            {" "}
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <a href="/" className="flex w-fit space-x-2 items-center">
            <button className="bg-orange-500 rounded-full p-4">
              <Play fill="white" className="stroke-none " />
            </button>{" "}
            <span>Watch video</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
