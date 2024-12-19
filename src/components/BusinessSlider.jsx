// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function BusinessSlider() {
  return (
    <div className="w-full h-40 bg-blue-300 rounded-xl overflow-hidden mt-5">
      <Swiper
        className="h-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="/images/bus1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bus2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
