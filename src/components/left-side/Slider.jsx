import React from 'react'

const Slider = ({ min, max, value, onChange }) => {
    return (
        <div>
          <input type="range" min={min} max={max} value={value} onChange={onChange} />
          <span>{value}</span>
        </div>
      )
}

export default Slider