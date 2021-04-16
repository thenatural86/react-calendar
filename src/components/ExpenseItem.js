import React, { useState } from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
  const [item, setItem] = useState('Food')
  const [amount, setAmount] = useState('12.99')

  return (
    <div className='expense-item'>
      <div>April 16th, 2021</div>
      <div className='expense-item__description'>
        <h2>{item}</h2>
        <div className='expense-item__price'>${parseFloat(amount)}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
