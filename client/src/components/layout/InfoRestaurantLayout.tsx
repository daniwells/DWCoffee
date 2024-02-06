//REACT
import React from "react"

//COMPONENTS
import Container from "./Container"

interface InfoRestauranLayoutProps{
    img: string,
    google_api: React.ReactNode,
    infos: string,
    title_infos: string
}

const InfoRestauranLayout: React.FC<InfoRestauranLayoutProps> = ({img, google_api, infos, title_infos}) => {
    return (
        <Container styleProp="px-3 flex-col" >
            <section className="h-48 mb-5">
                <img className="w-full h-full bg-black " src={img} alt="restauran from Joinville" />
            </section>
            <section className="flex w-full" >
                <section className="w-2/4 h-48 bg-slate-600">{google_api}</section>
                <section className="w-2/4 h-48 pl-3 text-xs leading-7 ">
                    <h2 className="font-extrabold text-base mb-3">{title_infos}</h2>
                    {infos}
                </section>
            </section>
        </Container>
    )
}

export default InfoRestauranLayout