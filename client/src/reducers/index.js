import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import { FETCH_TRADES, FETCH_TRADES_ID, FETCH_ERROR } from "../actions/types";

const tradesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRADES:
      return action.payload;
    case FETCH_ERROR:
      return [];
    default:
      return state;
  }
};

const tradesIdReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRADES_ID:
      return action.payload;
    case FETCH_ERROR:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  trades: tradesReducer,
  tradesById: tradesIdReducer,
  form: reduxForm
});
