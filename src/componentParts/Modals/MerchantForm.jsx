import React, { useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import validator from 'validator';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Button from '../Button';

export default function MerchantForm(props) {
  const { setPage, setData, data, businessTypes } = props;
  const [loading, setLoading] = useState(false);

  // const businessTypeOptions = [
  //   'Catering and Food',
  //   'Cakes and Pastries',
  //   'Event Planning',
  //   'Music and DJ',
  //   'Event Courier and Logistics',
  //   'Logistics',
  //   'Health and Skin Care',
  //   'Fashion',
  //   'Clothing  ,Accessories, and Shoes',
  //   'Makeup',
  //   'Hairs',
  //   'Computer, Accessories, and Services',
  //   'Babies and Kids',
  //   'Art, Crafts, and Collectibles',
  //   'Home and Gardens',
  //   'Groceries',
  //   'Transportation',
  //   'Pharmacy/ Hospital',
  //   'Aggregator',
  //   'Others',
  // ];

  return (
    <form>
      <div className='inputbox-with-one-input'>
        <input
          placeholder='Organization Name'
          type='text'
          onChange={(e) => {
            setData({ ...data, orgName: e.target.value });
          }}
        />
      </div>

      <div className='inputbox-with-one-input'>
        <select
          value={data.businessType}
          onChange={(e) => {
            setData({ ...data, businessType: e.target.value });
          }}
        >
          <option value='' selected data-default hidden>
            Business Type
          </option>
          {businessTypes.length
            ? businessTypes.map((item) => (
                <option value={item.businessType} key={item}>
                  {item.businessType}
                </option>
              ))
            : ''}
        </select>
      </div>

      <div className='inputbox-with-one-input'>
        <input
          placeholder='Organization Email Address'
          type='text'
          onChange={(e) => {
            setData({ ...data, orgEmail: e.target.value });
          }}
        />
      </div>

      <div className='inputbox-with-one-input'>
        <PhoneInput
          placeholder='Organization Phone Number'
          defaultCountry='NG'
          international
          value={data.orgPhone}
          onChange={(e) => setData({ ...data, orgPhone: e })}
        />
      </div>

      {/* <div className="form-group">
        <input type="checkbox" id="term" />{' '}
        <span className="add-cursor">
          By signing up, you agree with the{' '}
          <a href="/#" className="primary-link">
            terms and conditions
          </a>
        </span>
      </div> */}

      <div className='submit-modal-btn-wrap'>
        <Button
          type='button'
          loading={loading}
          content='Next'
          onClick={() => {
            setLoading(true);
            // console.log(data);
            if (validator.isEmpty(data.orgName)) {
              swal('Oops!', 'Organization name cannot be empty', 'error');
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.businessType)) {
              swal('Oops!', 'Business type cannot be empty', 'error');
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.orgEmail)) {
              swal('Oops!', 'Organization email cannot be empty', 'error');
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.orgPhone)) {
              swal('Oops!', 'Organization phone cannot be empty', 'error');
              setLoading(false);
              return;
            }
            setPage(2);
          }}
        />
      </div>
    </form>
  );
}

MerchantForm.propTypes = {
  setPage: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired,
};
