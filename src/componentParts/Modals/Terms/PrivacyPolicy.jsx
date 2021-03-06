import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import { customBaseUrl, httpGet } from '../../../services/http';
import createMarkup from '../../../utils/htmlEncode';
import StepButton from '../../StepButton';

export default function PrivacyPolicy(props) {
  const { showModal, hideModal } = props;
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTerms = async () => {
    const res = await httpGet(
      `${customBaseUrl.contentManagementUrl}/privacy?page=0`
    );
    if (res.status) {
      setTerms(res.data.privacyPolicies.find((item) => item.active).content);
      setLoading(true);
    }
  };

  useEffect(() => {
    getTerms();
    return setTerms(null);
  }, []);

  return (
    <Modal
      isOpen={showModal}
      toggle={() => hideModal(false)}
      centered
      id='Terms-modal'
    >
      <ModalHeader className='' toggle={() => hideModal(false)}>
        <div className='custome-header'>
          <div>Privacy Policy</div>
        </div>
      </ModalHeader>
      <ModalBody className='modal-body-rs col-sm-12 col-md-10 pt-4'>
        {!loading ? (
          <div className=''>
            <Skeleton height={500} width={400} />
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              maxHeight: '620px',
              overflowY: 'auto',
              padding: '2px 0px 32px',
              position: 'relative',
            }}
          >
            {/* eslint-disable react/no-danger */}
            <div
              className='html-div p-0'
              dangerouslySetInnerHTML={createMarkup(terms)}
            />
          </div>
        )}
        {terms ? (
          <StepButton title='Confirm' onClick={() => hideModal(false)} />
        ) : (
          ''
        )}
      </ModalBody>
    </Modal>
  );
}
