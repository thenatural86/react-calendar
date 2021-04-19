import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'

import './Expenses.css'
import ExpensesList from './ExpensesList'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const yearFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  return (
    <div>
      <div className='expenses'>
        <ExpensesFilter
          onYearFilter={yearFilterHandler}
          selected={filteredYear}
          expenses={expenses}
        />
        <ExpensesList expenses={filterExpenses} />
      </div>
    </div>
  )
}

export default Expenses
