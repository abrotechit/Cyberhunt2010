import React, { useState, useContext, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import validator from 'validator';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Button from '../Button';
import securePinImg from '../../assets/images/secure-pin.png';
import { ProfileContext } from '../../../store/context/ProfileContext';
import { customBaseUrl, httpPost } from '../../services/http';

export default function PinModal(props) {
  const {
    showModal,
    hideModal,
    separator,
    title,
    description,
    buttonLabel,
    isResendOtp,
    numInputs,
    resendOtp,
    setShowResendOtp,
    createPinVerified,
    setCreatePinVerified,
    otp,
    setOtp,
    setShowPinVerify,
    otpType,
    setOtpType,
    setLoading,
    loading,
  } = props;
  const [pin, setPin] = useState('');
  const [confirmOtp, setConfirmOtp] = useState('');
  // const [loading, setLoading] = useState(false);
  const {
    profile: { email, phoneNumber },
    setReloadUser,
  } = useContext(ProfileContext);

  // create pin
  const handleSubmit = async () => {
    setLoading(true);

    if (!validator.equals(pin, confirmOtp)) {
      swal('Oops!', 'Pin do not match', 'error');
      setLoading(false);
      return;
    }

    if (pin === '') {
      swal('Oops!', 'Pin is required', 'error');
      setLoading(false);
      return;
    }

    const data = {
      phoneOrEmail: otpType === 'email' ? email : phoneNumber,
      pin: Number(pin),
      otp,
    };

    const res = await httpPost(
      '/api/v1/pin/create-pin',
      data,
      customBaseUrl.authUrl
    );
    if (res.status) {
      setLoading(false);
      setPin('');
      swal('Done', res.message, 'success').then(() => {
        setShowPinVerify(false);
        setReloadUser(true);
        setOtp('');
        setOtpType('');
        hideModal(false);
      });
    } else {
      setLoading(false);
      setCreatePinVerified(false);
      swal('Oops!', res.message, 'error');
    }
  };

  useEffect(() => {
    if (createPinVerified && pin !== '') {
      handleSubmit();
    }
  }, [createPinVerified]);

  return (
    <div id='pin-modal'>
      <Modal isOpen={showModal} centered>
        <ModalHeader className='justify-content-center border-0'>
          <div className='text-center'>
            <img src={securePinImg} alt='pin' style={{ height: '163px' }} />
          </div>
          <div>
            <h1 className='modal-header-data mb-0'>{title}</h1>

            <p className='text-center text-secondary mt-2'>{description}</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className='col-sm-12 col-md-10 mx-auto'>
            <div className='mt-4'>
              <p className='mb-0'>Input Pin</p>
              <OtpInput
                value={pin}
                onChange={(e) => setPin(e)}
                numInputs={numInputs}
                separator={separator}
                containerStyle={{ justifyContent: 'space-between' }}
                inputStyle='otp-inputs'
                isInputSecure
              />
            </div>
            <div className='mt-4'>
              <p className='mb-0'>Confirm New Pin</p>
              <OtpInput
                value={confirmOtp}
                onChange={(e) => setConfirmOtp(e)}
                numInputs={numInputs}
                separator={separator}
                containerStyle={{ justifyContent: 'space-between' }}
                inputStyle='otp-inputs'
                isInputSecure
              />
            </div>

            <div className='mt-4 mb-4 text-center'>
              <Button
                type='button'
                className='btn btn-primary btn-lg w-100'
                loading={loading}
                disabled={loading || false}
                onClick={() => setShowResendOtp(true)}
                content={buttonLabel}
              />
            </div>
            <div className={!isResendOtp ? 'd-none' : 'mt-3 text-center'}>
              <a
                className={
                  !isResendOtp ? 'd-none' : 'text-dark decoration-none'
                }
                onClick={() => {
                  hideModal(false);
                  resendOtp(true);
                }}
                role='button'
                tabIndex={0}
                aria-hidden='true'
                href='/#'
              >
                Resend Code
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

PinModal.defaultProps = {
  separator: <span>-</span>,
  title: '',
  description: '',
  buttonLabel: 'Login',
  numInputs: 4,
};

PinModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  separator: PropTypes.node,
  buttonLabel: PropTypes.string,
  isResendOtp: PropTypes.bool.isRequired,
  numInputs: PropTypes.number,
  resendOtp: PropTypes.func.isRequired,
};
