import { useSelector, useDispatch } from 'react-redux';

import { toggleModal } from '../../store/modal/modalActions';
import {
  selectModalStatus,
  selectModalText,
} from '../../store/modal/modalSelectors';

import { ModalBox } from '../building-blocks/building-blocks';
import { Button, Modal, Typography } from '@mui/material';

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
