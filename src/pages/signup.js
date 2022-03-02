import "../styles/signin.scss";
import { useState } from "react";
import Rotate from "react-reveal/Rotate";
// import PageFooter from '../componentParts/footer'
import TopNav from "../componentParts/topNav";
import { authRequest } from "../services/apiCalls";
import { Link } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { getBusinessType } from "../states/business";

function SignUp() {
  const data = useRecoilValueLoadable(getBusinessType);
  const business = data.state === "hasValue" ? data.contents : [];
  console.log(business);
  const [registerData, setRegisterData] = useState({
    admin: false,
    email: "",
    firstName: "",
    password: "",
    phoneNumber: "",
    referenceCode: "",
    surname: "",
  });
  const [response, setResponse] = useState({ show: false });
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (e, section) => {
    e.preventDefault();
    let theTag;
    if (section == "pass") {
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
    const res = await authRequest({ data: registerData, url: "auth/create" });
    if (res.status) {
      const { data } = res;
      setResponse({ status: "success", message: res.message, show: true });
    } else {
      setResponse({
        status: "warning",
        message: res.message || res,
        show: true,
      });
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegisterData({ ...registerData, [name]: value });
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

        <div className="showing">
          <Rotate bottom left when>
            <div
              id="signUp"
              className="row align-items-center justify-content-center"
            >
              <div className="col-sm-4 part-text">
                <h3>
                  We are committed to providing a secure and cashless payment
                  solution
                </h3>
                <p>
                  With our multiple options for transactions you don’t have to
                  worry about internet access to make payments or receive
                  payments, we have solved that problem for you.
                </p>
              </div>
              <div className="col-sm-11 col-md-6">
                <form onSubmit={handleSubmit}>
                  <h4 className="text-start">Sign up to get started</h4>
                  <p
                    style={{ color: "#2626BC", fontSize: "13px" }}
                    className="py-1 col-sm-9 text-start pl-0"
                  >
                    Already have an account? <Link to="/signin">Sign In</Link>
                  </p>
                  <input className="mr-2" type="checkbox" value="" id="t&c" />
                  <label className=" " htmlFor="t&c">
                    I am a Merchant
                  </label>
                  <div className="name  my-3 ">
                    <input
                      name="firstName"
                      type="text"
                      className=""
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                    <input
                      name="surname"
                      type="text"
                      className="ml-2"
                      placeholder="Surname"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="">
                    <div className="inputGroup text-left">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="inputGroup text-left">
                      <span
                        className="iconeye"
                        onClick={(e) => {
                          togglePasswordVisibility(e, "pass");
                        }}
                      >
                        {" "}
                        <img src="/see.png" />
                      </span>
                      <input
                        id="userpassword"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="inputGroup text-left">
                      <span
                        className="iconeye"
                        onClick={(e) => {
                          togglePasswordVisibility(e, "confirm");
                        }}
                      >
                        {" "}
                        <img src="/see.png" />
                      </span>
                      <input
                        id="newuserpassword"
                        name="confrim_password"
                        type="password"
                        placeholder="confirm Password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="inputGroup text-left">
                      <input
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="inputGroup text-left">
                      <input
                        name="referenceCode"
                        type="text"
                        placeholder="Reference code"
                        onChange={handleChange}
                      />
                    </div>

                    <input className="mr-2" type="checkbox" value="" id="t&c" />
                    <label className=" " htmlFor="t&c">
                      By signing up, you agree to our{" "}
                      <span>Terms & Conditions</span>
                    </label>

                    <div className=" mt-3">
                      <button type="submit" id="signupBtn" className="orange ">
                        {loading ? "Loading..." : "Sign Up"}{" "}
                        <span>
                          <img src="/rightArr.png" />
                        </span>
                      </button>
                    </div>
                    <div className="row justify-content-center continueText pl-0 pr-4 mr-4">
                      <p
                        style={{ color: "#2626BC", fontSize: "13px" }}
                        className="pt-3 mr-3 col-sm-9 text-center"
                      >
                        Or continue with
                      </p>
                    </div>
                    <div className="justify-content-center row mr-2 sociallinks">
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
                  </div>
                </form>
              </div>
            </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
