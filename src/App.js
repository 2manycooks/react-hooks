import { useState, useEffect } from 'react'
import axios from 'axios'
import IntervalTicker from './IntervalTicker';
import './App.css';

function App() {
  let [count, setCount] = useState(1)
  let [person, setPerson] = useState({name: 'Gabe'})
  let [pokeImg, setPokeImg] = useState(null)
  let [pokeId, setPokeId] = useState(1)
  let [message, setMessage] = useState('Hello world')

  const increaseCount = () => {
    setCount(count + 1)
  }

  const nextPoke = () => {
    setPokeId(pokeId + 1)
  }

  const changeMessage = (e) => {
    setMessage(e.target.value)
  }

  //useEffect has several parts to it.
  //first is the functionality we want our effect to have on first mount of the component.
  useEffect(() => {
    console.log('useEffect 1 running')
    document.title = `Hello, ${person.name}`

    return() => {
      console.log('useEffect 1 unmounting')
    }
  },)
  // second is the dependency array shown above. After the first render, useEffect will look for changes in whatever is contained in the dependency array to update again.

  useEffect(() => {
    // get picture url from api
    // store picture url in state (AKA pokeImg)
    console.log('useEffect 2 running')
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(response => {
      setPokeImg(response.data.sprites.front_default)
    })
    .catch(err => {
      console.log(err)
    })
  }, [pokeId])

  
  return (

    <>
      <h1>This component has rendered: {count + pokeId - 1} times</h1>
      <button onClick={increaseCount}> Increase Count </button>
      <h2>The person is: {person.name}</h2>
      <img src={pokeImg} alt="poke" />
      <button onClick={nextPoke}> Change pokemon!</button>



      <form>
        <h1>Give a message for the console:</h1>
        <input type="text" value={message} onChange={changeMessage}/>
      </form>

      <IntervalTicker 
      message={message}
      />
    </>
    
  );
}

export default App;
