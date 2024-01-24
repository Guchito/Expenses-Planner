import {useState} from 'react'
import { Msg } from './Msg'

export const NewBudget = ({budget, setBudget, setIsValidBudget}) => {
    
    const [msg, setMsg] = useState('')
    
    const handleBudget = (e) => {
        e.preventDefault()
        if(!budget || budget < 0 ){
            setMsg('Not a valid budget')
            return
        }
        setMsg('')
        setIsValidBudget(true)

    }

    return (
        <div className='contenedor-presupuesto sombra'>
            <form onSubmit={handleBudget} className="formulario">
                <div className="campo">
                    <label> Set budget</label>
                <input 
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='Add your budget'
                    value={budget}
                    onChange={ e => setBudget(Number(e.target.value))}
                />
                </div>
                <input type="submit" value="Add" />

                {msg && <Msg tipo='error'>{msg}</Msg>}
            </form>
        </div>
    )
}
