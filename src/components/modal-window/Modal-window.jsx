import { useSelector, useDispatch } from 'react-redux';

import { toggleModal } from '../../store/modal/modalActions';
import {
  selectModalStatus,
  selectModalText,
} from '../../store/modal/modalSelectors';

import styled from '@emotion/styled';
import { Box, Button, Modal, Typography } from '@mui/material';

const ModalBox = styled(Box)`
  margin: 20px;
  border-radius: 4px;
  background-color: #222222;
  color: #f2f2f2;
  width: clamp(380px, 60vw, 650px);
  height: max-content;
`;

const ModalWindow = () => {
  const isOpen = useSelector(selectModalStatus);
  const text = useSelector(selectModalText);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(toggleModal());

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transperent',
      }}
    >
      <ModalBox>
        <Typography
          variant="h5"
          sx={{
            padding: '30px 10px',
            textAlign: 'center',
          }}
        >
          {text}
        </Typography>
        <Button
          sx={{
            width: '100%',
            color: '#f2f2f2',
            paddingTop: '0.5rem',
            backgroundColor: '#222222',
          }}
          onClick={handleClose}
        >
          Close
        </Button>
      </ModalBox>
    </Modal>
  );
};

export default ModalWindow;
