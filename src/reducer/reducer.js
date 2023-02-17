import { ADD_TASK, COMPLETE, DELETE, EDIT_TASK, FILTER } from "./actionsTypes";

const init = {
  todosList: [
    { id: Math.random(), task: "whatever1", isDone: true },
    {
      id: Math.random(),
      task: ",nxc<!lvcq%MXLSMC.DMCX§. ?SDMXW?C.§/.SD%L?Cdklùnc;,qdùXC?skvc,;",
      isDone: true,
    },
    { id: Math.random(), task: "whatever3", isDone: true },
  ],
  filter: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE:
      return {
        ...state,
        todosList: state.todosList.filter((el) => el.id !== payload),
      };
    case COMPLETE:
      return {
        ...state,
        todosList: state.todosList.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        todosList: [...state.todosList, payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        todosList: state.todosList.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    case FILTER:
      return { ...state, filter: !state.filter };
    default:
      return state;
  }
};
export default reducer;
