import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { FormControl, TextField, Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import updateSchool from '../../features/school/schoolSlice'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(false);
    const dispatch = useDispatch()
    const [update, setUpdate] = useState({
        name:props.name,
        lastname:props.lastname,
        grade:props.grade,
        subject:props.subject
    })

    const handleOpen = () => setOpen(!open);
    const handleCloseOutside =() =>setOpen(!open) 

    const handleClose = () => {
        dispatch(updateSchool(update, "student"))
        if(true){
            setOpen(!open)
            setState(true)
        }else{
            console.log("error")
        }
    }

    const handleCloseSnackbar = () => {
        setState(false);
    };

    const handleChange = (e) =>{
        setUpdate({
            ...update,
            [e.target.name]:e.target.value
        })
    }

    return (
        <Box>
            <Button onClick={handleOpen}>
                <EditIcon sx={{ color: "black" }} />
            </Button>
            <Modal
                open={open}
                onClose={handleCloseOutside}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl sx={{ width: "100%", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "30px" }}>{props.name}{props.lastname}</Typography>
                        <TextField
                            id="subject-input"
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            disabled={true}
                            value={`${props.subject}`}
                            onChange={handleChange}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                        />
                        <TextField
                            id="grade-input"
                            name="grade"
                            type="number"
                            placeholder="Grade"
                            defaultValue={`${props.grade}`}
                            onChange={handleChange}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                        />
                        <TextField
                            id="reason-input"
                            name="reason"
                            type="text"
                            multiline={true}
                            rows={4}
                            placeholder="Reason"
                            onChange={handleChange}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                        />
                        <Button
                            onClick={handleClose}
                        sx={{
                            bgcolor: "#F2994A",
                            borderRadius: 20,
                            width: "80%",
                            "&:hover": {
                                bgcolor: "#E46B00"
                            }
                        }}>
                        <Typography sx={{ color: "black" }}>
                            Update
                        </Typography>
                    </Button>
                </FormControl>
        </Box>
            </Modal>
                <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        autoHideDuration={6000}
                        open={state}
                        
                    >
                        <Alert
                            onClose={handleCloseSnackbar}
                            severity="success"
                            sx={{ width: '100%' }}>
                            <Typography sx={{ color: "black", textDecoration: "bold" }}>
                                Grade updated
                            </Typography>
                        </Alert>
                    </Snackbar>
        </Box >
    );
}