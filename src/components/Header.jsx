import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './budgetControl'


export const Header = ({
    expenses,
    budget, 
    setBudget, 
    setIsValidBudget, 
    isValidBudget
    }) => {
  return (
    <header>
        <h1>Expenses planner</h1>

        {isValidBudget ? ( 
            <BudgetControl
            expenses={expenses} 
            budget={budget}
            />
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
export default Header