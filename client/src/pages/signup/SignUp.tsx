import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg border shadow-md bg-blue-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-zinc-500">
          Sign Up &nbsp;
          <span className="text-amber-500">My Chat App</span>
        </h1>

        <form>
          {/* Fullname */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-amber-500">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-amber-500">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-amber-500">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-amber-500">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Gender Checkbox */}

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
