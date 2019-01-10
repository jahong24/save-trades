import { FETCH_TRADES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TRADES:
      return action.payload;
    default:
      return state;
  }
}
