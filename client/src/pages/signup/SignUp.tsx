import { useState, useCallback, ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";

import GenderCheckbox from "./GenderCheckbox";
import { FieldInput, Heading } from "../../components";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const {  signUp } = useSignUp();
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSignUpData({ ...signUpData, [e.target.id]: e.target.value });
    },
    [signUpData]
  );

  const onChangeCheckBox = useCallback(
    (gender: string) => {
      setSignUpData({ ...signUpData, gender });
    },
    [signUpData]
  );

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      await signUp(signUpData);
    },
    [signUp, signUpData]
  );

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <Heading isSignUpPage header="Get Started" subHeader="Register Here" />

        <form>
          {/* Fullname */}
          <FieldInput
            id="fullName"
            value={signUpData.fullName}
            onChange={onChangeInput}
            isSignUpPage
            textLabel="Full Name"
            type="text"
            placeholder="Enter your full name"
          />

          {/* Username */}
          <FieldInput
            id="username"
            value={signUpData.username}
            onChange={onChangeInput}
            isSignUpPage
            textLabel="Username"
            type="text"
            placeholder="Enter your username"
          />

          {/* Password */}
          <FieldInput
            id="password"
            value={signUpData.password}
            onChange={onChangeInput}
            isSignUpPage
            textLabel="Password"
            type="password"
            placeholder="Enter your password"
          />

          {/* Confirm Password */}
          <FieldInput
            id="confirmPassword"
            value={signUpData.confirmPassword}
            onChange={onChangeInput}
            isSignUpPage
            textLabel="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
          />

          {/* Gender Checkbox */}
          <h1 className="mt-2 indent-2 text-amber-500">Gender</h1>
          <GenderCheckbox
            value={signUpData.gender}
            onChange={onChangeCheckBox}
          />

          <p className="my-4 text-amber-500">
            Already have an account? &nbsp;
            <Link to="/login" className="text-link text-sm before:bg-amber-500">
              Login
            </Link>
          </p>
          <div className="">
            <button
              onClick={handleSubmit}
              className="btn btn-block btn-sm mt-2 bg-amber-600 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
