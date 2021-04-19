import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const yearFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  return (
    <div>
      <div className='expenses'>
        <ExpensesFilter
          onYearFilter={yearFilterHandler}
          selected={filteredYear}
        />

        {expenses.map((expense) => {
          console.log(expense)
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Expenses
