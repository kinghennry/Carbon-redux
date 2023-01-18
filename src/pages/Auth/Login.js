import React, { useState } from "react";
import { SEO, Footer, Header } from "../../components";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Auth.css";
import AuthLayout from "./AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, navigate, openSnackbar));
  };

  return (
    <React.Fragment>
      <SEO title="Carbon || Login " />
      <div className="bg">
        <section className="container">
          <Header
            url="/register"
            span="Register"
            text="Dont Have an account ?"
          />
          <AuthLayout
            text="Sign In"
            desc="Fill the Form below to sign in. It only takes a few seconds to login."
          >
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 mt-5">
                <label className="text-black font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter customer email"
                  className="inputs"
                  name="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label className="text-black font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter Password"
                  className="inputs text-[#4D4D4D]"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="px-6 py-4 click_btn flex_sty gap-2"
                  type="button"
                  onClick={handleSubmit}
                >
                  {/* {isLoading && (
                    <ThreeDots
                      height="20"
                      width="20"
                      color="#008c36"
                      ariaLabel="loading"
                    />
                  )} */}
                  <span className="flex_sty">
                    {isLoading ? "Loading..." : "SIGN IN NOW !"}
                    {!isLoading && (
                      <AiOutlineArrowRight className="ml-[10px]" />
                    )}
                  </span>
                </button>
              </div>
            </form>
          </AuthLayout>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
