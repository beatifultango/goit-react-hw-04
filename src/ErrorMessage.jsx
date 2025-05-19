import React from 'react'

const ErrorMessage = () => {
    const error="Whoops, something went wrong! Please try reloading this page!";
  return (
    <div>
        <h2>{error}</h2>
    </div>
  )
}

export default ErrorMessage