import React, { useState } from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";
import validator from "validator";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "../Button";

const MerchantForm2 = (props) => {
  const { setPage, setData, data } = props;
  const [loading, setLoading] = useState(false);
  return (
    <form>
      <div className="inputbox-with-one-input">
        <input
          placeholder="Surname"
          type="text"
          onChange={(e) => {
            setData({ ...data, surname: e.target.value });
          }}
        />
      </div>

      <div className="inputbox-with-one-input">
        <input
          placeholder="First name"
          type="text"
          onChange={(e) => {
            setData({ ...data, firstName: e.target.value });
          }}
        />
      </div>

      <div className="inputbox-with-one-input">
        <input
          placeholder="Personal Email"
          type="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
      </div>

      <div className="inputbox-with-one-input">
        <PhoneInput
          placeholder="Phone Number"
          defaultCountry="NG"
          international
          value={data.phoneNumber}
          onChange={(e) => setData({ ...data, phoneNumber: e })}
        />
      </div>

      <div className="inputbox-with-one-input">
        <input
          placeholder="State"
          type="text"
          onChange={(e) => {
            setData({ ...data, state: e.target.value });
          }}
        />
      </div>

      <div className="inputbox-with-one-input">
        <input
          placeholder="City"
          type="text"
          onChange={(e) => {
            setData({ ...data, city: e.target.value });
          }}
        />
      </div>

      <div className="inputbox-with-one-input">
        <input
          placeholder="Office Address"
          type="text"
          onChange={(e) => {
            setData({ ...data, officeAddress: e.target.value });
          }}
        />
      </div>

      <div className="submit-modal-btn-wrap">
        <Button
          type="button"
          loading={loading}
          content="Next"
          onClick={() => {
            setLoading(true);
            // console.log(data);
            if (validator.isEmpty(data.surname)) {
              swal("Oops!", "Surname cannot be empty", "error");
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.firstName)) {
              swal("Oops!", "First name cannot be empty", "error");
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.email)) {
              swal("Oops!", "Email cannot be empty", "error");
              setLoading(false);
              return;
            }
            if (!validator.isEmail(data.email)) {
              swal("Oops!", "Invalid Email Format", "error");
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.state)) {
              swal("Oops!", "State cannot be empty", "error");
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.city)) {
              swal("Oops!", "City cannot be empty", "error");
              setLoading(false);
              return;
            }
            if (validator.isEmpty(data.officeAddress)) {
              swal("Oops!", "Office Address cannot be empty", "error");
              setLoading(false);
              return;
            }
            setPage(3);
          }}
        />
      </div>
    </form>
  );
};

MerchantForm2.propTypes = {
  setPage: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape.isRequired,
};

export default MerchantForm2;
