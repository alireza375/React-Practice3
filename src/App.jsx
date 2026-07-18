import './App.css'
import Bottles from './components/Bottles/Bottles'
import Header from './components/Header/Header'
import Watch from './components/Watch/Watch'

function App() {

  const watches = [
    {id: 1, name: 'Apple', price: 200},
    {id: 2, name: 'Titan', price: 300},
    {id: 3, name: 'Casio', price: 500},
    {id: 4, name: 'Samsu', price: 800},
  ]

  return (
    <>
      <Header />
      <Bottles />
      {
        watches.map( watch => <Watch key={watch.id} watch={watch} />)
      }

    </>
  )
}

export default App
