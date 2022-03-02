import React, { Component } from "react";
import Input from "./common/input";
class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is empty";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is empty";
    }
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account, errors });
  };

  validate = () => {
    let errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required.";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // api call
    console.log("Submitted");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          value={this.state.account.username}
          label="Username"
          onChange={this.handleChange}
          error={this.state.errors.username}
        />
        <Input
          name="password"
          value={this.state.account.password}
          label="Password"
          onChange={this.handleChange}
          error={this.state.errors.password}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
