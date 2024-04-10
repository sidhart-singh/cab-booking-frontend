import React from "react";
import { Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

const RideCard = () => {
  const handleStartRide = () => {};

  return (
    <div
      //   onClick={() => router.push(`ride-detail/${ride.id}`)}
      className="flex justify-between items-center rounded-s-sm p-3 cursor-pointer shadow"
    >
      <div className="flex items-center">
        <img
          className="w-20 h-20"
          src="https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
          alt="ride_car"
        />
        <div className="ml-5 space-y-1">
          <p className="text-sm font-semibold">Today 10:00 PM</p>
          <p className="text-xs font-semibold opacity-60">Cab KSL3242W</p>
          <p className="opacity-60 text-xs">
            {/* {ride.pickupArea} */}
            Pickup Area
          </p>
          <p className="opacity-60 text-xs">
            {/* {ride.destinationArea} */}
            Destination Area
          </p>
        </div>
      </div>
      {
        // ride.status === 'COMPLETED'
        true ? (
          <div className="">
            <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem" />
          </div>
        ) : (
          <div className="flex flex-col justify-between pl-5">
            <p className="text-green-500 mb-5">Schedule</p>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.png"
            />
          </div>
        )
      }
      {/* {
        // ride.status === 'START'
        true ? (
          <Button
            onClick={handleStartRide}
            className="bg-green-700"
            variant="contained"
            color="success"
          >
            Start
          </Button>
        ) : (
          <Button
            onClick={handleStartRide}
            className="bg-green-700"
            variant="contained"
            color="success"
          >
            Start
          </Button>
        )
      } */}
    </div>
  );
};

export default RideCard;
