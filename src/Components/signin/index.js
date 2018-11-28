import React, { Component } from "react";
import { validate } from "../ui/misc";
import FormFields from "../ui/formFields";
import { firebase } from "../../firebase";
export class index extends Component {
  state = {
    forError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };
  submitForm = event => {
    event.preventDefault();
    let newData = {};
    let formIsValid = true;
    for (let key in this.state.formData) {
      newData[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(newData.email, newData.password)
        .then(() => this.props.history.push("/dashboard"))
        .catch(error => this.setState({ formError: true }));
    } else {
      this.setState({ formError: true });
    }
  };
  handleForm = element => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...this.state.formData[element.id] };
    newElement.value = element.event.target.value;
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormData[element.id] = newElement;
    this.setState({ formData: newFormData, formError: false });
  };
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "10rem" }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormFields
              id={"email"}
              formdata={this.state.formData.email}
              change={this.handleForm}
            />
            <FormFields
              id={"password"}
              formdata={this.state.formData.password}
              change={this.handleForm}
            />
            {this.state.formError && (
              <div className="error_label">somthing is wrong</div>
            )}
            <button className="" onClick={event => this.submitForm(event)}>
              log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default index;
