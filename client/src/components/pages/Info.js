import SubTittle from "../items/SubTittle"
import InfoRestauranLayout from "../layout/InfoRestaurantLayout"
import restaurant_image1 from "../images/restaurant1_info_image.png"
import restaurant_image2 from "../images/restaurant2_info_image.png"
import Line from "../items/Line"


function Info(){
    return (
        <main className="w-full flex flex-col items-center justify-center  pb-52 ">
            <section className="flex justify-center w-full py-20" >
                <SubTittle text="RESTAURANTS" textStyle=" text-2xl font-archivoBlack " lineStyle="bg-black w-40 h-0.5 mt-3"/>
            </section>
            <InfoRestauranLayout
                img={restaurant_image1}
                google_api={
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.950611805961!2d-48.86249012368021!3d-26.2632662663838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafc576601a05%3A0x5e15c8877b6dbb3a!2sSENAI%20Joinville%20Norte%20II!5e0!3m2!1spt-BR!2sbr!4v1703470302040!5m2!1spt-BR!2sbr"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={'w-full h-full'}></iframe>
                }
                infos="
                    Open 9:00 AM - 7:00 PM,  Monday - Saturday
                    Neighborhood Cardoso, AV - D.Pedro, 666
                    dw.cofffeJoinville@gmail.com
                    666.666.6666
                "
                title_infos="D.W Coffee - Joinville"
            />
            <Line style="w-80 h-0.5 my-10 opacity-50 bg-black"/>
            <InfoRestauranLayout
                img={restaurant_image2}
                google_api={
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.950611805961!2d-48.86249012368021!3d-26.2632662663838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafc576601a05%3A0x5e15c8877b6dbb3a!2sSENAI%20Joinville%20Norte%20II!5e0!3m2!1spt-BR!2sbr!4v1703470302040!5m2!1spt-BR!2sbr"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={'w-full h-full'}></iframe>
                }
                infos="
                    Open 9:00 AM - 7:00 PM,  Monday - Saturday
                    Neighborhood Cardoso, AV - D.Pedro, 666
                    dw.cofffeJoinville@gmail.com
                    666.666.6666
                "
                title_infos="D.W Coffee - Curitiba"
            />
        </main>
    )
}


export default Info