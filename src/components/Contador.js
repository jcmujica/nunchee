import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCounterAction, addToCounterAction, subtractFromCounterAction } from '../reducers/reducer';
import Total from './Total';


function Contador() {
  const counters = useSelector((state) => state.counters);
  const addCounter = useDispatch((counter) => addCounterAction(counter));
  const addToCounter = useDispatch((content) => addToCounterAction(content));
  const subtractToCounter = useDispatch((content) => subtractFromCounterAction(content));
  const [values, setValues] = useState({});

  const handleAddCounter = () => {
    addCounter({
      type: 'ADD_COUNTER',
      payload: { value: 0, id: counters.length + 1 }
    })
  };

  const handleIncrement = (id) => {
    setValues({
      ...values,
      [id]: ''
    });
    addToCounter({
      type: 'ADD_COUNT',
      payload: { id, value: parseInt(values[id]) }
    })
  };

  const handleSubtract = (id) => {
    setValues({
      ...values,
      [id]: ''
    });
    subtractToCounter({
      type: 'SUBTRACT_COUNT',
      payload: { id, value: parseInt(values[id]) }
    })
  };

  const handleInput = (e) => {
    let { name, value, validity } = e.target;
    if (validity.valid) {
      setValues({
        ...values,
        [name]: value
      });
    };
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={handleAddCounter}>Añadir Contador</button>
      <Total />
      {counters.map((counter) => (
        <div key={counter.id} className="counter__elements">
          <button className="counter__button-operation" onClick={() => handleSubtract(counter.id)}>-</button>
          <div className="counter__display">
            <span>{counter.value}</span>
            <input type="text"
              name={counter.id}
              value={values[counter.id] || ''}
              onChange={(e) => handleInput(e)}
              pattern="[0-9]*"
            />
          </div>
          <button className="counter__button-operation" onClick={() => handleIncrement(counter.id)}>+</button>
        </div>
      ))}
    </div>
  )
}

export default Contador
