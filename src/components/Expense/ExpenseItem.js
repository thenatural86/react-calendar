import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date, id }) => {
  const clickHandler = (id) => {
    console.log("yolo'd", id)
  }

  return (
    <div className='expense-item' id={id}>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={() => clickHandler(id)}>Change Title</button>
    </div>
  )
}

export default ExpenseItem
