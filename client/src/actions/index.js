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

export const fetchTradesId = symbol => async dispatch => {
  try {
    const res = await axios.get(`/api/trades/${symbol}`);
    dispatch({ type: FETCH_TRADES_ID, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR });
  }
};

export const submitTrade = (values, history) => async dispatch => {
  const { action, quantity, symbol, price } = values.values;
  const req = {
    action,
    quantity,
    symbol,
    price
  };
  const res = await axios.post("/api/trades", req);
  history.push("/");
  return {};
};
