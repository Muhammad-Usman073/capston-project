import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../CategoryItem/sign-up-form/sign-up-form.component";
const logGoogleMethod = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user);
  console.log(userDocRef);
};


const SignIn = () => {
  return (
    <div>
      <h1>Signing In with google popup</h1>
      <button onClick={logGoogleMethod}>sign In with google popup</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
