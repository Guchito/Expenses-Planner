import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/modal'
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

  const [editExpense, setEditExpense] =useState({})

  useEffect(()=>{
    if(Object.keys(editExpense).length > 0) {
      setModal(true)

      setTimeout(()=> {
        setAnimateModal(true)
      },500)
    }
  },[editExpense])


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
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <ListExpenses 
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
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
