"use client";
import { useFormik } from "formik";
import { FaLink } from "react-icons/fa6";
import * as Yup from "yup";
import { TfiUnlink } from "react-icons/tfi";
import { useEffect, useState } from "react";
import PopUp from "./PopUp";

const Input = () => {
  const [toggle, setToggle] = useState(true);
  const [close, setClose] = useState(false);

  const onSubmit = async (values) => {
    try {
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: {
      link: "",
    },
    validationSchema: Yup.object({
      link: Yup.string()
        .url("Please enter a valid URL")
        .required("Link is required"),
    }),
    onSubmit,
  });

  useEffect(() => {
    if (!touched.link) return;
    if (errors.link) {
      setClose(true);
    }
  }, [errors]);

  return (
    <>
      <PopUp text={errors?.link} setClose={setClose} close={close} />
      <form
        onSubmit={handleSubmit}
        className=" max-w-[600px] w-full mx-auto rounded-full flex bg-[#181E29] p-2 border-4 border-[#353C4A]  text-[#C9CED6] items-center"
      >
        <div className=" flex items-center gap-2 flex-1">
          <FaLink size={24} className="text-[#353C4A] " />
          <input
            id="link"
            type="text"
            placeholder="Enter URL"
            onChange={handleChange}
            className=" focus:outline-none bg-transparent flex-1 h-[45px]"
            value={values.link}
          />
          <button
            type="submit"
            className="  bg-[#144EE3] text-[#C9CED6] w-[45px] h-[45px] rounded-full flex items-center justify-center "
          >
            <TfiUnlink size={24} />
          </button>
        </div>
      </form>
      <div className=" mt-4 flex text-[#C9CED6] gap-2 text-[12px] justify-center items-center">
        <button
          onClick={() => setToggle(!toggle)}
          className={` ${
            toggle ? " border-[#144EE3]/20" : "border-[#353C4A]"
          } duration-700 border-[2px]  relative   h-[30px] flex items-center justify-center w-[50px] p-[2px] rounded-full`}
        >
          <span
            className={`${
              toggle
                ? "bg-[#144EE3]  right-[4px] left-auto"
                : "right-auto left-[4px] bg-[#353C4A]"
            } duration-700  absolute h-[16px] w-[16px] flex rounded-full`}
          />
        </button>
        Auto Paste from Clipboard
      </div>
      <div className="text-[#C9CED6]  text-center mt-4">
        <span className=" text-[14px]">
          You can create <span className=" text-primary">05</span> more links.{" "}
          <br />
          <strong className=" underline"> Get Full Access</strong> Now to enjoy
          Unlimited usage
        </span>
      </div>
    </>
  );
};

export default Input;
