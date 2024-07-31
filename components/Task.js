import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {task.name}
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
