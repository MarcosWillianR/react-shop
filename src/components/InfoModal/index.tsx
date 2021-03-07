import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { FiX, FiAlertTriangle, FiCheck } from 'react-icons/fi';

import Button from '../Button';
import { useModal } from '../../hooks/Modal';

import { modalRoot } from '../../utils';

import { AppColors } from '../../styles/types';
import { Container } from './styles';

const InfoModal: React.FC = () => {
  const { closeInfoModal, infoModalData } = useModal();
  const [modalElement] = useState(document.createElement('div'));

  const renderButtonByStatus = useMemo(() => {
    if (infoModalData) {
      const buttonByStatus = {
        error: <Button onClick={closeInfoModal}>Ok</Button>,
        success: (
          <Button onClick={infoModalData?.successCallback || closeInfoModal}>
            Feito!
          </Button>
        ),
        warning: (
          <Button onClick={infoModalData?.warningCallback || closeInfoModal}>
            Entendido!
          </Button>
        ),
      };

      return buttonByStatus[infoModalData.infoStatus];
    }

    return null;
  }, [closeInfoModal, infoModalData]);

  const renderIconByStatus = useMemo(() => {
    if (infoModalData) {
      const iconByStatus = {
        error: <FiX size={64} color={AppColors.ERROR_COLOR} />,
        success: <FiCheck size={64} color={AppColors.SUCCESS_COLOR} />,
        warning: <FiAlertTriangle size={64} color={AppColors.WARNING_COLOR} />,
      };

      return iconByStatus[infoModalData.infoStatus];
    }

    return null;
  }, [infoModalData]);

  useEffect(() => {
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(
    <Container>
      <div className="infoModal__content">
        {infoModalData && (
          <>
            {renderIconByStatus}

            {infoModalData.title && <strong>{infoModalData.title}</strong>}

            <p>{infoModalData.description}</p>

            {renderButtonByStatus}
          </>
        )}
      </div>
    </Container>,
    modalElement,
  );
};

export default InfoModal;
