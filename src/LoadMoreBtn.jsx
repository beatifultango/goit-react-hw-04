import React from 'react'
import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({load}) => {
  return (
    <div>
        <div className={css.btnDiv}>
            <button className={css.loadBtn} onClick={load}>Daha Fazla Yükle</button>
        </div>
        
    </div>
  )
}

export default LoadMoreBtn