import React from "react";

// Input is props
export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        {...input}
        style={{ marginBottom: "5px" }}
      />
      <div className="text-danger" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
