import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'


export const Header = ({
    expenses,
    setExpenses,
    budget, 
    setBudget, 
    setIsValidBudget, 
    isValidBudget,
    filter,
    filteredAmount,
    percentageCat
    }) => {
  return (
    <header>
        <h1>Expenses planner</h1>

        {isValidBudget ? ( 
            <BudgetControl
            expenses={expenses}
            setExpenses={setExpenses} 
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
            filter={filter}
            filteredAmount={filteredAmount}
            percentageCat={percentageCat}
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