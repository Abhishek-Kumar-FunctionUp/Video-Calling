import { actions } from "./actions";
import { combineReducers } from "redux";

const dataReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.EMAIL_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ dataReducer });
