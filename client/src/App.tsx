import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
    <div className="p-4 h-screen flex  justify-center items-center">
      <Login />
      <SignUp />
    </div>
  );
};

export default App;
