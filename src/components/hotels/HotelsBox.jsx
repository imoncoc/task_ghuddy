import { faGem, faHeart, } from "@fortawesome/free-regular-svg-icons";
import { addToDb, getShoppingCart, removeFromDb, isInCart } from "../../shared/fakeDb";

import {
  faHouse,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useState } from "react";




const HotelsBox = ({hotelData}) => {
    let {
      property_name,
      class_rating,
      short_address,
      display_facilities,
      discount_percent,
      black_price,
      red_price,
      images,
      rpredi
    } = hotelData;
    const [isItemInCart, setIsItemInCart] = useState(isInCart(rpredi));

    // console.log(hotelData)

    const handleAddData = (id) => {
      if (isInCart(id)) {
        removeFromDb(id);
        setIsItemInCart(false); // Item removed from cart
      } else {
        addToDb(id);
        setIsItemInCart(true); // Item added to cart
      }
    };


  return (
    <div className="shadow-xl hover:shadow-2xl my-8 bg-white rounded-xl h-[442px] w-[260px] dark:bg-slate-800 dark:text-white dark:hover:shadow-white">
      <div>
        {/* <img className="rounded-t-xl" src={thumb_image} alt="" /> */}

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {images.slice(0, 6).map((image, indx) => (
            <SwiperSlide key={indx}>
              <div className="relative">
                <img className="rounded-t-xl h-60 w-full" src={image} alt="" />
                <div className="absolute top-0 right-0 h-16 w-16 flex items-center justify-center  text-white rounded-full">
                  <FontAwesomeIcon
                    onClick={() => handleAddData(rpredi)}
                    className={`text-2xl hover:animate-pulse cursor-pointer ${
                      isItemInCart ? "text-red-500" : ""
                    }`}
                    icon={faHeart}
                  />
                </div>
                <div className="absolute top-5 left-0 px-2 py-1 bg-red-500 text-white ">
                  <div className="text-xs">
                    <FontAwesomeIcon icon={faGem} />
                    <span className="">
                      {" "}
                      - {Math.ceil(discount_percent)}% off{" "}
                    </span>
                    <span className="bg-white text-red-500 px-[2px] font-semibold">
                      Deal!
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="m-2 h-48 relative">
        <div>
          <div className="flex justify-between gap-5 dark:text-white">
            <p className="font-medium mb-2 dark:text-white">{property_name}</p>
            <div className="flex items-start">
              <div className="flex items-center text-sm dark:text-white">
                <FontAwesomeIcon
                  className="mr-1 text-yellow-400"
                  icon={faStar}
                />
                {class_rating}
              </div>
            </div>
          </div>
          <div className="text-sm text-neutral-700 my-1 dark:text-white">
            <FontAwesomeIcon className="mr-3" icon={faLocationDot} />
            {short_address}
          </div>
          <div className="text-sm text-neutral-700 dark:text-white">
            <FontAwesomeIcon className="mr-2" icon={faHouse} />
            {display_facilities[0].name}, {display_facilities[1].name},{" "}
            {display_facilities[2].name}.
          </div>
        </div>

        <div className="text-center absolute inset-x-0 bottom-0 dark:text-white">
          <p className="text-center text-xs font-normal text-neutral-700 dark:text-white">
            Checkout Price:
          </p>{" "}
          <span className=" text-neutral-700 font-medium dark:text-white">
            {Math.ceil(red_price)} BDT
          </span>{" "}
          <span className="text-neutral-400 line-through font-medium">
            {" "}
            {black_price} BDT{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HotelsBox