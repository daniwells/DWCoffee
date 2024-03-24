// REACT
import React, {useEffect, useState} from "react"

// COMPONENTS
import OptionCoffee from "../items/coffeeItems/OptionCoffee"
import Select from "../items/selects/Select"
import Line from "../items/text/Line"

//STYLE
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//MYHOOKS
import useChangeDirection from "../../myHooks/useChangeDirection"

const Coffee = () => {
    const [coffeeDatas, setCoffeeDatas] = useState<[string, number, string, string, string][]>([["",2,"","", ""]]) 
    const [changeValue, changeValueFunct] = useChangeDirection(5)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get_coffee_data', {
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
                    setCoffeeDatas(data["response"])
                }
            }  
        )
    }, [])

    return (
        <main className="m-auto my-20 flex flex-col gap-24 ">
            <section className="w-full" > 
                <h1 className="my-5 text-4xl font-archivoBlack text-customBlack " >Coffee</h1>
                <Select id="categories" 
                        options={["ESPRESSO", "AMERICANO", "CHOCOLATE", "COLD"]} 
                        styleSelect="px-10 py-3 text-gray-700 rounded bg-gray-100 focus:bg-white border-customBrownOpacity border-0.1 shadow-md" 
                />
            </section>
            <section className="grid grid-cols-2 grid-rows-3 gap-3 gap-y-5" >
                {
                    coffeeDatas.map((coffee) => (
                        <OptionCoffee name={coffee[0]} price={coffee[1]} image={coffee[3]} imageBack={coffee[4]} cup={300} />
                    ))
                }
            </section>
            
            <section>
                <Line styleProp="w-full h-0.5 bg-customBlack opacity-60 rounded-2xl "/>
                <div className='flex  justify-center items-center gap-16 text-lg mt-10 ' > 
                    <IoIosArrowBack className='cursor-pointer' onClick={() => changeValueFunct("left")} />
                    <p>{changeValue}</p>
                    <IoIosArrowForward className='cursor-pointer' onClick={() => changeValueFunct("right")} />
                </div>
            </section>
          
            
        </main>
    )
}

export default Coffee