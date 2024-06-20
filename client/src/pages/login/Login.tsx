import { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FieldInput, Heading } from "../../components";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLoginData({ ...loginData, [e.target.id]: e.target.value });
    },
    [loginData]
  );

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    },
    [loginData]
  );

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <Heading isSignUpPage={false} header="Welcome to" subHeader="Log In" />
        <form>
          {/* Username */}
          <FieldInput
            id="username"
            value={loginData.username}
            onChange={onChangeInput}
            isSignUpPage={false}
            textLabel="Username"
            type="text"
            placeholder="Enter your username"
          />

          {/* Password */}
          <FieldInput
            id="password"
            value={loginData.password}
            onChange={onChangeInput}
            isSignUpPage={false}
            textLabel="Password"
            type="password"
            placeholder="Enter your password"
          />

          <p className="my-4 text-emerald-400">
            Don&apos;t have an account yet? &nbsp;
            <Link
              to="/signup"
              className="text-link text-sm before:bg-emerald-400"
            >
              Sign Up
            </Link>
          </p>

          <button
            onClick={handleSubmit}
            className="btn btn-block btn-sm mt-2 bg-emerald-600 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
