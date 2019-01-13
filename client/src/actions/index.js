import axios from "axios";
import { FETCH_TRADES, FETCH_TRADES_ID, FETCH_ERROR } from "../actions/types";

export const fetchTrades = () => async dispatch => {
  try {
    const res = await axios.get("/api/trades");
    dispatch({ type: FETCH_TRADES, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR });
  }
};

export const fetchTradesId = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/trades/users/${userId}`);
    dispatch({ type: FETCH_TRADES_ID, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR });
  }
};
