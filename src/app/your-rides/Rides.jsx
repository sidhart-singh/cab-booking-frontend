"use client";

import React from "react";
import { useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";
import RideCard from "../components/user/RideCard/RideCard";

const Rides = () => {
  const router = useRouter();

  const goBack = () => {
    // goes back 1
    router.back();
  };

  return (
    <div className="h-screen">
      <div className="flex items-center p-2 lg:px-5">
        <WestIcon onClick={goBack} className={"cursor-pointer"} />
        <p className="text-center w-full">Your Rides</p>
      </div>
      <div className="space-y-2 p-2 lg:px-5 h-[90vh]">
        {[1, 1, 1, 1, 1].map((item, i) => (
          <RideCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Rides;
