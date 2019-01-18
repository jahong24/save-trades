import React from "react";

// Input is props
export default ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        className="form-control"
        {...input}
        type={type}
        style={{ marginBottom: "5px" }}
      />
      <div className="text-danger" style={{ marginBottom: "20px" }}>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
);
