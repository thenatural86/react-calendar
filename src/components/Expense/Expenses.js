import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const yearFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  let expensesContent = <p>No expenses found :(</p>

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      )
    })
  }

  return (
    <div>
      <div className='expenses'>
        <ExpensesFilter
          onYearFilter={yearFilterHandler}
          selected={filteredYear}
          expenses={expenses}
        />
        {expensesContent}
      </div>
    </div>
  )
}

export default Expenses
