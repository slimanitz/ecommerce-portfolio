import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import API from "../axios";
import styles from "../styles/Forms.module.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async ({ fullName, email, password }) => {
    try {
      const response = await API.post("/users/signup", {
        fullName,
        email,
        password,
      });
      if (response.status === 200) router.push("/login");
    } catch (err) {
      if (err.response.status === 401) {
        router.push({
          pathname: "/signup",
          query: { errorMessage: err.response.data.message },
        });
      }
    }
  };

  return (
    <div className="row">
      <form
        align="center"
        className="col-lg-4 col-sm-10 mx-auto pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {router.query.errorMessage && (
          <div className={` row ${styles.errorMessageBg}`}>
            <p className={`text-center ${styles.errorMessage} my-auto`}>
              {router.query.errorMessage}
            </p>
          </div>
        )}
        <div className="form-group row mt-2 ">
          <p className="col-sm-3  text-left ">Full name</p>
          <div className="col-sm-9">
            {errors.fullName && <span>This field is required</span>}
            <input
              type="text"
              className="form-control"
              {...register("fullName", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="form-group row mt-2 ">
          <p className="col-sm-3 col-form-label">Email</p>
          <div className="col-sm-9">
            {errors.email && <span>This field is required</span>}
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <p className="col-sm-3 col-form-label">Password</p>
          <div className="col-sm-9">
            {errors.password && <span>This field is required</span>}
            <input
              type={"password"}
              className="form-control"
              {...register("password", {
                required: true,
                type: "password",
              })}
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </div>
        <div className="row mx-auto">
          <Link href="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
