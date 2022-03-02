import "../styles/signin.scss";
import { useState } from "react";
import Rotate from "react-reveal/Rotate";
import TopNav from "../componentParts/topNav";
import { authRequest } from "../services/apiCalls";
import { Link } from "react-router-dom";

function SignIn() {
  const [loginData, setLoginData] = useState({
    emailOrPhoneNumber: "",
    password: "",
    admin: false,
  });
  const [response, setResponse] = useState({ show: false });
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (e, section) => {
    e.preventDefault();
    let theTag;
    if (section == "login") {
      theTag = document.querySelector("input#userpassword");
      if (theTag.type === "password") {
        theTag.type = "text";
      } else {
        theTag.type = "password";
      }
    } else {
      theTag = document.querySelector("input#newuserpassword");
      if (theTag.type === "password") {
        theTag.type = "text";
      } else {
        theTag.type = "password";
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await authRequest({ data: loginData, url: "auth/login" });
    if (res.status) {
      const { data } = res;
      setResponse({ status: "success", message: res.message, show: true });
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data?.user.id);
      localStorage.setItem("isEmailVerified", data?.user.isEmailVerified);
      localStorage.setItem("isPhoneVerified", data.user.isPhoneVerified);
      localStorage.setItem("showSplashScreen", false);
      window.location.replace("http://dev.webapp.waya-pay.com/wayapay");
    } else {
      setResponse({
        status: "warning",
        message: res.message || res,
        show: true,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <TopNav />
      <div id="signIn" style={{ backgroundImage: "url(loginBack.png)" }}>
        {response.show && (
          <div className={`alert alert-${response.status}`} role="alert">
            {response.message}
          </div>
        )}
        <Rotate top right when>
          <div id="loginSection" className="login row justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="text-center pb-2">
                <img src="wayapaychatLogo.png" />
              </div>
              <h5 className="text-center py-2">Login</h5>
              <div className="inputGroup text-left py-1">
                <label htmlFor="emailornumber">Email or Phone number</label>
                <br />
                <input
                  type="text"
                  className=""
                  id="emailornumber"
                  placeholder="Email / phone number"
                  required
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      emailOrPhoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="inputGroup text-left py-1">
                <label htmlFor="userpassword">Password</label>
                <br />
                <span
                  className="iconeye"
                  onClick={(e) => {
                    togglePasswordVisibility(e, "login");
                  }}
                >
                  {" "}
                  <img src="/see.png" />
                </span>
                <input
                  id="userpassword"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <div className=" mt-3">
                  <button type="submit" id="loginBtn" className="orange ">
                    {loading ? "Loading..." : "Sign In"}{" "}
                    <span>
                      <img src="/rightArr.png" />
                    </span>
                  </button>
                </div>
                <div className="row justify-content-center loginContinue pl-0 pr-4 mr-4">
                  <p
                    style={{ color: "#2626BC", fontSize: "13px" }}
                    className="py-3 col-sm-9 text-center pl-4"
                  >
                    Or continue with
                  </p>
                </div>
                <div className="justify-content-center loginSocial row mr-2">
                  <button className="col-sm-5 btn pl-0 mr-4 socialBtn">
                    <span className="pr-3">
                      <img src="fbIcon.png" />{" "}
                    </span>
                    Facebook
                  </button>
                  <button className="col-sm-5 btn mr-4 socialBtn">
                    <span className="pr-3">
                      <img src="googleIcon.png" />
                    </span>
                    Google
                  </button>
                </div>
                <div className="row justify-content-center pl-0 ">
                  <div
                    style={{ fontSize: "13px" }}
                    className="py-3 single col-sm-9 text-center pl-0 pr-4 mr-4"
                  >
                    New User?{" "}
                    <Link to="/signup" style={{ color: "#2626BC" }}>
                      Sign Up here
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Rotate>
      </div>
    </div>
  );
}

export default SignIn;
