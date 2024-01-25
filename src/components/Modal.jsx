import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {
    const hideModal = () => {
        setModal(false)
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
    </div>
  )
}

export default Modal