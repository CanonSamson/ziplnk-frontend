import { useState } from "react";
import Input from "./Input";
import ShortenLinks from "./ShortenLinks";

const Main = () => {
  const [links, setLinks] = useState([]);
  return (
    <>
      <div className=" mt-5">
        <Input links={links} setLinks={setLinks} />
      </div>
      <ShortenLinks links={links} />
    </>
  );
};

export default Main;
