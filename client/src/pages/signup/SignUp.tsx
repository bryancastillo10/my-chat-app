import GenderCheckbox from "./GenderCheckbox";
import { FieldInput, Heading } from "../../components";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <Heading
          isSignUpPage
          header="Get Started"
          subHeader="Register Here"
        />

        <form>
          {/* Fullname */}
          <FieldInput
            isSignUpPage
            textLabel="Full Name"
            type="text"
            placeholder="Enter your full name"
          />

          {/* Username */}
          <FieldInput
            isSignUpPage
            textLabel="Username"
            type="text"
            placeholder="Enter your username"
          />

          {/* Password */}
            <FieldInput
            isSignUpPage
            textLabel="Password"
            type="password"
            placeholder="Enter your password"
          />

          {/* Confirm Password */}
          <FieldInput
            isSignUpPage
            textLabel="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
          />

          {/* Gender Checkbox */}
          <h1 className="mt-2 indent-2 text-amber-500">Gender</h1>
          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-green-400 mt-2 inline-block"
          >
            "Already have an account?"
          </a>
          <div className="">
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
