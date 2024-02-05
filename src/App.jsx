import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/modal'
import Filter from './components/filter'
import {getId} from './helpers'
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) ?? []
  )

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [editExpense, setEditExpense] = useState({})

  const [filter, setFilter] = useState('')
  const [filteredExpenses, setFilteredExpenses] = useState([])
  const [filteredAmount, setFilteredAmount] = useState(0)
  const [percentageCat, setPercentageCat] =useState(0)



  useEffect(()=>{
    if(Object.keys(editExpense).length > 0) {
      setModal(true)

      setTimeout(()=> {
        setAnimateModal(true)
      },500)
    }
  },[editExpense])


  useEffect(() => {
    if(filter) {
      const filteredExpenses = expenses.filter(expense => expense.category === filter)
      setFilteredExpenses(filteredExpenses)
      
      //Total in category
      const totalCategory = filteredExpenses.reduce((totalC, expenseC) => expenseC.amount + totalC, 0 )
        
      filteredExpenses.length ? setFilteredAmount(totalCategory) : setFilteredAmount(0)
      
      const totalSpent = expenses.reduce( (total, expense) => expense.amount + total, 0 )
      
      if(totalCategory === 0){
        setPercentageCat(0)
      }else{
        const newPercentageCat =((totalCategory / totalSpent) * 100).toFixed(0)
        setPercentageCat(newPercentageCat)
      }   
    }
  },[filter, expenses])


  //Local Storage
  useEffect(()=> {
    localStorage.setItem('budget', budget ?? 0)
  },[budget])

  useEffect(() => {
    localStorage.setItem('expenses',JSON.stringify(expenses)?? [])
  },[expenses])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  },[])


  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(()=> {
      setAnimateModal(true)
    },500)
  }

  const saveExpense = expense =>{
    if(expense.id) {
      //update
      const updatedExpense = expenses.map(expenseState => 
        expenseState.id === expense.id ? expense : expenseState )
        setExpenses(updatedExpense)
        setEditExpense({})
    }else{
      //new expense
      expense.id = getId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }
    
    setAnimateModal(false)
    setTimeout(()=> {
      setModal(false)
    },500)
  }

  const deleteExpense = id => {
    const updateExpenses = expenses.filter( expense => expense.id !== id)
    setExpenses(updateExpenses)
  }


  
  return (
    <div className={modal ? 'fix' : ''}>
      <Header 
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        filter={filter}
        filteredExpenses={filteredExpenses}
        filteredAmount={filteredAmount}
        setFilteredAmount={setFilteredAmount}
        percentageCat={percentageCat}
      />
      {isValidBudget && (
        <>
          <main>
            <Filter 
            filter = {filter}
            setFilter = {setFilter}
            />
            <ListExpenses
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses} 
            />
          </main>  
          <div className="new-expense">
            <img 
              src={NewExpenseIcon} 
              alt="New expense Icon" 
              onClick={handleNewExpense}
              />
          </div>
        </>
      )}
      {modal && <Modal 
                setModal={setModal}
                animateModal={animateModal}
                setAnimateModal={setAnimateModal}
                saveExpense={saveExpense}
                editExpense={editExpense}
                setEditExpense={setEditExpense}
              />}
    </div>
  )
}

export default App
