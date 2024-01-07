import React from 'react'

export default function Button({children, style, onClick}) {
    return (
        <button className={`flex justify-center text-sm p-3 px-8 rounded-xl text-white font-archivoBlack ${style}`} onClick={onClick}>{children}</button>    
    )
}
