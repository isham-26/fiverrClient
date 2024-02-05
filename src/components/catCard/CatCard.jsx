import React from 'react'
import './catCard.scss'
import { Link } from 'react-router-dom'
const CatCard = ({items}) => {
  return (
    <Link to="/gigs?cat=design">
     <div className='catCard'>
        <img src={items.img} alt="img" />
        <span className="desc">{items.desc}</span>
        <span className="title">{items.title}</span>
     </div>
    </Link>
  )
}

export default CatCard