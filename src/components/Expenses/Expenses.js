import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amout={props.items[0].amout}
      />

      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amout={props.items[1].amout}
      />

      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amout={props.items[2].amout}
      />
    </Card>
  )
}

export default Expenses
