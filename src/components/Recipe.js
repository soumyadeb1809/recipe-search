import React from 'react'

const Recipe = ({title, calories, img, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map((indredient, idx) => (
                        <li key={idx}>{indredient.text}</li>
                    ))
                }
            </ol>
            <p>{calories}</p>
            <img src={img} alt={title}></img>
        </div>
    )
}


export default Recipe;