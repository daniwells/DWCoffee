import React from 'react'

interface BlurBoxProps {
    widthProp: string
    heightProp: string
    children: React.ReactNode
}

const BlurBox: React.FC<BlurBoxProps> = ({widthProp, heightProp, children}) => {
  return (
    <section className={`${widthProp} ${heightProp} flex flex-col align-center justify-center w-full px-5 `} >
      {children}
    </section>
  )
}

export default BlurBox
