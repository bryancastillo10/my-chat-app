import { FieldInput, Heading } from "../../components";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <Heading
          isSignUpPage={false}
          header="Welcome"
          subHeader="Log In"
        />
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
          
          <a
            href="#"
            className="text-sm hover:underline hover:text-green-400 mt-2 inline-block"
          >
            "Don&apos;t have an account?"
          </a>

          <button className="btn btn-block btn-sm mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
