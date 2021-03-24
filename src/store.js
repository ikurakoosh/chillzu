// store.js
import React, {createContext, useReducer} from 'react';

const initialState = { habits: [{id:"1", name:"skincare", completed: false, description: "description",},
{id:"2", name:"skincare2", completed: false, description: "description",},
{id:"3", name:"skincare3", completed: false, description: "description",},
{id:"4", name:"skincare4", completed: false, description: "description",},
{id:"5", name:"skincare5", completed: false, description: "description",},
{id:"6", name:"skincare6", completed: false, description: "description",},]};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = initialState;
    switch(action.type) {
      case 'updateHabitName':
        newState.habits[action.HabitIndex].name= action.HabitValue;
        return newState;
        case 'deleteHabit':
        newState.habits.splice(action.HabitIndex, 1)
        return newState;
        case 'addHabit':
          newState.habits.push({id: newState.habits.length, name: "", completed: false})
          return newState;
        case 'completed':  
          newState.habits.forEach((habit, index)=>{
            if (habit.id === action.habitID) {
              newState.habits[index].completed = true
            }
          })
          return newState;
          case 'updateDescription':
            newState.habits[action.HabitIndex].description= action.HabitValue;
            return newState; 

          case 'reset':  
          newState.habits.forEach((habit, index)=>{
            if (habit.id === action.habitID) {
              newState.habits[index].completed = false
            }
          })
          return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }