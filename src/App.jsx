import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/modal'
import {getId} from './helpers'
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(()=> {
      setAnimateModal(true)
    },500)
  }

  const saveExpense = expense =>{
    expense.id = getId()
    setExpenses([...expenses, expense])
    
    setAnimateModal(false)
    setTimeout(()=> {
      setModal(false)
    },500)
  }

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="new-expense">
          <img 
            src={NewExpenseIcon} 
            alt="New expense Icon" 
            onClick={handleNewExpense}
            />
        </div>
      )}
      {modal && <Modal 
                setModal={setModal}
                animateModal={animateModal}
                setAnimateModal={setAnimateModal}
                saveExpense={saveExpense}
              />}
    </div>
  )
}

export default App
