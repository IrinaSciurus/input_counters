import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputCount from './InputCount';
import CounterList from './CounterList';
import './App.css';

function App() {
    const [list, setList] = useState([
        {id: uuidv4(), value: 1, color: 'blue'},
        {id: uuidv4(), value: 2, color: 'red'},
        {id: uuidv4(), value: 3, color: 'green'}
    ])

  return (
    <div>
      <h5>Counter List</h5>
      <InputCount />
        {list.map((el) =>
                <CounterList
                    key={el.id}
                    value={el.value}
                    color={el.color}
        />
            )}
    </div>
  )
}

export default App;
