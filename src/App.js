import React, { Component } from "react";

import "./App.css";

import Formik from "./components/Formik";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Formik>
        {(value, error, handleChange, handleSubmit) => (
          <form className="profile" onSubmit={handleSubmit}>
            <label className="formLabel">
              Email:
              <input
                className="formInput"
                name="email"
                type="email"
                value={value.email}
                onChange={handleChange}
              />
              <p>{error.email}</p>
            </label>
            <label className="formLabel">
              Password:
              <input
                className="formInput"
                name="password"
                type="password"
                value={value.password}
                onChange={handleChange}
              />
              <p>{error.password}</p>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default App;
