import React from 'react';
import {increment, decrement} from '../actions/';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

function Newtask() {

  const dispatch = useDispatch();
  const task_counter = useSelector(state => state.counterReducer);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      {/* <h1>Page for New Task</h1> */}
      
      <form>
        <input name = "Execution address" placeholder="Execution address" type="text"></input> <br></br>
        <input placeholder="Function to be automated" type="text"></input> <br></br>
        <input placeholder="Resolver address" type="text"></input> <br></br>
        <input placeholder="Function to be called at the resolver (to check task status)" type="text"></input> <br></br>
        <button onClick={()=>dispatch(increment())}>Add Task</button>
        <button onClick={()=>dispatch(decrement())}>Delete Task</button>
        <h>Counter {task_counter}</h>
      </form>
    </div>
  );
};

export default Newtask;
