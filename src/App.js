import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Lenovo Pro 16',
      date: new Date(2021, 6, 12),
      amout: 950,
    },
    {
      id: 'e2',
      title: 'LG Monitor 27 inch',
      date: new Date(2021, 8, 15),
      amout: 220,
    },
    {
      id: 'e3',
      title: 'Keychron K6',
      date: new Date(2021, 7, 30),
      amout: 120,
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
