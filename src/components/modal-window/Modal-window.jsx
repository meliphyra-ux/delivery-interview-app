import { useSelector, useDispatch } from 'react-redux';
import { selectModalStatus } from '../../store/modal/modalSelectors';
import { Box, Modal } from '@mui/material';
import styled from '@emotion/styled';
import { toggleModal } from '../../store/modal/modalActions';

const ModalBox = styled(Box)`
  background-color: #222222;
  color: #f2f2f2;
  width: clamp(380px, 60vw, 900px);
`;

const ModalWindow = () => {
  const isOpen = useSelector(selectModalStatus);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(toggleModal());
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ModalBox>
        <h1>Success</h1>
      </ModalBox>
    </Modal>
  );
};

export default ModalWindow;
