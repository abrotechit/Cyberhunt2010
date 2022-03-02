import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import validator from "validator";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import $ from "jquery";
import "react-phone-number-input/style.css";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import "./index.scss";
import ToggleInput from "../../componentParts/ToggleInput";
import { customBaseUrl, httpPost, httpGet } from "../../services/http";
import Button from "../../componentParts/Button";
import TermsAndCondition from "../../componentParts/Modals/Terms/TermsAndCondition";
import PrivacyPolicy from "../../componentParts/Modals/Terms/PrivacyPolicy";
import Bg from "../../assets/images/BG.png";
import MerchantForm from "../../componentParts/Modals/MerchantForm";
import MerchantForm2 from "../../componentParts/Modals/MerchantForm2";
import MerchantForm3 from "../../componentParts/Modals/MerchantForm3";
import VerifyOtp from "../../componentParts/Modals/Otp/VerifyOtp";
import ResendOtp from "../../componentParts/Modals/Otp/ResendOtpOutside";
import { getBusinessTypes } from "../../services/calls";
import Logo from "../../assets/images/wayaBankLogo1.png";

const SignupPage = () => {
  const history = useHistory();
  const [businessTypes, setBusinessTypes] = useState([]);
  const [mode, setMode] = useState("individual");
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [showResendOtp, setShowResendOtp] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    referenceCode: "",
  });
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [page, setPage] = useState(1);

  // const myRef = React.useRef(null);

  const getBusinessList = async () => {
    const res = await getBusinessTypes();
    setBusinessTypes(res);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const term = $("#term1").is(":checked");
    if (!term) {
      swal("Oops!", "Please Agree to Terms & conditions", "error");
      setLoading(false);
      return;
    }

    if (validator.isEmpty(data.firstName)) {
      swal("Oops!", "First name cannot be empty", "error");
      setLoading(false);
      return;
    }
    if (validator.isEmpty(data.surname)) {
      swal("Oops!", "Surname cannot be empty", "error");
      setLoading(false);
      return;
    }
    if (validator.isEmpty(data.email)) {
      swal("Oops!", "Email cannot be empty", "error");
      setLoading(false);
      return;
    }
    if (!validator.isEmail(data.email)) {
      swal("Oops!", "Invalid Email format", "error");
      setLoading(false);
      return;
    }
    if (validator.isEmpty(data.password)) {
      swal("Oops!", "Password cannot be empty", "error");
      setLoading(false);
      return;
    }

    const PASSWORD_REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"; // _ added
    if (!data.password.match(PASSWORD_REGEX)) {
      swal(
        "Oops!",
        "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters",
        "error"
      );
      setLoading(false);
      return;
    }

    if (validator.isEmpty(data.phoneNumber)) {
      swal("Oops!", "Phone number cannot be empty", "error");
      setLoading(false);
      return;
    }

    const formattedPhone = `${
      parsePhoneNumber(data.phoneNumber).countryCallingCode
    }${parsePhoneNumber(data.phoneNumber).nationalNumber}`;

    if (/\D/.test(formattedPhone)) {
      swal(
        "Oops!",
        "Phone number accepts only numeric characters (Allowed input:0-9)",
        "error"
      );
      setLoading(false);
      return;
    }

    if (formattedPhone.length > 13) {
      swal("Oops!", "Phone number cannot be be less than 13 numbers", "error");
      setLoading(false);
      return;
    }

    if (!validator.equals(data.password, data.confirmPassword)) {
      swal("Oops!", "Password do not match", "error");
      setLoading(false);
      return;
    }

    const postData = {
      admin: false,
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      surname: data.surname,
      phoneNumber: formattedPhone,
      referenceCode: data.referenceCode,
    };
    const hiddenPhone = `*********${data.phoneNumber.substr(-4, 4)}`;

    const res = await httpPost(
      "/api/v1/auth/create",
      postData,
      customBaseUrl.authUrl
    );
    // console.log(res);
    if (res.status) {
      setPhone(formattedPhone);
      setLoading(false);
      swal(
        "Done",
        `Account created! and a verification OTP has been sent to ${hiddenPhone}`,
        "success",
        {
          button: {
            text: "Continue to OTP",
            className: "button-success",
            value: true,
          },
          closeOnClickOutside: false,
        }
      ).then(() => {
        setShowVerifyOtp(true);
        swal.close();
      });
    } else {
      setLoading(false);
      swal("Oops!", res.message || "Something went wrong", "error");
    }
  };

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
  const handleSignup = async () => {
    setLoading(true);

    if (!validator.equals(data.password, data.confirmPassword)) {
      swal("Oops!", "Password do not match", "error");
      setLoading(false);
      return;
    }

    const formattedPhone = `${
      parsePhoneNumber(data.phoneNumber).countryCallingCode
    }${parsePhoneNumber(data.phoneNumber).nationalNumber}`;

    const formattedOrgPhone = `${
      parsePhoneNumber(data.orgPhone).countryCallingCode
    }${parsePhoneNumber(data.orgPhone).nationalNumber}`;

    const postData = {
      admin: false,
      corporate: true,
      ...data,
      orgPhone: formattedOrgPhone,
      phoneNumber: formattedPhone,
      userId: 0,
    };

    const hiddenPhone = `*********${data.phoneNumber.substr(-4, 4)}`;

    const res = await httpPost(
      "/api/v1/auth/create-corporate",
      postData,
      customBaseUrl.authUrl
    );
    // console.log(res);
    if (res.status) {
      setPhone(data.phoneNumber);
      setLoading(false);
      swal(
        "Done",
        `Account created! and a verification OTP has been sent to ${hiddenPhone}`,
        "success",
        {
          button: {
            text: "Continue to OTP",
            className: "button-success",
            value: true,
          },
          closeOnClickOutside: false,
        }
      ).then(() => {
        setShowVerifyOtp(true);
        swal.close();
      });
    } else {
      setLoading(false);
      swal("Oops!", res.message || "Something went wrong", "error");
    }
  };

  useEffect(() => {
    getBusinessList();
    return () => {
      setBusinessTypes([]);
    };
  }, []);

  useEffect(() => {
    const { location } = history;
    if (new URLSearchParams(location.search).get("tab") === "corporate") {
      setMode("corporate");
    }
  }, []);

  return (
    <div
      id="login-bg"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div id="login-modal" className="modal-body-rs-log col-12">
        <div className="waya-modal-body-log">
          <div className="header-sec-modal-log">
            <img className="header-sec-logo-log mx-auto" src={Logo} alt="" />
          </div>
          <div
            className="w-auto text-center mx-auto"
            style={{ border: "1px solid #b6b3b3" }}
          >
            <div className="row m-0">
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                className={mode === "individual" ? "col reg-active" : "col"}
                onClick={() => setMode("individual")}
              >
                Personal
              </div>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                className={mode === "corporate" ? "col reg-active" : "col"}
                onClick={() => {
                  setMode("corporate");
                }}
              >
                Business
              </div>
            </div>
          </div>
          {mode === "individual" && (
            <>
              <h1 className="modal-header-data-log">
                Create your personal WayaBank account
              </h1>

              <form>
                <div className="inputbox-with-one-input-log">
                  <input
                    placeholder="First name"
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, firstName: e.target.value });
                    }}
                  />
                </div>

                <div className="inputbox-with-one-input-log">
                  <input
                    placeholder="Surname"
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, surname: e.target.value });
                    }}
                  />
                </div>

                <div className="inputbox-with-one-input-log">
                  <input
                    placeholder="Email Address"
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>

                <div className="inputbox-with-one-input-log">
                  {/* <input
                  placeholder="Phone Number"
                  type="text"
                  value={data.phoneNumber}
                  onChange={(e) => {
                    setData({ ...data, phoneNumber: e.target.value });
                  }}
                /> */}
                  <PhoneInput
                    placeholder="Phone Number"
                    defaultCountry="NG"
                    international
                    value={data.phoneNumber}
                    onChange={(e) => setData({ ...data, phoneNumber: e })}
                  />
                </div>

                <div className="inputbox-with-one-input-log">
                  <input
                    placeholder="Referral Code"
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, referenceCode: e.target.value });
                    }}
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

                <div className="inputbox-with-one-input-log toggle-pass-wrapper">
                  <ToggleInput
                    placeholder="Confirm Password"
                    type="password"
                    onChange={(e) => {
                      setData({ ...data, confirmPassword: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <input type="checkbox" id="term1" />{" "}
                  <span className="add-cursor">
                    By signing up, you agree with the{" "}
                    <span
                      className="primary-link"
                      onClick={() => {
                        setShowTerms(true);
                      }}
                    >
                      terms and conditions
                    </span>{" "}
                    and{" "}
                    <span
                      className="primary-link"
                      onClick={() => {
                        setShowPrivacy(true);
                      }}
                    >
                      privacy policy
                    </span>
                  </span>
                </div>
              </form>
              <div className="submit-modal-btn-wrap-log">
                <Button
                  type="button"
                  loading={loading}
                  disabled={loading && false}
                  onClick={handleSubmit}
                  content="Create account"
                />
              </div>
            </>
          )}
          {mode === "corporate" && (
            <>
              <h1 className="modal-header-data">
                Create your Business WayaBank account
              </h1>
              {page === 1 ? (
                <MerchantForm
                  setPage={setPage}
                  setData={setData}
                  data={data}
                  businessTypes={businessTypes}
                />
              ) : page === 2 ? (
                <MerchantForm2
                  setPage={setPage}
                  setData={setData}
                  data={data}
                />
              ) : (
                <MerchantForm3
                  setData={setData}
                  data={data}
                  setLoading={setLoading}
                  loading={loading}
                  handleSignup={handleSignup}
                />
              )}
            </>
          )}

          <div className="text-center">
            <span className="">
              Have an account?{" "}
              <Link className="text-link" to="login">
                Sign In{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
      {showTerms ? (
        <TermsAndCondition showModal={showTerms} hideModal={setShowTerms} />
      ) : (
        ""
      )}
      {showPrivacy ? (
        <PrivacyPolicy showModal={showPrivacy} hideModal={setShowPrivacy} />
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

SignupPage.defaultProps = {};

SignupPage.propTypes = {};

export default SignupPage;
