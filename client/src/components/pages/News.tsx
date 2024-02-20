//REACT
import React from 'react'

//STYLES
import news1 from '../images/news1.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//COMPONENTS
import Input from '../items/inputs/Input'

const News: React.FC = () => {
  return (
    <main className='min-h-96 w-full flex flex-col items-center justify mt-24 mb-24 gap-20'>
        <section className='w-10/12 flex flex-col gap-3'>
            <label>Enter your email:</label>
            <Input minLength={1} maxLength={255} styleProp="news" data_group="news" name="email" text="Enter your email for receive news" permitionValues="all" type="email"/>
        </section>
        <section className='relative w-10/12 min-h-44 '>
            <div>
                <img src={news1} alt="imageNews" className='w-10/12' />
            </div>
            <div className=' absolute h-full w-full top-0 flex justify-end items-end '>
                <div className='bg-customBlack flex flex-col text-white p-4 gap-2'>
                    <h1 className='text-sm'>Lorem ipsum dolor</h1>
                    <p className=' text-justify text-opacity-10 pr-2 ' style={{fontSize: '10px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                        Officia nobis, possimus inventore veritatis eligend<br/> 
                        perferendis nisi ducimus repellendus nesciunt! <br/>
                    </p>
                </div>
            </div>
        </section>
        <section className='flex justify-center items-center gap-16 text-lg' >
            <IoIosArrowBack className='cursor-pointer' />
            <p>2</p>
            <IoIosArrowForward className='cursor-pointer' />
        </section>
    </main>
  )
}

export default News

