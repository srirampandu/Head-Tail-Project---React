import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>{<Navbar />}</div>
      <div
        style={{
          background:
            "url(https://www.downloadyouthministry.com/dw/image/v2/BFBF_PRD/on/demandware.static/-/Sites-dym-master-catalog/default/dw18e5f818/images/hi-res/0/2/02_sample_6_46.jpg?sw=1200&sh=675&sm=fit)",
          width: "175.7vh",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative",
        }}
      ></div>
      <div>{<Footer />}</div>;
    </div>
  );
};

export default Home;
