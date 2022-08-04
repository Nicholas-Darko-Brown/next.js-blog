import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
import Author from "../_child/Author";

const ThirdSection = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        <Swiper slidesPerView={2}>

            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            
        </Swiper>
    </section>
  )
}

export default ThirdSection

const Post = () => {
    return (
        <div className="grid">
        <div className="images">
          <Link href={"/"}>
            <a>
              <Image
                src={"/image/Characters/Character04.svg"}
                width={600}
                height={400}
                alt="" 
              />
            </a>
          </Link>
        </div>
  
        <div className="info flex justify-center flex-col py-4">
          <div className="category">
            <Link href={"/"}>
              <a className="text-orange-600 hover:text-orange-800">
                Business, Travel
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-gray-500 hover:text-gray-400"> - July 3, 2022</a>
            </Link>
          </div>
  
          <div className="title">
            <Link href={"/"}>
              <a className="text-3xl md:text-4xl font-bold text-gray-200 hover:text-gray-700">
                Your most unhappy customers are your greatest source of learning
              </a>
            </Link>
          </div>
  
          <p className="text-gray-400 py-3">
            My name is Nicholas. I am 25 years old. I am a Ghanaian by birth. I
            work at Amalitech gGmbh. I am a Frontend Developer by profession
          </p>
  
          <Author></Author>
        </div>
      </div>
    )
}