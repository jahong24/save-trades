import React from "react";

const QUOTE_URL = "https://finance.yahoo.com/quote/";

const TradeCard = ({ trades }) => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-header float-left">
        <div className="float-left">
          <h1 className="card-title">{trades.symbol}</h1>
        </div>
        <div className="float-right">
          <h6 className="card-title text-muted">{trades.id}</h6>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2">Action: {trades.action}</h6>
        <h6 className="card-subtitle mb-2">Quantity: {trades.quantity}</h6>
        <h6 className="card-subtitle mb-2">Price: {trades.price}</h6>
        <p className="card-text text-muted">Created: {trades.created}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${QUOTE_URL}${trades.symbol}`}
          className="btn btn-success"
        >
          Check Quote
        </a>
        <button className="btn btn-secondary float-right">Delete</button>
      </div>
    </div>
  );
};

export default TradeCard;
