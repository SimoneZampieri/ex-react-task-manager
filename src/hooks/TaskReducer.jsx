// Reducer per la gestione dello stato dei task
// Gestisce tutte le operazioni di modifica dello stato in modo centralizzato
export const TaskReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "REMOVE_TASK":
      return state.filter((task) => task.id != action.payload);
    case "REMOVE_MULTIPLE_TASKS":
      return state.filter((task) => !action.payload.includes(task.id));
    default:
      return state;
  }
};
