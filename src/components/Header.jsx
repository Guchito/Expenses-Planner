import React from 'react'
import { NewBudget } from './NewBudget'


export const Header = ({budget, 
    setBudget, 
    setIsValidBudget, 
    isValidBudget}) => {
  return (
    <header>
        <h1>Expenses planner</h1>

        {isValidBudget ? ( 
            <p>Budget</p>
        ): (
            <NewBudget 
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
        />
        )}

        
    </header>
  )
}
