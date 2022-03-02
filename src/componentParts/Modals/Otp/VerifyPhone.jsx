import React from 'react';
import { Modal } from 'reactstrap';
import Button from '../../Button';

export default function VerifyOtp(props) {
  const {
    showModal,
    hideModal,
    phone,
    setPhone,
    title,
    description,
    buttonLabel,
    handleSubmit,
    loading,
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

            <div className="inputbox-with-one-input">
              <input
                placeholder="Phone"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

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
          </div>
        </div>
      </Modal>
    </div>
  );
}
