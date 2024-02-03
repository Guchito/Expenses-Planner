import {useState, useEffect} from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filter shadow container'>
        <form>
            <div className="field">
                <label> Filter expenses </label>
                <select 
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    >
                    <option value="">All</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="transport">Transport</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="miscellaneous">Miscellaneous</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filter