import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import "./forms.css";
import { registerUser, login } from "../actions/userActions";
// import {login} from '../actions/auth';
import Input from "./Input";
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "./validators/userValidator";
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { email, password, firstName, lastName } = values;
    const user = { email, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(newUser => {
        console.log("user registered", newUser);
        return this.props.dispatch(login(email, password));
      })
      .then(user => console.log("user logged in", user))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <Field
          component={Input}
          type="text"
          name="firstName"
          label="First Name"
        />
        <Field
          component={Input}
          type="text"
          name="lastName"
          label="Last Name"
        />
        <Field
          component={Input}
          type="text"
          name="email"
          validate={[required, nonEmpty, isTrimmed]}
          label="Email"
        />
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
          label="Password"
        />
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
          label="Confirm Password"
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);