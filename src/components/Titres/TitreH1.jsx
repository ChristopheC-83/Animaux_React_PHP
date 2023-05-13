import React from 'react'

export default function TitreH1({children, bgColor}) {

    let backgroundColor = bgColor ? bgColor : "bg-primary";
    let monCss = `border border-dark p-2 text-white text-center ${backgroundColor}`

  return (
    <h1 className={monCss} style={{ fontWeight: 'bold', fontSize: '40px' }}>
        {children}
    </h1>
  )
}
