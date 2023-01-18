import { useState } from 'react'
import './App.css';

function App() {
  // this is how state is set and changed
  // const [state, setState] = useState('defaultState')
  let [taco, setTaco] = useState(3)
  let [person, setPerson] = useState({
    name: 'Gabe',
    favFood: '🍔'
  })
  let [array, setArray] = useState([0, '1', 'two', 3, 4])

  function addTaco() {
    setTaco(taco + 1)
  }

  function addToArray() {
    let arrayInput = document.getElementById('favFood')
    let newItem = arrayInput.value
    setArray(...array, newItem)
  }
  
  return (

    <>
      <div className="App">
      <p> {person.name}, the {person.favFood} loving heathen has {taco} tacos </p>
      <button onClick={addTaco}> One more taco por favor </button>

      <p>Contents of array:</p>
      <ul>
        {array.map((item, idx) => {
          return (<li key={idx}>
            {item}
          </li>)
        })}
      </ul>
      </div>


      <form>
        <label htmlFor="name">Person's name:</label>

        <input
        id="name"
        type="text"
        placeholder="put ya name heah"
        onChange={e => setPerson({...person, name: e.target.value})}
        />

        <label htmlFor="favFood"> Fav Food?</label>

        <input 
        id="favFood"
        type="text"
        placeholder="put ya food heah"
        onChange={e => setPerson({...person, favFood: e.target.value})}
        />
      </form>
      
    </>
    
  );
}

export default App;
