import { useState, useEffect } from "react"

const BudgetControl = ( {budget, expenses} ) => {
    
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    
    useEffect(() => {
      const totalSpent = expenses.reduce( (total, expense) => expense.amount + total, 0 )
      
      const totalAvailable = budget - totalSpent

      setSpent(totalSpent)
      setAvailable(totalAvailable)
    }, [expenses])
    

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'DKK'
            }) 
    }
    
  return (
    <div className="container-budget container shadow two-columns">
        <div>
            <p>graph</p>
        </div>
        <div className="content-budget">
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p>
                <span>Available: </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl