import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import FormModal from './FormModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'antiquewhite',
    border: 'none',
    borderRadius:"15px",
    boxShadow: 24,
    p: 4,
};

function ModalEntities(props) {
    const [open, setOpen] = useState(false);
    const handleOpenClose = () => setOpen(!open);
    

    return (<div>
        <Button onClick={handleOpenClose}>
            <EditIcon sx={{ color: "black" }} />
        </Button>
        <Modal
            open={open}
            onClose={handleOpenClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <FormModal handleClosing={handleOpenClose}/>
                
            </Box>
        </Modal>
    </div>
    );
}

export default ModalEntities

/*import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
} */