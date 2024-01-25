

const BudgetControl = (budget) => {

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
                <span>Budget: </span> {formatAmount(budget.budget)}
            </p>
            <p>
                <span>Available: </span> {formatAmount(0)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(0)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl