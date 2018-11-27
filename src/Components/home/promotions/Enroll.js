import React, { Component } from "react";
import Fade from "react-reveal";
import FormFields from "../../ui/formFields";
import { validate } from "../../ui/misc";
export class Enroll extends Component {
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
      console.log(newData);
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
    console.log(newFormData);
    this.setState({ formData: newFormData, formError: false });
  };
  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormFields
                id={"email"}
                formdata={this.state.formData.email}
                change={this.handleForm}
              />
              {this.state.formError && (
                <div className="error_label">somthing is wrong</div>
              )}
              <button className="" onClick={event => this.submitForm(event)}>
                Enroll
              </button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
