import axios from "axios";
import { FETCH_TRADES, FETCH_TRADES_ID } from "../actions/types";

export const fetchTrades = () => async dispatch => {
  const res = await axios.get("/trades");
  dispatch({ type: FETCH_TRADES, payload: res.data });
};

export const fetchTradesId = userId => async dispatch => {
  const res = await axios.get(`/trades/users/${userId}`);
  dispatch({ type: FETCH_TRADES_ID, payload: res.data });
};
