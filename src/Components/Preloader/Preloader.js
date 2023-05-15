import React from "react";
import loaderImg from "../../assets/Loader.gif";
const Preloader = () => {
  return (
    <div className="d-flex items-center justify-center">
      <img src={loaderImg} alt="Loading..." className="mx-auto my-auto" />
    </div>
  );
};

export default Preloader;