import React from 'react'

interface BlurBoxProps {
    widthProp: string
    heightProp: string
    children: React.ReactNode
}

const BlurBox: React.FC<BlurBoxProps> = ({widthProp, heightProp, children}) => {
  return (
    <section className={`${widthProp} ${heightProp} relative flex flex-col align-center justify-center w-full px-5`} >
      {children}
      <section className="blur-sm absolute bg-black opacity-70 w-11/12 h-full z-0 " >
      </section>
    </section>
  )
}

export default BlurBox
