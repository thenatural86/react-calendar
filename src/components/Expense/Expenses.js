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
        <ExpenseItem
          id={expenses[0].id}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          id={expenses[1].id}
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          id={expenses[2].id}
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          id={expenses[3].id}
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </div>
    </div>
  )
}

export default Expenses
