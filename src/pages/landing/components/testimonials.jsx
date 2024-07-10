const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  py-10 bg-black/5">
      <div className=" flex justify-center max-w-[600px] items-center flex-col space-y-4 w-full text-black/60 mb-[24px]">
        TESTIMONIAL
        <h1 className="text-4xl font-semibold text-black">Happy Customers</h1>
      </div>
      <div className=" flex space-x-4 duration-500 py-10">
        <div className="max-w-[390px] bg-white shadow-sm p-4 rounded-lg">
          <p className="text-xl text-black/60">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4 mt-2">
            <img
              src="/person_1.jpg.webp"
              className="rounded-full object-cover w-12 h-12"
            />
            <div>
              <h2>Roger Scott</h2>
              <p>Marketing manager</p>
            </div>
          </div>
        </div>
        <div className="max-w-[390px] bg-orange-600 text-white shadow-sm p-4 rounded-lg">
          <p className="text-xl ">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4 mt-2">
            <img
              src="/person_2.jpg.webp"
              className="rounded-full object-cover w-12 h-12"
            />
            <div>
              <h2>Allen Scott</h2>
              <p>Project manager</p>
            </div>
          </div>
        </div>
        <div className="max-w-[390px] bg-white shadow-sm p-4 rounded-lg">
          <p className="text-xl text-black/60">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4 mt-2">
            <img
              src="/person_3.jpg.webp"
              className="rounded-full object-cover w-12 h-12"
            />
            <div>
              <h2>Danny Welba</h2>
              <p>Assistant manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
