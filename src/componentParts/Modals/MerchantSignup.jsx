import React, { useState } from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";
import validator from "validator";
import { Modal } from "reactstrap";
import { parsePhoneNumber } from "react-phone-number-input";
import "./index.scss";
import MerchantForm from "./MerchantForm";
import MerchantForm2 from "./MerchantForm2";
import MerchantForm3 from "./MerchantForm3";
import { customBaseUrl, httpPost } from "../../../action/http";

const MerchantSignup = (props) => {
  const {
    showModal,
    hideModal,
    center,
    setShowLoginModal,
    setShowMerchantSignupModal,
    setShowSignupModal,
    setPhone,
    setShowVerifyOtp,
    businessTypes,
  } = props;
  const [mode, setMode] = useState("corporate");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    orgName: "",
    orgEmail: "",
    orgPhone: "",
    orgType: "",
    businessType: "",
    email: "",
    city: "",
    firstName: "",
    officeAddress: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    referenceCode: "",
    state: "",
    surname: "",
  });

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
      hideModal(false);
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

  return (
    <div id="login-modal">
      <Modal
        open={showModal}
        onClose={() => hideModal(false)}
        top
        animationDuration={400}
        center={center}
      >
        <div className="modal-body-rs col-sm-12 col-md-10">
          <div className="header-sec-modal">
            <input
              type="image"
              onClick={() => hideModal(false)}
              className="header-img1"
              src="./assets/image/back.png"
              alt=""
              style={{ opacity: 0 }}
            />
            <img
              className="header-sec-logo"
              src="./assets/image/appLogo.png"
              alt=""
            />
            <input
              type="image"
              onClick={() => hideModal(false)}
              className="header-img1"
              src="./assets/image/x.png"
              alt=""
              style={{ opacity: 0 }}
            />
          </div>

          <div className="waya-modal-body">
            <div
              className="w-70 text-center mx-auto"
              style={{ border: "1px solid #b6b3b3" }}
            >
              <div className="row m-0">
                <div
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                  className={mode === "individual" ? "col reg-active" : "col"}
                  onClick={() => {
                    setMode("individual");
                    setShowSignupModal(true);
                    hideModal();
                  }}
                >
                  Individual
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                  className={mode === "corporate" ? "col reg-active" : "col"}
                  onClick={() => {
                    setMode("corporate");
                    setShowMerchantSignupModal(true);
                    hideModal();
                  }}
                >
                  Corporate
                </div>
              </div>
            </div>
            <h1 className="modal-header-data">
              Create your Corporate WayaPay account
            </h1>

            {page === 1 ? (
              <MerchantForm
                setPage={setPage}
                setData={setData}
                data={data}
                businessTypes={businessTypes}
              />
            ) : page === 2 ? (
              <MerchantForm2 setPage={setPage} setData={setData} data={data} />
            ) : (
              <MerchantForm3
                setData={setData}
                data={data}
                setLoading={setLoading}
                loading={loading}
                handleSignup={handleSignup}
              />
            )}

            <div className="text-center">
              <span className="">
                Have an account?{" "}
                <a
                  className="text-link"
                  href="/#"
                  onClick={() => {
                    setShowLoginModal(true);
                    hideModal(false);
                  }}
                >
                  Sign In{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

MerchantSignup.defaultProps = {
  showModal: false,
};

MerchantSignup.propTypes = {
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
  center: PropTypes.bool.isRequired,
  setShowLoginModal: PropTypes.bool.isRequired,
  setShowSignupModal: PropTypes.bool.isRequired,
  setShowMerchantSignupModal: PropTypes.bool.isRequired,
  setPhone: PropTypes.func.isRequired,
  setShowVerifyOtp: PropTypes.func.isRequired,
};

export default MerchantSignup;
