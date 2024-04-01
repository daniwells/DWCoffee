import React, { useState } from 'react';
import Swiper from 'swiper';
import { Swiper as SwiperType, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
// import Navigation from "swiper"
// import Navigation from "swiper";
// import Thumbs from "swiper"
// import FreeMode from 'swiper'

interface sliderThumbProps {
    images: string[]
}

const SliderThumb: React.FC<sliderThumbProps> = ({images}) => {

    const [thumbSwiper, setThumbSwiper] = useState<Swiper | null>(null)

    return (
        <SwiperType
                onSwiper={setThumbSwiper}
                slidesPerView={1}
                // thumbs={{swiper: thumbSwiper}}
                modules={[Navigation]}
            >
                <SwiperType>
                    {
                        images.map((img, index) => (
                            <SwiperSlide key={index} className="w-96">
                                <img src={img} alt=""/>
                            </SwiperSlide>
                        ))
                    }
                </SwiperType>
                <SwiperType
                    // onSwiper={setThumbSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    // modules={[FreeMode, Navigation, Thumbs]}
                    className=""
                >
                    {
                        images.map((img, index) => (
                            <SwiperSlide key={index} className="w-24 h-20">
                                <img src={img} alt=""/>
                            </SwiperSlide>
                        ))
                    }
                </SwiperType>
        </SwiperType>
  )
}

export default SliderThumb
