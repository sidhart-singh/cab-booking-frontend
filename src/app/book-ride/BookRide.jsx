"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import BookRideNavbar from "./BookRideNavbar";
import AvailableCabs from "./AvailableCabs";
import SearchResult from "./SearchResult";

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required("Pickup location is required"),
  destinationLocation: Yup.string().required(
    "Destination location is required"
  ),
});

const BookRide = () => {
  const [activeField, setActiveField] = useState("");

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      pickupLocation: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) handleOnSubmit(values);
    },
  });

  const onFocused = (e) => {
    const name = e.target.name;
    setActiveField(name);
  };

  return (
    <div className="w-full">
      <BookRideNavbar />
      <div className="px-3 lg:px-5 mt-10">
        <form onSubmit={formik.onSubmit} className="space-y-2">
          <div>
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">From</p>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Enter Pickup Location"
                value={formik.values.pickupLocation}
                onChange={(e) => {
                  const value = e.target.value;
                  formik.setFieldValue("pickupLocation", value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {activeField === "pickupLocation" &&
                // ride.results?.length > 0 &&
                formik.values.pickupLocation && (
                  <div className="">
                    <SearchResult
                      items={[1, 1, 1, 1, 1]}
                      area_key={"pickup_area"}
                      setActiveField={setActiveField}
                      latitude_key={"pickup_latitude"}
                      longitude_key={"pickup_longitude"}
                    />
                  </div>
                )}
            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div className="">
                <p className="text-xs text-red-500 px-2">
                  {formik.errors.pickupLocation}
                </p>
              </div>
            )}
          </div>
          <div>
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">To</p>
              <input
                type="text"
                name="destinationLocation"
                placeholder="Enter Destination Location"
                value={formik.values.destinationLocation}
                onChange={(e) => {
                  const value = e.target.value;
                  console.log(value);
                  formik.setFieldValue("destinationLocation", value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {activeField === "destinationLocation" &&
                // ride.results?.length > 0 &&
                formik.values.destinationLocation?.length > 0 && (
                  <div className="">
                    <SearchResult
                      setActiveField={setActiveField}
                      latitude_key={"destination_latitude"}
                      longitude_key={"destination_longitude"}
                      area_key={"destination_area"}
                    />
                  </div>
                )}
            </div>
            {formik.touched.destinationLocation &&
              formik.errors.destinationLocation && (
                <div className="">
                  <p className="text-xs text-red-500 px-2">
                    {formik.errors.destinationLocation}
                  </p>
                </div>
              )}
          </div>
          <Button
            className=""
            sx={{ width: "100%", padding: ".7rem 0rem", bgcolor: "purple" }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Find Driver{" "}
          </Button>
        </form>
      </div>

      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p>Available Cabs</p>
        <div className="space-y-2">
          <AvailableCabs />
          <AvailableCabs />
          <AvailableCabs />
          <AvailableCabs />
          <AvailableCabs />
        </div>
      </div>
    </div>
  );
};

export default BookRide;
