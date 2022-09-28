import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { FormControl, TextField, Snackbar, Alert, FormLabel } from '@mui/material';


import { useDispatch, useSelector } from 'react-redux';
import { updateSchool } from '../../features/school/schoolSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ModalSchool(props) {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(false);

    const isLoading = useSelector(state=>state.isLoading)
    const error = useSelector(state => state.error)

    const dispatch = useDispatch()

    const [update, setUpdate] = useState({
        name:props.name,
        lastname:props.lastname,
        subject:props.subject,
        birth:props.birth,
        email:props.birth,
        phone:props.phoneNumber
    })
    
    const handleOpen = () => setOpen(!open);
    const handleCloseOutside = () => setOpen(!open)

    const handleClose = () => {
        if(props.subject !== undefined)
            dispatch(updateSchool(update, "professor"))
        else{
            dispatch(updateSchool(update, "student"))
            }
        if(!isLoading){
            setOpen(!open)
            setState(true)
        }else{
            console.log(error)
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
                    <FormControl sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "30px", margin: "auto" }}>Edit</Typography>
                        <Box sx={{ display: "flex" }}>
                            <Box>
                                <FormLabel sx={{ padding: "0  10px" }}>Name:</FormLabel>
                                <TextField
                                    id="name-input"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    defaultValue={`${props.name}`}
                                    onChange={handleChange}
                                    sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                                />
                            </Box>
                            <Box sx={{ margin: "0 0 0 10px" }}>
                                <FormLabel sx={{ padding: "0  10px" }}>LastName:</FormLabel>
                                <TextField
                                    id="lastname-input"
                                    name="lastname"
                                    type="text"
                                    placeholder="Lastname"
                                    onChange={handleChange}
                                    defaultValue={`${props.lastname}`}
                                    sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                                />
                            </Box>
                        </Box>
                        {props.subject !== undefined ? <><FormLabel sx={{ padding: "0  10px" }}>Subject:</FormLabel>
                            <TextField
                                id="subject-input"
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                onChange={handleChange}
                                defaultValue={`${props.subject}`}
                                sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                            /></> : <><FormLabel sx={{ padding: "0  10px" }}>Date of birth:</FormLabel>
                            <TextField
                                id="dateOfBirth-input"
                                name="dateOfBirth"
                                type="date"
                                placeholder="Date of birth"
                                onChange={handleChange}
                                defaultValue={`${props.birth}`}
                                sx={{ bgcolor: "#D9D9D9", margin: "10px 10px 30px 10px", borderRadius: "4px", width: "100%" }}
                            /></>}
                        <FormLabel sx={{ padding: "0  10px" }}>Email:</FormLabel>
                        <TextField
                            id="email-input"
                            name="email"
                            type="text"
                            placeholder="Email"
                            onChange={handleChange}
                            defaultValue={`${props.email}`}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px", borderRadius: "4px", width: "100%" }}
                        />
                        <FormLabel sx={{ padding: "0  10px" }}>Phone Number:</FormLabel>
                        <TextField
                            id="phoneNumber-input"
                            name="phoneNumber"
                            type="text"
                            placeholder="Phone number"
                            onChange={handleChange}
                            defaultValue={`${props.phoneNumber}`}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px 10px 30px 10px", borderRadius: "4px", width: "100%" }}
                        />
                        <Button
                            onClick={handleClose}
                            sx={{
                                bgcolor: "#F2994A",
                                borderRadius: 20,
                                width: "80%",
                                margin: "auto",
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
                        Entitie updated
                    </Typography>
                </Alert>
            </Snackbar>
        </Box >
    );
}
