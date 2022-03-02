import React from 'react';
import OtpInput from 'react-otp-input';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Button from '../../Button';
// import ResetPin from '../ResetPin';

export default function VerifyOtp(props) {
  const {
    showModal,
    hideModal,
    otp,
    setOtp,
    separator,
    title,
    description,
    buttonLabel,
    isResendOtp,
    handleSubmit,
    loading,
    numInputs,
    resendOtp,
  } = props;
  // const [showResetPin, setShowResetPin] = useState(false);

  return (
    <div id="pin-modal">
      <Modal isOpen={showModal} toggle={() => hideModal(false)} centered>
        <div className="modal-body-rs p-2 pb-3">
          <div className="header-sec-modal">
            <input
              type="image"
              onClick={() => hideModal(false)}
              className="header-img1"
              src="./assets/back.png"
              alt=""
            />
            <img
              className="header-sec-logo"
              src="./assets/appLogo.png"
              alt=""
            />
            <input
              type="image"
              onClick={() => hideModal(false)}
              className="header-img1"
              src="./assets/x.png"
              alt=""
            />
          </div>

          <div className="waya-modal-body">
            <h1 className="modal-header-data">{title}</h1>

            <p className="modal-header-sub-data text-secondary">
              {description}
            </p>

            <OtpInput
              value={otp}
              onChange={(e) => setOtp(e)}
              numInputs={numInputs}
              separator={separator}
              containerStyle={{ justifyContent: 'center' }}
              inputStyle={
                numInputs > 5 ? 'otp-input2 otp-bottom' : 'otp-input otp-bottom'
              }
              isInputSecure
            />

            <div className="w-100 mt-5 text-center">
              <Button
                type="button"
                className="btn btn-primary btn-lg w-50"
                loading={loading}
                disabled={loading || false}
                onClick={handleSubmit}
                content={buttonLabel}
              />
            </div>
            <div className={!isResendOtp ? 'd-none' : 'mt-3 text-center'}>
              <a
                className={
                  !isResendOtp ? 'd-none' : 'text-dark decoration-none'
                }
                onClick={(e) => {
                  e.preventDefault();
                  hideModal(false);
                  resendOtp(true);
                }}
                href="/#"
              >
                Resend Code
              </a>
            </div>
          </div>
        </div>
      </Modal>
      {/* {showResetPin ? (
        <ResetPin
          center
          showModal={showResetPin}
          hideModal={setShowResetPin}
          separator=""
          buttonLabel="Continue"
          title="Input your 4 digit pin"
          description="Please input your 4 digit pin to confirm transaction"
        />
      ) : (
        ''
      )} */}
    </div>
  );
}

VerifyOtp.defaultProps = {
  separator: <span>-</span>,
  title: '',
  description: '',
  buttonLabel: 'Login',
  numInputs: 4,
  isResendOtp: false,
};

VerifyOtp.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  // center: PropTypes.bool.isRequired,
  otp: PropTypes.string.isRequired,
  setOtp: PropTypes.func.isRequired,
  separator: PropTypes.node,
  buttonLabel: PropTypes.string,
  isResendOtp: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  numInputs: PropTypes.number,
  resendOtp: PropTypes.func.isRequired,
};
