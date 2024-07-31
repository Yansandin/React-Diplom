let nextTaskId = 0;

export const addTask = name => ({
  type: 'ADD_TASK',
  payload: {
    id: ++nextTaskId,
    name
  }
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  payload: id
});

export const toggleTask = id => ({
  type: 'TOGGLE_TASK',
  payload: id
});
