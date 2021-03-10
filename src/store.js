// store.js
import React, {createContext, useReducer} from 'react';

const initialState = { habits: [{id:"1", name:"skincare", completed: false},{id:"2", name:"goal 2", completed: false},{id:"3", name:"goal 3", completed: false},{id:"4", name:"goal 4", completed: false}]};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = initialState;
    switch(action.type) {
      case 'updateHabit':
        newState.habits[action.HabitIndex].name= action.HabitValue;
        return newState;
        case 'deleteHabit':
        newState.habits.splice(action.HabitIndex, 1)
        return newState;
        case 'addHabit':
          newState.habits.push({id: newState.habits.length, name: "", completed: false})
          return newState;
        case 'completed':
          newState.habits[action.HabitIndex].completed = true
          return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }