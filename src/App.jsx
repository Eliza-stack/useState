import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    setCount1(count1 + 1);
  }

  return (
    <>
    <h1>Метод 1</h1>
    <h2> лайк: {count}</h2>
    <button onClick={()=> setCount(count+1)}>+1</button>

    <h1>Метод 2</h1>
    <h2> лайк: {count1}</h2>
    <button onClick={increment}>+1</button>
      
      
    </>
  )
}

export default App
