import React, { useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import swal from 'sweetalert';
import validator from 'validator';
import Button from '../Button';
import ToggleInput from '../ToggleInput';
import TermsAndCondition from './Terms/TermsAndCondition';
import PrivacyPolicy from './Terms/PrivacyPolicy';

const MerchantForm3 = (props) => {
  const { setData, data, handleSignup, loading, setLoading } = props;
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <form>
      <div className='inputbox-with-one-input'>
        <input
          placeholder='Referral Code'
          type='text'
          onChange={(e) => {
            setData({ ...data, referenceCode: e.target.value });
          }}
        />
      </div>

      <div className='inputbox-with-one-input toggle-pass-wrapper'>
        <ToggleInput
          placeholder='Password'
          type='password'
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
      </div>

      <div className='inputbox-with-one-input toggle-pass-wrapper'>
        <ToggleInput
          placeholder='Confirm Password'
          type='password'
          onChange={(e) => {
            setData({ ...data, confirmPassword: e.target.value });
          }}
        />
      </div>

      <div className='form-group'>
        <input type='checkbox' id='term2' />{' '}
        <span className='add-cursor'>
          By signing up, you agree with the{' '}
          <a href='/#' className='primary-link'>
            terms and conditions
          </a>{' '}
          and{' '}
          <a
            href='/#'
            className='primary-link'
            onClick={() => {
              setShowPrivacy(true);
            }}
          >
            privacy policy
          </a>
        </span>
      </div>

      <div className='submit-modal-btn-wrap'>
        <Button
          type='button'
          loading={loading}
          content='Create Account'
          disabled={loading || false}
          onClick={() => {
            setLoading(true);
            const term = $('#term2').is(':checked');
            if (!term) {
              swal('Oops!', 'Please Agree to Terms & conditions', 'error');
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.password)) {
              swal('Oops!', 'Password cannot be empty', 'error');
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.confirmPassword)) {
              swal('Oops!', 'Confirm password cannot be empty', 'error');
              setLoading(false);
              return;
            }
            handleSignup();
          }}
        />
      </div>
      {showTerms ? (
        <TermsAndCondition showModal={showTerms} hideModal={setShowTerms} />
      ) : (
        ''
      )}
      {showPrivacy ? (
        <PrivacyPolicy showModal={showPrivacy} hideModal={setShowPrivacy} />
      ) : (
        ''
      )}
    </form>
  );
};

MerchantForm3.defaultProps = {
  loading: false,
};

MerchantForm3.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired,
  handleSignup: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default MerchantForm3;
