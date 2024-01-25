import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {
    const hideModal = () => {
        
        setAnimateModal(false)

        setTimeout(()=> {
          setModal(false)
        },500)
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
        <form className={`form ${animateModal ? 'animate' : 'close'}`}>
          <legend>New expense</legend>

          <div className="field">
            <label htmlFor="name">Expense</label>

            <input 
              id='name'
              type="text"
              placeholder='Add expense' />
          </div>
          <div className="field">
            <label htmlFor="amount">Amount</label>
            
            <input 
              id='amount'
              type="number"
              placeholder='Add amount' 
            />
          </div>

          <div className="field">
            <label htmlFor="name">Category</label>
            <select id="category">
              <option value="">-- Select one --</option>
              <option value="savings">Savings</option>
              <option value="food">Food</option>
              <option value="house">House</option>
              <option value="leisure">Leisure</option>
              <option value="health">Health</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="misc">Miscellaneous</option>
            </select>
            <input type="submit" value='Add expense' />
          </div>
        </form>
    </div>
  )
}

export default Modal