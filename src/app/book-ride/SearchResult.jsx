import React from "react";
import { Divider } from "@mui/material";
import SearchResultCard from "./SearchResultCard";

const SearchResult = ({
  items,
  setActiveField,
  area_key,
  latitude_key,
  longtitude_key,
}) => {
  return (
    <div className=" absolute top left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[500vh] overflow-y-scroll shadow-md hide-scrollbar">
      {items?.map((item, i) => (
        <SearchResultCard
          // key={item.display_name}
          key={i}
          item={item}
          area_key={area_key}
          latitude_key={latitude_key}
          longtitude_key={longtitude_key}
          setActiveField={setActiveField}
        />
      ))}
    </div>
  );
};

export default SearchResult;
