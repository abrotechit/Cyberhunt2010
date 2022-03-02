import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Testimonial1 from "../assets/testimony1.png";

function Testimonials() {
  return (
    <div className="pb-20 pt-10">
      <div className="testimonial-container flex flex-col items-center py-10">
        <h4 className="title text-3xl font-semibold px-8 text-center md:text-left md:px-0">
          Our Customer’s Feedbacks
        </h4>
        <p className="w-full md:w-3/5 text-center font-medium px-8 md:px-14 text-lg text-gray-500 ...">
          What our customers love about us.
        </p>
      </div>
      <Swiper
        navigation
        modules={[Navigation]}
        pagination={{ clickable: true }}
        loop
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 lg:grid-cols-3 pt-10">
            <div className="">
              <img src={Testimonial1} alt="Testimonials" />
            </div>
            <div className="col-span-2 md:pt-16 lg:pt-32 px-4 md:px-16 lg:px-32">
              <p className="text-justify md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id
                malesuada mauris orci vulputate ut blandit et. Pharetra dui
                suscipit odio diam et nunc suspendisse. Sagittis pretium
                fringilla egestas facilisi ornare sit fames. Tortor, dui, sit
                tellus hendrerit pharetra arcu quis.
              </p>
              <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
              <p>Product Manager 1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 lg:grid-cols-3 pt-10">
            <div className="">
              <img src={Testimonial1} alt="Testimonials" />
            </div>
            <div className="col-span-2 md:pt-16 lg:pt-32 px-4 md:px-16 lg:px-32">
              <p className="text-justify md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id
                malesuada mauris orci vulputate ut blandit et. Pharetra dui
                suscipit odio diam et nunc suspendisse. Sagittis pretium
                fringilla egestas facilisi ornare sit fames. Tortor, dui, sit
                tellus hendrerit pharetra arcu quis.
              </p>
              <h5 className="font-semibold text-xl mt-6">James Fowler</h5>
              <p>Product Manager 2</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 lg:grid-cols-3 pt-10">
            <div className="">
              <img src={Testimonial1} alt="Testimonials" />
            </div>
            <div className="col-span-2 md:pt-16 lg:pt-32 px-4 md:px-16 lg:px-32">
              <p className="text-justify md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id
                malesuada mauris orci vulputate ut blandit et. Pharetra dui
                suscipit odio diam et nunc suspendisse. Sagittis pretium
                fringilla egestas facilisi ornare sit fames. Tortor, dui, sit
                tellus hendrerit pharetra arcu quis.
              </p>
              <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
              <p>Product Manager 3</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 lg:grid-cols-3 pt-10">
            <div className="">
              <img src={Testimonial1} alt="Testimonials" />
            </div>
            <div className="col-span-2 md:pt-16 lg:pt-32 px-4 md:px-16 lg:px-32">
              <p className="text-justify md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id
                malesuada mauris orci vulputate ut blandit et. Pharetra dui
                suscipit odio diam et nunc suspendisse. Sagittis pretium
                fringilla egestas facilisi ornare sit fames. Tortor, dui, sit
                tellus hendrerit pharetra arcu quis.
              </p>
              <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
              <p>Product Manager 4</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
