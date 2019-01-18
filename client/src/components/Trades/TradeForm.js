import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter, Link } from "react-router-dom";
import TradeField from "./TradeField";
import * as actions from "../../actions";

class TradeForm extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Save Order</h1>
        <form
          onSubmit={this.props.handleSubmit(() =>
            this.props.submitTrade(this.props.formValues, this.props.history)
          )}
        >
          <div className="form-group">
            <label>Action</label>
            <div>
              <Field className="form-control" name="action" component="select">
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </Field>
            </div>
            <div className="text-danger" style={{ marginBottom: "20px" }}>
              {this.props.error}
            </div>
          </div>
          <Field
            name="quantity"
            type="number"
            component={TradeField}
            label="Quantity"
          />
          <Field
            name="symbol"
            type="text"
            component={TradeField}
            label="Symbol"
          />
          <Field
            name="price"
            type="number"
            component={TradeField}
            label="Price"
          />
          <Link to="/" className="btn btn-secondary btn-lg">
            Cancel
          </Link>
          <button className="btn btn-success btn-lg float-right">Save</button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.quantity) {
    errors.quantity = "Required";
  }
  if (!values.symbol) {
    errors.symbol = "Requried";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  return errors;
};

function mapStateToProps(state) {
  return { formValues: state.form.tradeForm };
}

TradeForm = connect(
  mapStateToProps,
  actions
)(withRouter(TradeForm));

export default reduxForm({
  validate,
  form: "tradeForm"
})(TradeForm);
