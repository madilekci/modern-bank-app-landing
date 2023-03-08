import React from 'react'

const Button = ({styles, children}) => (
  <button type='button' className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none`}>
    {children}
  </button>
)

export default Button