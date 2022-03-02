import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Button from '../../Button';
import { ProfileContext } from '../../../../store/context/ProfileContext';

export default function ResendOtp(props) {
  const {
    showModal,
    hideModal,
    title,
    description,
    buttonLabel,
    handleSubmit,
    loading,
  } = props;
  const [option, setOption] = useState('');
  const {
    profile: { phoneNumber, email },
  } = useContext(ProfileContext);

  return (
    <Modal
      isOpen={showModal}
      toggle={() => hideModal(false)}
      centered
      id="pin-modal"
    >
      <div className="modal-body-rs p-5">
        <div className="header-sec-modal">
          <input
            type="image"
            onClick={() => hideModal(false)}
            className="header-img1"
            src="./assets/back.png"
            alt=""
          />
          <img className="header-sec-logo" src="./assets/appLogo.png" alt="" />
          <input
            type="image"
            onClick={() => hideModal(false)}
            className="header-img1"
            src="./assets/x.png"
            alt=""
          />
        </div>

        <div className="">
          <h1 className="modal-header-data">{title}</h1>

          <p className="modal-header-sub-data text-secondary">{description}</p>

          <form className="d-flex justify-content-center align-items-center">
            {/* <div className="inputbox-with-one-input">
              <input
                placeholder="Email or Phone"
                type="text"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div> */}

            <div className="inputbox-with-one-input">
              <select
                value={option}
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              >
                <option value="" selected data-default hidden>
                  Select
                </option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </form>

          <div className="w-100 mt-5 text-center">
            <Button
              type="button"
              className="btn btn-primary btn-lg w-50"
              loading={loading}
              disabled={loading || false}
              onClick={() => handleSubmit(option, { phoneNumber, email })}
              content={buttonLabel}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

ResendOtp.defaultProps = {
  title: '',
  description: '',
  buttonLabel: 'Send',
};

ResendOtp.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  buttonLabel: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
