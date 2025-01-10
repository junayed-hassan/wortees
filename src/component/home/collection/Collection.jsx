import "swiper/css";
import "swiper/css/pagination";
import "./styles.css"; // Add your custom styles if necessary

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import images
import Collection1 from "../../../assets/images/Collection/Collection1.png";
import Collection2 from "../../../assets/images/Collection/Collection2.png";
import Collection3 from "../../../assets/images/Collection/Collection3.png";
import Collection4 from "../../../assets/images/Collection/Collection4.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Collection() {
  return (
    <div className="px-10 mt-10 mb-14">
      <div className="mt-4 ">
        <h2 className="pb-8 text-4xl font-bold text-center font-gilroy">
          Scopri le Collezioni
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img src={Collection1} alt={Collection1} className="rounded-lg" />
            <div className="flex bg-red-700 items-center justify-end gap-28  py-2.5 absolute bottom-0 w-full rounded-b-lg">
              <span className="text-xl font-semibold text-white">Double</span>
              <span className="px-1.5 py-1 bg-white rounded-full mr-6">
                <ArrowOutwardIcon />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Collection2} alt={Collection2} className="rounded-lg" />
            <div className="flex bg-[#212121] items-center justify-end gap-28  py-2.5 absolute bottom-0 w-full rounded-b-lg">
              <span className="text-xl font-semibold text-white">Double</span>
              <span className="px-1.5 py-1 bg-white rounded-full mr-6">
                <ArrowOutwardIcon />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Collection3} alt={Collection3} className="rounded-lg" />
            <div className="bg-[#212121]/80 flex items-center justify-end gap-28  py-2.5 absolute bottom-0 w-full rounded-b-lg">
              <span className="text-xl font-semibold text-white">Double</span>
              <span className="px-1.5 py-1 bg-white rounded-full mr-6">
                <ArrowOutwardIcon />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Collection4} alt={Collection4} className="rounded-lg" />
            <div className="flex bg-red-700 items-center justify-end gap-28  py-2.5 absolute bottom-0 w-full rounded-b-lg">
              <span className="text-xl font-semibold text-white">Double</span>
              <span className="px-1.5 py-1 bg-white rounded-full mr-6">
                <ArrowOutwardIcon />
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Collection;
