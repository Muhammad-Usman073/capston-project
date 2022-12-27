import { useState } from "react";
import InputForm from "../../form-input/Form-input.component";
import Button from "../../Button/Button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password dosn't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email credentials that u are are using already exist");
      }
      console.log("error found", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };
  return (
    <div className="sign-up-container" >
    <h2>Dont't have an account?</h2>
      <span>Signup with email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Display Name"
          inputOptions={{
            type: "text ",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
        <InputForm
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <InputForm
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <InputForm
          label="Confirm Password"
          inputOptions={{
            type: "password ",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button buttonType={'google'} type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
