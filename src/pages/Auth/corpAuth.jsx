import React, { useState } from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import validator from 'validator';
import ToggleInput from '../../shared/ToggleInput';
import { customBaseUrl, httpPost } from '../../../action/http';
import Button from '../../shared/Button';
import { hideLoader } from '../../../utils/loader';
import Logo from '../../../assets/image/wayaIcon.png';

const CorpAppLoginPage = () => {
  const [data, setData] = useState({
    password: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    setLoading(true);
    if (validator.isEmpty(data.password)) {
      setLoading(false);
      swal('Oops!', 'Password cannot be empty', 'error');
      return;
    }
    const res = await httpPost(
      '/api/v1/auth/login/passcode',
      { emailOrPhoneNumber: data.email, passcode: data.password },
      customBaseUrl.authUrl
    );
    if (res.status) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user.userId);
      history.push('/products');
      setLoading(false);
    } else {
      setLoading(false);
      hideLoader(false);
      swal('Wrong!', res.message, 'error');
    }
  };

  return (
    <div id='login-bg'>
      <div id='login-modal' className='my-auto modal-body-rs-log col-12'>
        <div id='' className='modal-body-rs-log col-12'>
          <div className='waya-modal-body-log mt-3 mb-5'>
            <div className='header-sec-modal-log'>
              <img className='header-sec-logo-log mx-auto' src={Logo} alt='' />
            </div>
            <h5 className='modal-header-data-log'>
              Kindly Enter Login Credentials To Proceed
            </h5>

            <form>
              <div className='inputbox-with-one-input-log'>
                <input
                  placeholder='Email or Phone number'
                  type='text'
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className='inputbox-with-one-input-log toggle-pass-wrapper'>
                <ToggleInput
                  placeholder='Password'
                  type='password'
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
            </form>
            <div className='submit-modal-btn-wrap-log'>
              <Button
                type='button'
                loading={loading}
                onClick={handleLogin}
                content='Login'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorpAppLoginPage;
