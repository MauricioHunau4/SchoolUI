import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import FormModal from './FormModal';
import { modalEstructure } from '../../DesignConst';

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
            <Box sx={modalEstructure}>
                <FormModal
                    handleClosing={handleOpenClose}
                    student={props.student} 
                    grade={props.grade} 
                    date={props.date} 
                    name={props.name}
                    email={props.email}
                    classes={props.classes}
                    dateOfBirth={props.dateOfBirth}
                    subject={props.subject}
                    phoneNumber={props.phoneNumber}
                    comment={props.comment}
                />
            </Box>
        </Modal>
    </div>
    );
}

export default ModalEntities
