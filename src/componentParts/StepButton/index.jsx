import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../Button';

function StepButton({ title, onClick, className, loading }) {
  return (
    <div className='w-100 mt-2 text-center'>
      <Button
        type='button'
        loading={loading}
        disabled={loading || false}
        onClick={onClick}
        content={title}
        className={`finish-card ${className}`}
      />
    </div>
  );
}

StepButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StepButton;
