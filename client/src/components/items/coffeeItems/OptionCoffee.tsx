//REACT
import React from 'react'

//COMPONENTS
import Button from '../buttons/Button'
import LinkButton from '../buttons/LinkButton'

interface OptionCoffeeProps {
  name: string,
  price: number,
  cup: number,
  image: string,
  imageBack: string
}

const OptionCoffee: React.FC<OptionCoffeeProps> = ({name, price, cup, image, imageBack}) => {
  return (
    <section className='h-72 w-44 cursor-pointer hover:border-customYellow relative group'>
        <div id='front' className='shadow-md border-customBrownOpacity border-0.3 absolute backface-hidden bg-white w-full h-full transform transition duration-[1.5s] group-hover:rotate-y-180'>
          <div className='h-4/6'>
            <img src={`data:image/jpeg;base64,${image}`} alt="Image of coffee" className='w-full h-full border-customBrownOpacity border-0.3'/>
          </div>
          <div className='h-2/6 flex flex-col items-center justify-center text-xs'>
              <p>{name} - {cup}g</p>
              <p className=' font-extrabold ' >R${price.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
          </div>
        </div>

        <div id='back' className='shadow-md border-customBrownOpacity border-0.3 absolute -right-2 backface-hidden w-13/12 h-14/12 z-50 bg-white transform transition duration-[1.5s] -rotate-y-180 group-hover:rotate-y-0'>
          <div className='h-4/6 p-2 '>
            <img src={`data:image/jpeg;base64,${imageBack}`} alt="Image of coffee" className='w-full h-full border-customBrownOpacity border-0.3'/>
          </div>
          <div className='h-2/6 flex flex-col items-center m-5 text-xs'>
              <p>{name} - {cup}g</p>
              <p className=' font-extrabold ' >R${price.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
              <Button styleProp='m-1 text-center w-32 text-md font-archivoBlack py-1 px-5 rounded-2xl bg-customBrown text-white opacity-75 hover:opacity-100 hover:bg-customBrown transition-all duration-700 ease-in-out'>Add to Cart</Button>
              <LinkButton styleProp="coffee_card" to='/' text="INFO"/>
          </div>
        </div> 
    </section>
  )
}

export default OptionCoffee