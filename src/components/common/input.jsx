import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          type="text"
          className="form-control"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.error && (
          <div className="alert alert-danger">{this.props.error}</div>
        )}{" "}
      </div>
    );
  }
}

export default Input;
