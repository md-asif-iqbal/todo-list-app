import React, { useRef } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loading from "../Loading/Loading";
const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  var signInError;
  var logInError;
  
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword, luser, lLoading, lError] =
    useSignInWithEmailAndPassword(auth);

  if (gUser) {
    navigate("/");
  }
  if(loading || lLoading || gLoading){
    return <Loading/>
  }
  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  if (lError || gError) {
    logInError = (
      <p className="text-red-500">
        <small>{lError?.message || gError?.message}</small>
      </p>
    );
  }

  const onSignup = async (data) => {
    await createUserWithEmailAndPassword(data.sEmail, data.sPswd);
    console.log(data);
    navigate("/");
    reset();
  };
  const onLogIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass);
    console.log(email, pass);
    reset();
  };
  if (luser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bodys">
      <div className="main mb-14">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup mb-5">
          <form onSubmit={handleSubmit(onSignup)}>
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="inputs"
              type="text"
              name="name"
              {...register("name")}
              placeholder="User name"
              required
            />
            <input
              className="inputs"
              type="email"
              name="email"
              {...register("sEmail")}
              placeholder="Email"
              required
            />
            <input
              className="inputs"
              type="password"
              name="sPswd"
              placeholder="Password"
              {...register("sPswd")}
              required
            />
            {signInError}

            <button className="buttons">Sign up</button>
          </form>

          <div className="divider text-white">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="bg-blue-500 hover:bg-blue-100 hover:text-gray-600 px-2 py-2 font-semibold text-white inline-flex items-center space-x-4 rounded"
          >
            <span className="text-2xl">
              {" "}
              <FcGoogle />
            </span>
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className="login">
          <form onSubmit={onLogIn}>
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="inputs"
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />
            <input
              className="inputs"
              ref={passRef}
              type="password"
              name=" password"
              placeholder="Password"
              required
            />
            {logInError}

            <button className="buttons">Login</button>
          </form>
          <div className="divider w-3/5 mx-auto">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="bg-blue-500 hover:bg-blue-100 hover:text-gray-600 px-3 py-2 font-semibold text-white inline-flex items-center space-x-4 rounded"
          >
            <span className="text-2xl">
              {" "}
              <FcGoogle />
            </span>
            <span>Log in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
