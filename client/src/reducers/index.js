import { combineReducers } from "redux";
import { FETCH_TRADES, FETCH_TRADES_ID } from "../actions/types";

const tradesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRADES:
      return action.payload;
    default:
      return state;
  }
};

const tradesIdReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRADES_ID:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  trades: tradesReducer,
  tradesById: tradesIdReducer
});