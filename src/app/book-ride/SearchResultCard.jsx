import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchResultCard = ({
  item,
  area_key,
  latitude_key,
  longitude_key,
  setActiveField,
}) => {
  const pickup_area = "Mumbai, Mumbai Suburban, Maharashtra, India";
  const pickup_latitude = 72.832349;
  const pickup_longitude = 19.012489;
  const destination_area = "";
  const destination_latitude = "";
  const destination_longitude = "";

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = () => {
    const params = new URLSearchParams(searchParams);

    // add params with pathname
    params.set([latitude_key], pickup_latitude);
    params.set([longitude_key], pickup_longitude);
    params.set([area_key], pickup_area);

    // replace with router
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      onClick={handleSelect}
      className="flex items-center py-2 z-10 bg-white cursor-pointer"
    >
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">
          {/* {item?.display_name.split(" ")[0]} */}
          Mumbai
        </p>
        <p className="font-semibold opacity-60">
          {/* {item?.display_name} */}
          Mumbai Gokuldham Market
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
