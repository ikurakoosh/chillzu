// store.js
import React, {createContext, useReducer} from 'react';

const initialState = { habits: [{id:"1", name:"skincare"},{id:"2", name:"goal 2"},{id:"3", name:"goal 3"},{id:"4", name:"goal 4"}]};

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
        console.log(newState.habits)
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }