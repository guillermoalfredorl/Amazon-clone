import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import classes from "./signIn.module.css";
import amazonLogo from "../../assets/amazon_logoTB.png";

const SignIn = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values, e) => {
    console.log(values);
    e.target.reset();
  };

  return (
    <div className={classes.divContainer}>
      <Link to="/">
        <img className={classes.amazonLogo} src={amazonLogo}></img>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
        <p className="">Sign-In</p>
        {errors?.email?.message}
        <label>
          <b>Email</b>
        </label>
        <input
          autoFocus="autofocus"
          type="email"
          name="email"
          className="form-control"
          ref={register({
            required: { value: true, message: "Enter email" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
        />
        {errors?.password?.message}

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          ref={register({
            required: { value: true, message: "Enter password" },
          })}
        />
        <button type="submit" className="">
          Continue
        </button>
        <h6>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.{" "}
        </h6>
      </form>
      <div className={classes.divHr}>
        <span>
          <hr />
        </span>
        <span className={classes.span}>New to Amazon?</span>
        <span>
          <hr />
        </span>
      </div>
      <div>
        <Link to="/createAccount">
          <button className={classes.button}>Create your Amazon account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
