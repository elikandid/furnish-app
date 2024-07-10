const Statististics = () => {
  return (
    <div className=" py-20 px-[200px] flex flex-col items-center space-y-10 bg-indigo-100 ">
      <div className=" flex justify-center max-w-[600px] items-center flex-col space-y-4 w-full text-black/60">
        GREAT REVIEWS FOR OUR SERVICES
        <h1 className="text-4xl font-semibold text-black">
          Technical Statistics
        </h1>
      </div>
      <div className="flex justify-between w-full">
        <div className=" flex flex-col items-center">
          <span className="text-4xl font-semibold">20</span>
          <p className="text-black/60"> 20 YEAR OF EXPERIENCED</p>
        </div>
        <div className=" flex flex-col items-center">
          <span className="text-4xl font-semibold"> 10,200</span>
          <p className="text-black/60"> SATISFIED CUSTOMERS</p>
        </div>
        <div className=" flex flex-col items-center">
          <span className="text-4xl font-semibold">9,850 </span>
          <p className="text-black/60"> PROJECT COMPLETED </p>
        </div>
        <div className=" flex flex-col items-center">
          <span className="text-4xl font-semibold">20</span>
          <p className="text-black/60"> GET AWARDS</p>
        </div>
      </div>
    </div>
  );
};

export default Statististics;
