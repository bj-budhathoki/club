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
      },
      name: {}
    }
  };
  submitForm = () => {};
  handleForm = element => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...this.state.formData[element.id] };
    newElement.value = element.event.target.value;
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormData[element.id] = newElement;
    console.log(newFormData);
    this.setState({ formData: newFormData });
  };
  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={this.submitForm}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormFields
                id={"email"}
                fromData={this.state.formData.email}
                change={this.handleForm}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
