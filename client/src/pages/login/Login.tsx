import { FieldInput, Heading } from "../../components";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <Heading isSignUpPage={false} header="Welcome to" subHeader="Log In" />
        <form>
          {/* Username */}
          <FieldInput
            isSignUpPage={false}
            textLabel="Username"
            type="text"
            placeholder="Enter your username"
          />

          {/* Password */}
          <FieldInput
            isSignUpPage={false}
            textLabel="Password"
            type="password"
            placeholder="Enter your password"
          />

          <p className="my-4 text-emerald-400">
            Don&apos;t have an account yet? &nbsp;
            <a href="#" className="text-link text-sm before:bg-emerald-400">
              Sign Up
            </a>
          </p>

          <button className="btn btn-block btn-sm mt-2 bg-emerald-600 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
