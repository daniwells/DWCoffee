//REACT
import SubTittle from "../items/text/SubTittle"
import React, {useEffect, useState} from "react"

//COMPONENTS
import InfoRestauranLayout from "../layout/InfoRestaurantLayout"

type stringArrayObject = Record<string, string[]>

const Restaurants = () => {
    const [restaurantsDatas, setRestaurantsDatas] = useState<stringArrayObject[] | []>([]) 

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get_restaurant_data/address', {
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
                if(data["response"]){
                    setRestaurantsDatas(data["response"])
                }
            }  
        )
    }, [])

    return (
        <main className="w-full flex flex-col items-center justify-center  pb-52 ">
            <section className="flex justify-center w-full py-20" >
                <SubTittle text="RESTAURANTS" textStyle=" text-2xl font-archivoBlack " lineStyle="bg-black w-40 h-0.5 mt-3"/>
            </section>
            {   
                restaurantsDatas.length > 0 ? 
                    restaurantsDatas.map((rest: any) => (
                        <InfoRestauranLayout
                            img={`data:image/jpeg;base64,${rest.restaurant[3]}`}
                            google_api={
                                <iframe
                                    title="restaurant1"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.950611805961!2d-48.86249012368021!3d-26.2632662663838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafc576601a05%3A0x5e15c8877b6dbb3a!2sSENAI%20Joinville%20Norte%20II!5e0!3m2!1spt-BR!2sbr!4v1703470302040!5m2!1spt-BR!2sbr"
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade" 
                                    className={'w-full h-full'}>
                                </iframe>
                            }
                            infos={`
                                ${rest.restaurant[2]}
                                Open 9:00 AM - 7:00 PM,  Monday - Saturday
                                ${rest.address[2]}, ${rest.address[3]}, ${rest.address[5]}
                                ${rest.restaurant[1]}
                                ${rest.address[4]}
                            `}
                            title_infos={`${rest.restaurant[0]}`}
                            alt="Joinville Restaurant"
                        />
                    )
                    )
                :
                false   
            }
        </main>
    )
}


export default Restaurants