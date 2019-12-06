import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account </h2>
      <span> Sign up with email and password </span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={handleChange}
        />
        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
