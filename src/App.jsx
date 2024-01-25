import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/modal'
import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)
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
      {modal && <Modal setModal={setModal}/>}
    </div>
  )
}

export default App
