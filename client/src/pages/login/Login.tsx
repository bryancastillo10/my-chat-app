import {  Heading } from "../../components";
import LoginForm from "./LoginForm";
import SpaceChat from "../../assets/space-chat.svg";

const Login = () => {
  

  return (
    <div className="flex justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-10
        rounded-lg shadow-md glassmorphism">
          <Heading isSignUpPage={false} header="Welcome to" subHeader="Log In Here" />
        <div className="flex flex-col md:flex-row justify-center spacing-x-8 gap-10  items-center">
        <div className="size-60  flex place-self-center">
          <img src={SpaceChat} alt="main-logo" />
        </div>
        <div className="">
          <LoginForm />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
