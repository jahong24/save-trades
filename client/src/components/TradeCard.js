import React from "react";

const QUOTE_URL = "https://finance.yahoo.com/quote/";

const TradeCard = props => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-header">
        <h4 className="card-title">Id: {props.trades.id}</h4>
        <h5 className="card-subtitle mb-2 text-success">
          Symbol: {props.trades.symbol}
        </h5>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 ">Price: {props.trades.price}</h6>
        <h6 className="card-subtitle mb-2 ">Shares: {props.trades.shares}</h6>
        <p className="card-text text-muted">
          Type: {props.trades.type} <br /> Name: {props.trades.user.name} <br />{" "}
          UserId: {props.trades.user.id}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${QUOTE_URL}${props.trades.symbol}`}
          className="btn btn-primary"
        >
          Check Quote
        </a>
      </div>
    </div>
  );
};

export default TradeCard;
