import {formatDate} from '../helpers'
import SavingsIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import MiscIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubsIcon from '../img/icono_suscripciones.svg'
import TranportIcon from '../img/icono_transporte.svg'

const dictionaryIcon = {
    savings  : SavingsIcon,
    food : FoodIcon,
    house : HouseIcon,
    leisure : LeisureIcon,
    health : HealthIcon,
    transport : TranportIcon,
    subscriptions : SubsIcon,
    misc : MiscIcon
}


const Expense = ({expense}) => {
    const {category, name, amount, date, id} = expense
  return (
    <div className="expense shadow">
        <div className="content-expense">
            <img 
            src={dictionaryIcon[category]} 
            alt="Icono Gasto" />
            <div className="description-expense">
                <p className="category">{category}</p>
                <p className="name-expense">{name}</p>
                <p className="date-expense">
                    Added: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
        </div>
        <p className="amount-expense">${amount}</p>
    </div>
    
  )
}

export default Expense