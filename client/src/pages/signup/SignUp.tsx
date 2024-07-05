
import {  Heading } from "../../components";
import SignUpForm from "./SignUpForm";
import SpaceLaunch from "../../assets/space-launch.svg";
const SignUp = () => {
 

  return (
    <div className="flex justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-10 glassmorphism">
          <Heading isSignUpPage header="Get Started" subHeader="Register Here" />
        <div className="flex flex-col md:flex-row justify-center spacing-x-8 gap-10  items-center">
        <div className="size-60  flex place-self-center">
          <img src={SpaceLaunch} alt="main-logo" />
        </div>
        <div className="">
          <SignUpForm />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
