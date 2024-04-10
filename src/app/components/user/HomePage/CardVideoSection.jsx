import React from "react";

const CardVideoSection = () => {
  return (
    <div className="mt-32">
      <h1 className="text-5xl font-bold my-10 text-center">
        India's most ambitious car
      </h1>
      <video
        autoPlay
        loop
        style={{ width: "100%", height: "100%" }}
        src={"/CardVideo.mp4"}
      ></video>
    </div>
  );
};

export default CardVideoSection;
