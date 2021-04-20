import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          startEditingHandler={startEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
