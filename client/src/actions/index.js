import axios from "axios";
import { FETCH_TRADES } from "./types";

export const fetchTrades = () => async dispatch => {
  const res = await axios.get("/trades");
  dispatch({ type: FETCH_TRADES, payload: res.data });
};
