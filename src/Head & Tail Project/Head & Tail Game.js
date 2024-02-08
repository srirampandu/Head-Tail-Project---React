import React from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import Footer from "./Footer";

const HeadTail = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          backgroundColor: "#A4B494",
          width: "175.7vh",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative",
        }}
      >
        <div>{<Dropdown />}</div>
      </div>
      <div>{<Footer />}</div>;
    </div>
  );
};

export default HeadTail;
