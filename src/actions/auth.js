import * as api from "../api/index";
import { AUTH, START_LOADING, END_LOADING } from "./constants";

export const login = (formData, navigate, openSnackbar) => async (dispatch) => {
  try {
    //login the user
    const { data } = await api.login(formData);
    dispatch({ type: START_LOADING });
    dispatch({ type: AUTH, data });
    openSnackbar("Login successfull!");
    if (data?.user?.role === "admin") {
      navigate("/admin/dashboard");
    } else if (data?.user?.role === "customer") {
      navigate("/customer/dashboard");
    } else if (data?.user?.role === "arborist") {
      navigate("/arborist/dashboard");
    } else if (data?.user?.role === "broker") {
      navigate("/broker/dashoard");
    } else {
      navigate("/company/dashboard");
    }
    dispatch({ type: END_LOADING });
  } catch (error) {
    openSnackbar(error?.response?.data?.error);
  }
};

// export const signin = (formData, history) => async (dispatch) => {
//   try {
// const { data } = await api.signIn(formData);
// dispatch({ type: START_LOADING });
// dispatch({ type: AUTH, data });
// dispatch({ type: LOGIN_SUCCESSFUL });
// if (data.result.role === "admin") {
//   history.push("/adminDashboard");
// } else {
//   history.push("/userDashboard");
// }
// dispatch({ type: END_LOADING });
//   } catch (error) {
// dispatch({ type: LOGIN_FAILURE, error });
// console.log(error);
//   }
// };
