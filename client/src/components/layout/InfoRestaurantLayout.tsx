//REACT
import React from "react"

//COMPONENTS
import Container from "./Container"
import Line from "../items/text/Line"

interface InfoRestauranLayoutProps{
    img: string,
    google_api: React.ReactNode,
    infos: string,
    title_infos: string
    alt: string
}

const InfoRestauranLayout: React.FC<InfoRestauranLayoutProps> = ({img, google_api, infos, title_infos, alt}) => {
    return (
        <Container styleProp="px-3 flex-col flex flex-col items-center " >
            <section className="h-48 mb-5">
                <img className="w-full h-full bg-black " src={img} alt={alt} />
            </section>
            <section className="flex w-full" >
                <section className="w-2/4 h-48 bg-slate-600">{google_api}</section>
                <section className="w-2/4 h-48 pl-3 text-xs leading-7 ">
                    <h2 className="font-extrabold text-base mb-3">{title_infos}</h2>
                    {infos}
                </section>
            </section>
            <Line styleProp="w-80 h-0.5 my-10 opacity-50 bg-black my-20 "/>
        </Container>
    )
}

export default InfoRestauranLayout