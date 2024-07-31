import {configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './reducers';
import { fetchTasks } from './redux/actions';

const store = configureStore(tasksReducer, applyMiddleware(thunk));

export const fetchTasks = () => {
  return dispatch => {
    fetch('https://api.example.com/tasks')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_TASKS', payload: data });
      });
  };
};

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;

