const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login Here &nbsp;
          <span className="text-emerald-500">My Chat App</span>
        </h1>

        <form>
          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-emerald-500">
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
              <span className="text-base label-text text-emerald-500">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
            />
          </div>
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
