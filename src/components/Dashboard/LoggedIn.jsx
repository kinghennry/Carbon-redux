import { Avatar } from "@mui/material";
import { avatar } from "../../Assets/Images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import decode from "jwt-decode";
import { useSnackbar } from "react-simple-snackbar";

function LoggedIn({ url }) {
  const { authData } = useSelector((state) => state.auth);
  // eslint-disable-next-line
  const [openSnackbar, closeSnackbar] = useSnackbar();
  //   jwt
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //   logout
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    openSnackbar("Logout successfull!");
    setUser(null);
  };

  //   logout when token expires
  useEffect(() => {
    const token = user?.user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    // eslint-disable-next-line
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user]);

  return (
    <div className="bg-white flex mx-5 px-12 flex-col rounded my-6">
      <div className="flex flex-col items-center py-1 mt-3 ">
        <Avatar
          src={avatar}
          alt="avatar"
          className="outline outline-1 outline-lightGreen outline-offset-2 mb-1"
        />
        <h4 className="text-black font-medium text-base capitalize">
          {authData?.user?.username}
        </h4>
        <p className="text-[#A4A4A4] font-normal text-xs capitalize">
          {authData?.user?.role}
        </p>
      </div>
      <div className="space_sty gap:2 my-3">
        <p
          className="text-xs font-semibold text-black cursor-pointer"
          onClick={() => logout()}
        >
          Log Out
        </p>
        <Link to={url} className="text-xs font-semibold text-black">
          Your Dashboard
        </Link>
      </div>
    </div>
  );
}

export default LoggedIn;
