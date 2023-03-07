import React from 'react'

const Button = ({styles}) => (
  <button type='button' className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none`}>
    Get Started
  </button>
)

export default Button