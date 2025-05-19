import React from 'react'
import { ColoRing } from 'react-spinners'
const Loader = ({size=30}) => {
  return (
    <div>
      <ColoRing size={size}/>
    </div>
  )
}

export default Loader