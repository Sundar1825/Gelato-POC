import React from 'react';
import { useSelector } from 'react-redux';

const Taskhistory = () => {
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
      <h1>Task Count {task_counter} </h1>
    </div>
  );
};

export default Taskhistory;
