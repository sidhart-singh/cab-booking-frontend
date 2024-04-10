import React from "react";
import Layout from "../components/user/Layout/Layout";
import BookRide from "./BookRide";

const page = () => {
  return (
    <div>
      {/* <Layout children={<BookRide />} /> */}
      <Layout>
        <BookRide />
      </Layout>
    </div>
  );
};

export default page;
