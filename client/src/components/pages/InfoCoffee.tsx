import React, {useState, useMemo, useEffect} from "react"
import { useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'

const InfoCoffee: React.FC = () => {
    // const location = useLocation();
    // const coffeeIdName = location.pathname.split("/").slice(2)
    
    const [images, setImages] = useState(["","",""])
    const [activeImg, setActiveImage] = useState(`data:image/webp;base64,${images[0]}`)
    
    const { coffeeId } = useParams() 
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/get_coffee_data/${coffeeId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(
            res => res.json()
        )
        .then(
            (data: any) => {

                data["RESPONSE"] = data["RESPONSE"].map((image:string) => {
                    return `data:image/webp;base64,${image}`;
                });
                setImages(data["RESPONSE"])
                // setActiveImage(`data:image/webp;base64,${images[0]}`)
            }  
        )
    }, [coffeeId])
    
    useEffect(() => {
        setActiveImage(images[0])
    }, [images])
    
    return (
        <main className="m-auto my-20 flex flex-col">
            <h1 className=" text-3xl font-archivoBlack text-customBlack px-6">Info coffee</h1>
            {/* <div className="flex flex-row justify-between lg:flex-row p-6 ">
                <div className="flex flex-col gap-6">
                    <img src={activeImg} alt="" className="w-full h-full" />
                    <div className="flex flex-row justify-start gap-3 " >
                        <img src={images[0]} alt="" className="w-24 h-20" onClick={() => setActiveImage(images[0])}/>
                        <img src={images[1]} alt="" className="w-24 h-20" onClick={() => setActiveImage(images[1])}/>
                        <img src={images[2]} alt="" className="w-24 h-20" onClick={() => setActiveImage(images[2])}/>    
                    </div>
                </div>
            </div> */}
            <div className="flex flex-row justify-between lg:flex-row p-6 " style={{width: '95vw'}}>
                <Swiper
                    slidesPerView={1}
                >
                    {
                        images.map((img, index) => (
                            <SwiperSlide key={index} className="w-96">
                                <img src={img} alt=""/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
           
            {/* ABOUT */}
            {/* <div>
                <div>
                    <span>  </span>
                </div>
            </div> */}
        </main>
    )
}

// aspect-square object-cover

export default InfoCoffee