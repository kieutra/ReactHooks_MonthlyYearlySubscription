import React from 'react'
import "./Content.css"

function Content({ plan, theme, price, packages, yearly, percentOff, onBuy }) {
  return (
    <div className='price-box --card '>
      <div className={`box --p2 ${theme}`}>
        <p className='--text-light'>{plan}</p>
        <h4 className='--text-light'>
          <span>$</span>
          <span className='basic'>{price}</span>
        </h4>
        {yearly && (<p className="--text-light">
          <del>{percentOff}% Off</del>
        </p>)}
      </div>

      <div className="features">
        <ul>
          {packages.map((apackage, index) => (
            <li key={index}>{apackage}</li>
          ))}

        </ul>

        <button className={`btn ${theme}`} onClick={onBuy}>Buy Now</button>
      </div>
    </div>
  )
}

export default Content