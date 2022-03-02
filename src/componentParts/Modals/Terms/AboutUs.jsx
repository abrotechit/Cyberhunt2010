import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import { customBaseUrl, httpGet } from '../../../../action/http';
import StepButton from '../../StepButton';
import createMarkup from '../../../../utils/htmlEncode';

export default function TermsAndCondition(props) {
  const { showModal, hideModal } = props;
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTerms = async () => {
    const res = await httpGet(`${customBaseUrl.contentManagementUrl}/about-us`);
    if (res.status) {
      setTerms(res.data.aboutUs.find((item) => item.active).aboutUs);
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
          <div>About Us </div>
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
          </div>
        )}
        {terms ? (
          <StepButton
            title='Confirm'
            onClick={() => hideModal(false)}
            className=' border-primary'
          />
        ) : (
          ''
        )}
      </ModalBody>
    </Modal>
  );
}
