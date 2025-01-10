import { useState, useEffect } from 'react'
import Msg from './Msg'
import CloseBtn from '../img/cerrar.svg'


const Modal = ({
    setModal, 
    animateModal, 
    setAnimateModal, 
    saveExpense,
    editExpense,
    setEditExpense
  }) => {
  const [msg, setMsg] = useState('')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] =useState('')
  
  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      setName(editExpense.name)
      setAmount(editExpense.amount)
      setCategory(editExpense.category)
      setId(editExpense.id)
      setDate(editExpense.date)
    }
  },[])

  const hideModal = () => {
      
      setAnimateModal(false)
      setEditExpense({})
      setTimeout(()=> {
        setModal(false)
      },500)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if ([name, amount, category].includes('')){
      setMsg('All fields are required')

      setTimeout(()=> {
        setMsg('')
      },3000)
      return
    }
    saveExpense({name, amount, category, id, date})
  }

  return (
    <div className="modal">
        <div className="close-modal">
            <img 
            src={CloseBtn} 
            alt="Close modal"
            onClick={hideModal}
            />
        </div>
        <form 
          onSubmit={handleSubmit}
          className={`form ${animateModal ? 'animate' : 'close'}`}>
          <legend>{editExpense.name ? 'Edit expense' : 'New expense'}</legend>
          {msg && <Msg tipo='error'>{msg}</Msg>}

          <div className="field">
            <label htmlFor="name">Expense</label>

            <input 
              id='name'
              type="text"
              placeholder='Add expense'
              value={name} 
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="amount">Amount</label>
            
            <input 
              id='amount'
              type="number"
              placeholder='Add amount'
              value={amount > 0 ? amount : ''} 
              onChange={e => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label htmlFor="name">Category</label>
            <select 
              id="category"
              value={category} 
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">-- Select one --</option>
              <option value="savings">Savings</option>
              <option value="food">Food</option>
              <option value="house">House</option>
              <option value="leisure">Leisure</option>
              <option value="health">Health</option>
              <option value="transport">Transport</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="misc">Miscellaneous</option>
            </select>
            <input type="submit" value={editExpense.name ? 'Save' : 'Add new expense'} />
          </div>
        </form>
    </div>
  )
}

export default Modal