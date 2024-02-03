import { useState, useEffect } from "react"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ( {budget, 
        setBudget, 
        expenses, 
        setExpenses, 
        setIsValidBudget,
        filter,
        filteredAmount,
        percentageCat
    
    } ) => {
    
    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    
    useEffect(() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.amount + total, 0 )

        const totalAvailable = budget - totalSpent
        
        //Calculate percetage
        const newPercentage = (((budget - totalAvailable)/budget) * 100).toFixed(0)
        
       
        
        setSpent(totalSpent)
        setAvailable(totalAvailable)
        
        
       
       setTimeout(() => {
           setPercentage(newPercentage)
       },500)
       
    }, [expenses])
    
    


    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'DKK'
            }) 
    }
    
    const handleReset = () => {
        const answer = confirm('Do you want to reset everything?')
        
        if (answer){
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        } 
    }
  return (
    <div className="container-budget container shadow two-columns">
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' :'#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? '#DC2626' :'#3B82F6'

                })}
                value={percentage}
                text={`${percentage}%`}
            
            />
            {useEffect(() => {
                console.log(percentageCat)
                filteredAmount !== 0 ? (
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' :'#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' :'#3B82F6'
    
                    })}
                    value={percentageCat}
                    text={`${percentageCat}% of spent`}
                
                />
                    
                ):('')


            })}

        </div>
        <div className="content-budget">
            <button 
                className="reset-app" 
                type="button"
                onClick={handleReset}
            >
                Reset App
            </button>
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p  className={`${available < 0 ? 'negative' : ''}`}>
                <span>Available: </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
            {filter ? (
                <p>
                    <span>{`Spent in ${filter}:`} </span> {formatAmount(filteredAmount)}
                </p>
            ) : ('')}
        
        </div>
    </div>
  )
}

export default BudgetControl