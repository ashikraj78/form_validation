import React from "react";

let emailValidationRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Formik extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {
        email: "",
        password: "",
      },
      error: {
        email: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let { name, value } = event.target;
    let error = this.state.error;
    switch (name) {
      case "email":
        error.email = emailValidationRegex.test(value)
          ? ""
          : "*Email is not valid";
        break;
      case "password":
        error.password =
          value.length < 4 ? "*Password must be greater than 4 character" : "";
        break;
      default:
        break;
    }

    this.setState({ value: { [name]: value } });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        {this.props.children(
          this.state.value,
          this.state.error,
          this.handleChange,
          this.handleSubmit
        )}
      </div>
    );
  }
}
export default Formik;
