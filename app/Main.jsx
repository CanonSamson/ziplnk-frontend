"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import ShortenLinks from "./ShortenLinks";

const Main = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getLinks = async () => {
      if (links.length > 0) return;
      const uuid = localStorage.getItem("uuid");
      if (!uuid) return;
      try {
        const response = await fetch(`/api/shorten/${uuid}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setLinks((prev) => [...data, ...prev]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLinks();
  }, []);

  function copyToClipboard(link) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Copied");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  }
  return (
    <>
      <div className=" mt-5">
        <Input
          copyToClipboard={copyToClipboard}
          links={links}
          setLinks={setLinks}
        />
      </div>
      <ShortenLinks copyToClipboard={copyToClipboard} links={links} />
    </>
  );
};

export default Main;
