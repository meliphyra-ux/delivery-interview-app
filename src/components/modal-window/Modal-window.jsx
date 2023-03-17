import { useSelector, useDispatch } from 'react-redux';
import { selectModalStatus, selectModalText } from '../../store/modal/modalSelectors';
import { Box, Modal, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { toggleModal } from '../../store/modal/modalActions';

const ModalBox = styled(Box)`
  margin: 20px;
  border-radius: 20px;
  background-color: #222222;
  color: #f2f2f2;
  width: clamp(380px, 60vw, 650px);
  height: max-content;
`;

const ModalWindow = () => {
  const isOpen = useSelector(selectModalStatus);
  const text = useSelector(selectModalText)
  const dispatch = useDispatch();

  const handleClose = () => dispatch(toggleModal());
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ModalBox>
        <Typography variant="h5" sx={{
          padding: '30px 10px',
          textAlign: 'center'
        }}>{text}</Typography>
      </ModalBox>
    </Modal>
  );
};

export default ModalWindow;
