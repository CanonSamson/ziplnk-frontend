import { IoCopyOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { TfiUnlink } from "react-icons/tfi";

const ShortenLinks = () => {
  const links = [];
  return (
    <div className="  max-w-[1000px] w-full mx-auto px-4 mt-10 pb-20">
      <div className="  flex justify-between bg-[#353C4A] p-4 rounded ">
        <span className="text-base  font-semibold"> Shorten Links</span>
        <span className=" font-light">No Links</span>
      </div>
      {links.length > 0 ? (
        <div className=" grid gap-4 mt-4  text-[#C9CED6]">
          <div className=" bg-[#144EE3]/10 flex items-center justify-between p-4">
            <div className=" flex items-center  gap-2">
              <a href="">https://linkly.com/Bn41..</a>
              <button>
                <IoCopyOutline size={24} />
              </button>
            </div>
            <button className=" bg-[#1C283F]/60 w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <FaAngleDown size={24} />
            </button>
          </div>
        </div>
      ) : (
        <div className=" text-[#353C4A] mt-4 items-center justify-center flex-col flex ">
          <TfiUnlink size={100} />
        </div>
      )}
    </div>
  );
};

export default ShortenLinks;
