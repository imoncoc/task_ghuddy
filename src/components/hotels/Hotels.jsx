import Container from "../../shared/Container";
import './Hotels.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { useContext, useEffect, useState } from "react";
import HotelsBox from "./HotelsBox";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigation } from "swiper/modules";

const Hotels = () => {
  const { hotels, activeCategory } = useContext(AuthContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [hotels, setHotels] = useState([]);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // useEffect(() => {
    //     fetch("https://dev.ghuddy.link/api/v1/open/hotels")
    //       .then((res) => res.json())
    //       .then((data) => setHotels(data.esHotelCardList))
    //       .catch((error) => console.log(error));
    // }, [])

    // console.log(hotels)



  return (
    <Container>
      <p className="font-medium text-2xl text-neutral-700">
        {activeCategory.length <= 0 ? "Top Hotels" : activeCategory}
      </p>

      <Swiper
      id="customSwiper"
        spaceBetween={50}
        slidesPerView={
          windowWidth <= 576
            ? 1.5
            : windowWidth <= 768
            ? 2
            : windowWidth <= 992
            ? 2.6
            : windowWidth <= 1200
            ? 3.5
            : 4.3
        }
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper custom-swiper"
      >
        {/* <span slot="container-start">Top Hotel</span> */}

        {/* <span slot="container-end">Container End</span> */}

        {!hotels || hotels.length === 0 ? (
          <div className="h-[50vh] flex items-center justify-center">
            <p className="">No {activeCategory} Found!</p>
          </div>
        ) : (
          hotels.map((item) => (
            <SwiperSlide key={item.rpredi}>
              <HotelsBox hotelData={item}></HotelsBox>
            </SwiperSlide>
            // <SwiperSlide key={item.name}>Slide 1</SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default Hotels;
