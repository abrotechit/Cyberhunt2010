import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import validator from "validator";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Browser, getUserInfo } from "../../utils/locationInfo";
import "./index.scss";
import ToggleInput from "../../componentParts/ToggleInput";
import { customBaseUrl, httpPost, httpGet } from "../../services/http";
import Button from "../../componentParts/Button";
import ForgotPassword from "../../componentParts/Modals/ForgotPassword";
import ResetPassword from "../../componentParts/Modals/ResetPassword";
import ResendOtp from "../../componentParts/Modals/Otp/ResendOtpOutside";
import VerifyOtp from "../../componentParts/Modals/Otp/VerifyOtp";
import Logo from "../../assets/images/wayaBankLogo1.png";
import { envConfig } from "../../utils/envConfig";

const LoginPage = () => {
  const history = useHistory();
  const [location, setLocation] = useState({});
  const [data, setData] = useState({
    emailOrPhoneNumber: "",
    password: "",
  });
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmOtp, setConfirmOtp] = useState("");

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  const [showResendOtp, setShowResendOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sharedPost, setSharedPost] = useState(false);
  const [sharedPostId, setSharedPostId] = useState(null);
  const [otp, setOtp] = useState("");
  const [showPin, setShowPin] = useState(false);

  const getLocationInfo = async () => {
    const userBrowserName = Browser.getBrowserName();
    const userInfo = await getUserInfo();
    setLocation({
      device: userBrowserName,
      userLocation: userInfo,
    });
  };

  useEffect(() => {
    if (new URLSearchParams(location.search).get("from") === "shared") {
      setSharedPost(true);
      setSharedPostId(new URLSearchParams(location.search).get("id"));
    }
    if (new URLSearchParams(location.search).get("corp_auth") === "true") {
      history.push("/corp-login");
    }
    if (new URLSearchParams(location.search).get("w") === "login") {
      history.push("/login");
    }
    if (new URLSearchParams(location.search).get("w") === "signup") {
      history.push("/signup");
    }
  }, []);

  const resendOtp = async (phoneNumber) => {
    setLoading(true);
    setPhone(phoneNumber);
    const res = await httpGet(
      `${customBaseUrl.authUrl}/api/v1/auth/resend-otp/signup/${phoneNumber}`
    );
    if (res.status) {
      setLoading(false);
      swal("Done", res.message, "success").then(() => {
        setShowResendOtp(false);
        setShowVerifyOtp(true);
      });
    } else {
      setLoading(false);
      swal("Wrong", `${res.message}`, "error", {
        button: {
          text: "Resend OTP",
          className: "button-warning",
        },
      }).then(() => {
        setPhone("");
      });
    }
  };

  const completeSignup = async () => {
    setLoading(true);
    const postData = {
      otp: Number(otp),
      phoneOrEmail: phone,
    };
    const res = await httpPost(
      "/api/v1/auth/verify-otp",
      postData,
      customBaseUrl.authUrl
    );
    if (res.status) {
      setLoading(false);
      setOtp("");
      setPhone("");
      setShowVerifyOtp(false);
      swal("Done", res.message, "success").then(() => {
        history.push("/login");
      });
    } else {
      setLoading(false);
      swal("Oops!", res.message, "error");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (validator.isEmpty(data.emailOrPhoneNumber)) {
      setLoading(false);
      swal("Oops!", "Email cannot be empty", "error");
      return;
    }
    if (validator.isEmpty(data.password)) {
      setLoading(false);
      swal("Oops!", "Password cannot be empty", "error");
      return;
    }
    const res = await httpPost(
      "/api/v1/auth/login",
      { ...data, admin: false },
      customBaseUrl.authUrl
    );
    console.log(res);
    if (res?.status) {
      if (!res.data.pinCreated) {
        localStorage.setItem("firstLogin", true);
        // setShowPin(true);
      }
      // httpPost(
      //   '/api/v1/history/save',
      //   {
      //     city: location?.userLocation?.city,
      //     country: location?.userLocation?.country_name,
      //     device: location?.device,
      //     id: 0,
      //     ip: location?.userLocation?.IPv4,
      //     province: location?.userLocation?.state,
      //     userId: res.data.user.id,
      //   },
      //   customBaseUrl.authUrl
      // );
      if (sharedPost) {
        history.push(`/post/${sharedPostId}`);
      } else {
        // history.push('/products');
        if (res.data.corporate) {
          window.location.href = `${envConfig.corporateAppUrl}/login?from=web&token=${res?.data?.token}&userId=${res?.data?.user.id}&pinCreated=${res.data?.pinCreated}`;
        } else {
          window.location.href = `${envConfig.personalAppUrl}/login?from=web&token=${res?.data?.token}&userId=${res?.data?.user.id}&pinCreated=${res.data?.pinCreated}`;
        }
      }
    } else {
      setLoading(false);
      swal(
        "Oops!",
        res?.message === "User account is disabled, kindly contact Waya Admin"
          ? "Your account has not been verified, proceed to verify"
          : res?.message,
        "error"
      ).then(() => {
        if (
          res?.message === "User account is disabled, kindly contact Waya Admin"
        ) {
          setEmail(data.emailOrPhoneNumber);
          setShowVerifyOtp(true);
          setPhone(data.emailOrPhoneNumber);
        }
        if (
          res?.message === "User is disabled" ||
          res?.message === "Account not Verified"
        ) {
          setEmail(data.emailOrPhoneNumber);
          setPhone(data.emailOrPhoneNumber);
          setShowVerifyOtp(true);
        }
      });
    }
  };

  useEffect(() => {
    getLocationInfo();
    return () => {
      setLocation({});
    };
  }, []);

  return (
    <div id="login-bg">
      <div id="login-modal" className="my-auto modal-body-rs-log col-12">
        <div className="waya-modal-body-log">
          <div className="header-sec-modal-log">
            <img className="header-sec-logo-log mx-auto" src={Logo} alt="" />
          </div>
          <h1 className="modal-header-data-log">Welcome Back</h1>

          <form>
            <div className="inputbox-with-one-input-log">
              <input
                placeholder="Email or Phone"
                type="text"
                onChange={(e) =>
                  setData({ ...data, emailOrPhoneNumber: e.target.value })
                }
              />
            </div>

            <div className="inputbox-with-one-input-log toggle-pass-wrapper">
              <ToggleInput
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
          </form>
          <div className="submit-modal-btn-wrap-log">
            <Button
              type="button"
              loading={loading}
              onClick={handleSubmit}
              content="Login"
            />
          </div>

          <div className="text-center">
            <span className="">
              Dont have an account?{" "}
              <Link className="text-primary" to="signup">
                Sign up instead
              </Link>
            </span>
            <br />
            <span
              className="text-primary"
              onClick={() => setShowForgotPasswordModal(true)}
            >
              Forgot your password?
            </span>
          </div>
          <div
            style={{
              fontSize: "14px",
              width: "80%",
            }}
            className="mx-auto d-flex  login-footer justify-content-between text-black"
          >
            <span>© Wayapay</span>
            <span>About</span>
            <span>Insights</span>
            <span>Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
      {showForgotPasswordModal ? (
        <ForgotPassword
          center="true"
          showModal={showForgotPasswordModal}
          hideModal={setShowForgotPasswordModal}
          setShowResetPassword={setShowResetPassword}
        />
      ) : (
        ""
      )}
      {showVerifyOtp ? (
        <VerifyOtp
          center
          showModal={showVerifyOtp}
          hideModal={setShowVerifyOtp}
          otp={otp}
          setOtp={setOtp}
          separator=""
          title="Verify Your Account"
          description="Please input the OTP sent to your email address or phone number"
          isResendOtp
          buttonLabel="Verify"
          handleSubmit={completeSignup}
          loading={loading}
          numInputs={6}
          resendOtp={setShowResendOtp}
        />
      ) : (
        ""
      )}
      {showResetPassword ? (
        <ResetPassword
          center="true"
          showModal={showResetPassword}
          hideModal={setShowResetPassword}
        />
      ) : (
        ""
      )}
      {showResendOtp ? (
        <ResendOtp
          center="true"
          showModal={showResendOtp}
          hideModal={setShowResendOtp}
          title="Resend OTP"
          description="Please input the email and mobile number"
          handleSubmit={resendOtp}
          loading={loading}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginPage;
