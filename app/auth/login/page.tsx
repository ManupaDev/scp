import LogInForm from "./components/log-in-form";

function LogIn() {
  return (
    <div className="px-4 font-sans py-4">
      <h1 className=" font-bold text-3xl text-center">Welcome To SCP</h1>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <LogInForm/>
      </div>
    </div>
  );
}

export default LogIn;
