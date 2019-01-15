import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import TradeField from "./TradeField";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

class TradeForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={TradeField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Save Order</h1>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <div className="form-group">
            <label>Type</label>
            <div>
              <Field className="form-control" name="type" component="select">
                <option />
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </Field>
            </div>
          </div>
          <Link to="/" className="btn btn-danger btn-lg">
            Cancel
          </Link>
          <button
            onClick={() =>
              this.props.submitTrade(this.props.formValues, this.props.history)
            }
            className="btn btn-primary btn-lg float-right"
          >
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Field Required";
    }
  });

  return errors;
}

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
