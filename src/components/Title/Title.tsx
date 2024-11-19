import React from 'react'
import StarWarsImage from "../../assets/starwarsimage.png"

import "./title.css"

const Title: React.FC = () => {
    return (
        <div className='title'><img className='starwarsimg' src={StarWarsImage} alt="" /></div>
    )
}

export default Title