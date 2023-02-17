import { ADD_TASK, COMPLETE, DELETE, EDIT_TASK, FILTER } from "./actionsTypes";

export const del = (taskId) => {
  return {
    type: DELETE,
    payload: taskId,
  };
};
export const comp = (taskId) => {
  return {
    type: COMPLETE,
    payload: taskId,
  };
};
export const adde = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const edit = (editedTask) => {
  return {
    type: EDIT_TASK,
    payload: editedTask,
  };
};
export const filt = () => {
  return {
    type: FILTER,
  };
};
