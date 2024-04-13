import Image from "next/image";
// Import Link from Next.js
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import Input from "./Input";
import ShortenLinks from "./ShortenLinks";
import { IoMdCloseCircleOutline } from "react-icons/io";
import PopUp from "./PopUp";

export default function Home() {
  return (
    <main className="  min-h-screen px-4 text-white text-[14px] bg-[#181E29] flex flex-col w-full">
      <div className=" max-w-[1200px]  p-5  mx-auto  w-full flex items-center justify-between   ">
        <Link href="/" className=" items-center flex font-semibold text-2xl">
          ZIP
          <FaLink size={30} className=" text-primary" /> LNK
        </Link>
        <div className=" flex items-center gap-2  ">
          <button className=" bg-[#181E29] max-w-[150px] border-[#353C4A] hidden md:flex border px-4 py-3 font-medium rounded-full  ">
            Login
          </button>
          <button className=" bg-[#144EE3] px-4 py-3 font-medium rounded-full ">
            Get Full Access
          </button>
        </div>
      </div>
      <div className=" flex flex-col mt-10 text-center px-4">
        <h1
          className=" bg-gradient-to-tr inline-block text-transparent bg-clip-text
            from-[#144EE3] via-primary via-primary via-primary to-[#144EE3]   text-4xl font-bold  "
        >
          Shorten Your Loooong Links :)
        </h1>
        <p className=" text-[#C9CED6] mt-5 text-[16px]">
          Ziplnk is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <div className=" mt-5">
        <Input />
      </div>
      <ShortenLinks />
    </main>
  );
}
