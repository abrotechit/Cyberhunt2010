import React, { useState } from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";
import validator from "validator";
import { Modal } from "reactstrap";
import "./index.scss";
import { customBaseUrl, httpGet } from "../../services/http";
import Button from "../Button";
import { checkAcess } from "../../utils/helper";
import Logo from "../../assets/images/wayaBankLogo1.png";

const ForgotPassword = (props) => {
  const {
    showModal,
    hideModal,
    center,
    setShowResetPassword,
    setShowLoginModal,
    setShowSignupModal,
  } = props;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let res;
    if (checkAcess(email)) {
      res = await httpGet(
        `${customBaseUrl.authUrl}/api/v1/password/forgot-password/byPhone?phoneNumber=${email}`,
        true
      );
    } else {
      if (validator.isEmpty(email)) {
        swal("Oops!", "Email cannot be empty", "error");
        setLoading(false);
        return;
      }
      const url = undefined;
      res = await httpGet(
        `${customBaseUrl.authUrl}/api/v1/password/forgot-password/byEmail?email=${email}&redirectUrl=${url}`,
        true
      );
    }

    if (res.status) {
      setLoading(false);
      swal("Done", res.message, "success").then(() => {
        localStorage.setItem("email", email);
        hideModal(false);
        setShowResetPassword(true);
      });
    } else {
      setLoading(false);
      swal("Oops!", res.message, "error");
    }
  };

  return (
    <div id="forgot-password-modal">
      <Modal
        isOpen={showModal}
        toggle={() => hideModal(false)}
        centered
        size="md"
      >
        <div
          id="forgot-password-modal"
          className="modal-body-rs col-sm-12 col-md-10"
          style={{ marginTop: "30px" }}
        >
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
              src={Logo}
              alt=""
              style={{ height: "35px" }}
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
            <h1 className="modal-header-data">Forgot Password?</h1>

            <span className="text-secondary">
              Please enter your email or phone number to reset your password
              associated with your wayapay account
            </span>

            <div className="inputbox-with-one-input">
              <input
                placeholder="Email or Phone"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="submit-modal-btn-wrap">
              <Button
                type="button"
                loading={loading}
                onClick={handleSubmit}
                content="Submit"
              />
            </div>

            <span
              className=" text-secondary-dark"
              role="button"
              tabIndex={0}
              aria-hidden="true"
              onClick={() => {
                hideModal(false);
                setShowLoginModal(true);
              }}
            >
              Back to Sign In?
            </span>

            <div className="back text-center">
              <span className="text-secondary">
                Dont have an account?{" "}
                <a
                  className="text-secondary-dark"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    hideModal(false);
                    setShowSignupModal(true);
                  }}
                >
                  Sign up instead{" "}
                </a>
              </span>
            </div>

            <div className="modal-footer p-0">
              <div
                className="d-flex text-center w-100"
                style={{ justifyContent: "space-between" }}
              >
                <div>Wayapay</div>
                <div>About</div>
                <div>Insights</div>
                <div>Terms</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

ForgotPassword.defaultProps = {
  setShowLoginModal: false,
  setShowSignupModal: false,
};

ForgotPassword.propTypes = {
  hideModal: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  center: PropTypes.bool.isRequired,
  setShowResetPassword: PropTypes.bool.isRequired,
  setShowLoginModal: PropTypes.bool,
  setShowSignupModal: PropTypes.bool,
};

export default ForgotPassword;
