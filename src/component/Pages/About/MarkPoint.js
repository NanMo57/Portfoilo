import React from 'react'

function MarkPoint({margin}) {
  return (
    <div className='d-flex flex-column align-items-start justify-content-center' style={{'marginTop':`${margin}`}}>
        <span className='circle rounded-circle d-inline-block'></span>
        <hr className='ms-2 mt-0'/>
    </div>
  )
}

export default MarkPoint
