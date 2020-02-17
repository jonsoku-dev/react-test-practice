import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Signup = ({ handleSubmit, history, signup, errorMessage }) => {
  const onSubmit = formProps => {
    signup(formProps, () => {
      history.push("/feature");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
};

const mapStateToProps = ({ auth }) => {
  return { errorMessage: auth.errorMessage };
};

// compose 여러개의 HOC를 씌워줄때 유용하다.
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
