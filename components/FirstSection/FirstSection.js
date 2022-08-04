import SlideComponent, { Slide } from "../../helpers/Slide/SlideComponent"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import Author from "../_child/Author";

const FirstSection = () => {
  SwiperCore.use([Autoplay])

  return (
    <section className="py-16">
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

            {/* <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 2000
                    }}
                  >
                    <SwiperSlide>{SlideComponent()}</SwiperSlide>
                    <SwiperSlide>{SlideComponent()}</SwiperSlide>
                    <SwiperSlide>{SlideComponent()}</SwiperSlide>
                    <SwiperSlide>{SlideComponent()}</SwiperSlide>
                    ...
            </Swiper> */}
            <SlideComponent />
            
        </div>
    </section>
  )
}

export default FirstSection