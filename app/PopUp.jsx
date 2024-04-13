"use client";

import { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PopUp = ({ text, close, setClose }) => {
  useEffect(() => {
    if (close) {
      setTimeout(() => {
        setClose(false);
      }, 3000);
    }
  }, [close]);
  return (
    <div
      className={`${
        close ? "top-[12%]" : "top-[-200%]"
      } duration-700 fixed mx-4 w-full right-0 text-[14px] flex items-center justify-end`}
    >
      <div className=" border bg-[#181E29] text-primary flex items-center gap-4 min-w-[150px] border-primary  rounded-full p-2 px-4 ">
        <span>{text}</span>
        <button onClick={() => setClose(false)}>
          <IoMdCloseCircleOutline size={24} className="text-[#353C4A] " />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
