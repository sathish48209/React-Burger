import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
          return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
          })
        })
        .reduce((acc,elem) => {
          return acc.concat(elem)
        },[]);

        if(transformedIngredients.length === 0) {
          transformedIngredients = <p>Please add an Ingredients</p>
        }

  return (
    <div className={classes.Burger}> 
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
