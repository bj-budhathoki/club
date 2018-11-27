import React, { Component } from "react";
import Fade from "react-reveal";
import FormFields from "../../ui/formFields";
import { validate } from "../../ui/misc";
import { firebasePromotions } from "../../../firebase";
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
      firebasePromotions
        .orderByChild("email")
        .equalTo(newData.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(newData);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
    } else {
      this.setState({ formError: true });
    }
  };
  resetFormSuccess = type => {
    const newFormData = { ...this.state.formData };
    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formData: newFormData,
      formSuccess: type ? "Congratulations" : "Aleady on database"
    });
    setTimeout(() => {
      this.setState({ formSuccess: "" });
    }, 1000);
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
              <div className="success_message">{this.state.formSuccess}</div>
              <button className="" onClick={event => this.submitForm(event)}>
                Enroll
              </button>
              <div className="enroll_discl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                aspernatur dolor nobis quos esse ullam vitae reprehenderit
                molestias exercitationem porro?
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
