import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouteComponentProps } from "react-router";
import { type } from "os";



type SomeComponentProps = RouteComponentProps;
type formValues = {
    email:string,
    password:string,
}


const base = process.env.REACT_APP_BASE_URL


const Login: FC<SomeComponentProps> = ({ history }): JSX.Element => {
  const [isloading , setisloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();

  const login = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    setisloading(true)
    axios
      .post(`${base}/login`, params)
      .then(function (response) {
          setTimeout(() => {
            setisloading(false)
            localStorage.setItem("auth", response.data.token);
            history.push("/");
          }, 3000);
      })

      .catch(function (error) {
        console.log(error)
          toast.error(error.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
      });
  };

  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card mb-3" style={{ maxWidth: "320px" }}>
            <div className="col-md-12">
              <div className="card-body">
                <h3 className="card-title text-center text-secondary mt-3">
                  Login Form
                </h3>
                <form autoComplete="off" onSubmit={handleSubmit(login)}>
                  <div className="mb-3 mt-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      id="exampleFormControlInput1"
                      {...register("email", { required: "Email is required!" })}
                    />
                    {errors.email && (
                      <p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control shadow-none"
                      id="exampleFormControlInput2"
                      {...register("password", {
                        required: "Password is required!",
                      })}
                    />
                    {errors.password && (
                      <p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-4 ">
                    <button
                      className="btn btn-outline-primary text-center shadow-none mb-3"
                      type="submit">
          Submit
                    </button>{isloading ?
                    <img src = "./Spinner.svg"/>:""}
                    <p className="card-text pb-2">
                      Have an Account?{" "}
                      <Link style={{ textDecoration: "none" }} to={"/register"}>
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        limit={1}
        transition={Flip}
      />
    </>
  );
};
export default Login;