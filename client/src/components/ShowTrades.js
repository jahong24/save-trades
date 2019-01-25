import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import TradeCard from "./TradeCard";
import { Link } from "react-router-dom";

class ShowTrades extends Component {
  componentDidMount() {
    this.props.fetchTrades();
  }

  renderTrades(trades) {
    return _.map(this.props.trades, trade => {
      return (
        <div>
          <TradeCard trades={trade} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="card-deck">{this.renderTrades(this.props.trades)}</div>
        <div className="float-right">
          <Link to="/trades/new">
            <i
              className="material-icons"
              style={{ fontSize: "60px", color: "#FB8C00" }}
            >
              add_box
            </i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { trades: state.trades };
};

export default connect(
  mapStateToProps,
  actions
)(ShowTrades);
