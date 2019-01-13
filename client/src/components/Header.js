import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    term: ""
  };

  onInputChange = term => {
    this.setState({ term });
  };

  clearSearchTerm = () => {
    this.setState({ term: "" });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" onClick={this.clearSearchTerm}>
          Stocks App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                POST A New Trade
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DELETE All Trades
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search By UserId"
              aria-label="Search"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />

            <Link
              className="btn btn-outline-success my-2 my-sm-0"
              to={`/${this.state.term}`}
            >
              Search
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
