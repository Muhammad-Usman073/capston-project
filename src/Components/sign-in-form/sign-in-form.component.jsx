import { useState } from "react";
import InputForm from "../form-input/Form-input.component";
import Button from "../Button/Button.component.jsx";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFields();
    } catch (error) {
      // if (error.code === "auth/wrong-password") {
      //   alert("anni dya password si laa🤬...!");   
      // }
      switch(error.code){
        case 'auth/wrong-password':
          alert("incorrect password,please Enter correct password..!")
          break;
          case "auth/user-not-found":
            alert("user not found, please enter correct email..!")
            break;
            default:
              console.log(error)
      }
    }
    resetFields()
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
