import React, { useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import validator from 'validator';
import { Modal } from 'reactstrap';
import './index.scss';
import ToggleInput from '../ToggleInput';
import { customBaseUrl, httpPost } from '../../services/http';
import Button from '../Button';

const ResetPassword = (props) => {
  const { showModal, hideModal, center, setShowSignupModal } = props;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validator.isEmpty(password)) {
      swal('Oops!', 'Password cannot be empty', 'error');
      setLoading(false);
      return;
    }
    if (!validator.equals(password, confirmPassword)) {
      swal('Oops!', 'Password do not match', 'error');
      setLoading(false);
      return;
    }
    if (validator.isEmpty(pin)) {
      swal('Oops!', 'Pin cannot be empty', 'error');
    }
    const postData = {
      phoneOrEmail: localStorage.getItem('email'),
      newPassword: password,
      otp: Number(pin),
    };
    const res = await httpPost(
      `/api/v1/password/forgot-password`,
      postData,
      customBaseUrl.authUrl,
      true
    );
    if (res.status) {
      setLoading(false);
      swal('Done', res.message, 'success').then(() => {
        hideModal(false);
        localStorage.removeItem('email');
      });
    } else {
      setLoading(false);
      swal('Oops!', res.message, 'error');
    }
  };

  return (
    <div id='reset-password-modal'>
      <Modal
        open={showModal}
        onClose={() => hideModal(false)}
        top
        animationDuration={400}
        center={center}
      >
        <div className='modal-body-rs col-sm-12 col-md-10'>
          <div className='header-sec-modal'>
            <input
              type='image'
              onClick={() => hideModal(false)}
              className='header-img1'
              src='./assets/image/back.png'
              alt=''
              style={{ opacity: 0 }}
            />
            <img
              className='header-sec-logo'
              src='./assets/image/appLogo.png'
              alt=''
            />
            <input
              type='image'
              onClick={() => hideModal(false)}
              className='header-img1'
              src='./assets/image/x.png'
              alt=''
              style={{ opacity: 0 }}
            />
          </div>

          <div className='waya-modal-body'>
            <h1 className='modal-header-data'>Reset Password?</h1>

            <h6
              className='text-secondary text-center'
              style={{ marginBottom: '50px' }}
            >
              Fill in your new password.
            </h6>

            <div className='inputbox-with-one-input toggle-pass-wrapper'>
              <ToggleInput
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='inputbox-with-one-input confirm-password toggle-pass-wrapper'>
              <ToggleInput
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className='inputbox-with-one-input'>
              <input
                placeholder='Otp'
                type='text'
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <div
              className='submit-modal-btn-wrap'
              style={{ marginBottom: '50px' }}
            >
              <Button
                type='button'
                loading={loading}
                onClick={handleSubmit}
                content='Reset Password'
              />
            </div>

            <div className='back text-center' style={{ marginBottom: '50px' }}>
              <span className='text-secondary'>
                Dont have an account?{' '}
                <a
                  className='text-secondary-dark'
                  href='/#'
                  onClick={(e) => {
                    e.preventDefault();
                    hideModal(false);
                    setShowSignupModal(true);
                  }}
                >
                  Sign up instead{' '}
                </a>
              </span>
            </div>

            <div className='modal-footer p-0'>
              <div
                className='d-flex text-center w-100'
                style={{ justifyContent: 'space-between' }}
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

ResetPassword.propTypes = {
  hideModal: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  center: PropTypes.bool.isRequired,
};

export default ResetPassword;
