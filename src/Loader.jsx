import React from 'react'
import { RiseLoader } from 'react-spinners'
const Loader = ({size=50}) => {
  return (
    <div>
      <RiseLoader size={size}/>
    </div>
  )
}

export default Loader