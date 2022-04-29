import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, source, image, ingredients }) => {
    return (
        <>
            <div className={style.recipe}>
                <h1>{title}</h1>
                <ol>
                    {ingredients.map((ingredient) => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p>{source}</p>
                <img className={style.image}src={image} alt="image" />
            </div>
        </>
    );
};

export default Recipe;