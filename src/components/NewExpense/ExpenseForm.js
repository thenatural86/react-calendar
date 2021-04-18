import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate,
  })

  const titleChangeHandler = (e) => {
    setUserInput({ ...userInput, enteredTitle: e.target.value })
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount({ ...userInput, enteredAmount: e.target.value })
  }
  const dateChangeHandler = (e) => {
    setEnteredDate({...userInput,enteredDate:e.target.value)
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
            name='title'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
            name='amount'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='3000-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
            name='date'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
