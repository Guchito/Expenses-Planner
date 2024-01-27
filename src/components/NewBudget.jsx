import {useState} from 'react'
import { Msg } from './Msg'

export const NewBudget = ({
    budget, 
    setBudget, 
    setIsValidBudget
}) => {
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
        <div className='container-budget shadow'>
            <form onSubmit={handleBudget} className="form">
                <div className="field">
                    <label> Set budget</label>
                <input 
                    type="number"
                    className='new-budget'
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

export default NewBudget