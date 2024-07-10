import { Search } from "lucide-react";

const Collection = () => {
  return (
    <div id="collection" className="w-full flex items-center flex-col">
      <div className=" flex justify-center max-w-[600px] flex-col space-y-4 text-center py-20  ">
        OUR FINISH PROJECTS
        <h1 className="text-4xl font-semibold">Furniture Collection</h1>
      </div>

      <div className="flex flex-col w-full">
        <div className="h-[340px]  w-full flex ">
          <div className="w-[50%] h-full object-cover bg-[url(/gallery-2.jpg.webp)] bg-center bg-no-repeat bg-cover group">
            <div className=" group-hover:bg-black/40 opacity-0 group-hover:opacity-100 h-full w-full flex items-end p-4 ">
              <div className="flex flex-col">
                {" "}
                <Search className="stroke-white bg-black p-1 rounded-full" />
                <p className="text-xl text-white">Jump to item page</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full object-cover bg-[url(/gallery-3.jpg.webp)] bg-center bg-no-repeat bg-cover group">
            <div className=" group-hover:bg-black/40 opacity-0 group-hover:opacity-100 h-full w-full flex items-end p-4 ">
              <div className="flex flex-col">
                {" "}
                <Search className="stroke-white bg-black p-1 rounded-full" />
                <p className="text-xl text-white">Jump to item page</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full object-cover bg-[url(/gallery-4.jpg.webp)] bg-center bg-no-repeat bg-cover group">
            <div className=" group-hover:bg-black/40 opacity-0 group-hover:opacity-100 h-full w-full flex items-end p-4 ">
              <div className="flex flex-col">
                {" "}
                <Search className="stroke-white bg-black p-1 rounded-full" />
                <p className="text-xl text-white">Jump to item page</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[340px]  w-full flex ">
          <div className="w-full h-full object-cover bg-[url(/gallery-6.jpg.webp)] bg-center bg-no-repeat bg-cover group">
            <div className=" group-hover:bg-black/40 opacity-0 group-hover:opacity-100 h-full w-full flex items-end p-4">
              <div className="flex flex-col">
                {" "}
                <Search className="stroke-white bg-black p-1 rounded-full" />
                <p className="text-xl text-white">Jump to item page</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full object-cover bg-[url(/gallery-5.jpg.webp)] bg-center bg-no-repeat bg-cover group">
            <div className=" group-hover:bg-black/40 opacity-0 group-hover:opacity-100 h-full w-full flex items-end p-4 ">
              <div className="flex flex-col">
                <Search className="stroke-white bg-black p-1 rounded-full" />
                <p className="text-xl text-white">Jump to item page</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full object-cover bg-[url(/gallery-4.jpg.webp)] bg-center bg-no-repeat bg-cover group">
            <div className=" group-hover:bg-black/40 opacity-0 group-hover:opacity-100 h-full w-full flex items-end p-4 ">
              <div className="flex flex-col">
                {" "}
                <Search className="stroke-white bg-black p-1 rounded-full" />
                <p className="text-xl text-white">Jump to item page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
