import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Button from '../../Button';

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
  const [data, setData] = useState({});

  return (
    <Modal
      isOpen={showModal}
      toggle={() => hideModal(false)}
      centered
      id="pin-modal"
    >
      <div className="modal-body-rs">
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

        <div className="waya-modal-body">
          <h1 className="modal-header-data">{title}</h1>

          <p className="modal-header-sub-data text-secondary">{description}</p>

          <form>
            <div className="inputbox-with-one-input">
              <input
                placeholder="Email or Phone"
                type="text"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </form>

          <div className="w-100 mt-5 text-center">
            <Button
              type="button"
              className="btn btn-primary btn-lg w-50"
              loading={loading}
              onClick={() => handleSubmit(data.email)}
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
