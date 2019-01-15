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

export const submitTrade = (values, history) => async dispatch => {
  const req = {
    id: values.values.tradeId,
    type: values.values.type,
    user: {
      id: parseInt(values.values.userId),
      name: values.values.userName
    },
    symbol: values.values.symbol,
    shares: values.values.shares,
    price: values.values.price
  };
  const res = await axios.post("/api/trades", req);
  history.push("/");
  return {};
};
