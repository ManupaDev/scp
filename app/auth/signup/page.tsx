import SignUpForm from "./components/sign-up-form";

function SignUp() {
  return (
    <div className="px-4 font-sans py-4">
      <h1 className=" font-bold text-3xl text-center">Welcome To SCP</h1>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <SignUpForm/>
      </div>
    </div>
  );
}

export default SignUp;
