import React, { useState } from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
  const [item, setItem] = useState('Food')
  const [amount, setAmount] = useState('12.99')
  const date = new Date(2021, 3, 16)

  return (
    <div className='expense-item'>
      <div>{date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{item}</h2>
        <div className='expense-item__price'>${parseFloat(amount)}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
