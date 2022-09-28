import React, { useState } from "react";

import {
    Box,
    Button,
    Typography,
    FormControl,
    Paper,
    Snackbar,
    FormLabel,
    //For the tabs
    TextField,
    Alert
} from '@mui/material'

import { useSelector, useDispatch } from 'react-redux';
import { uploadSchool } from '../../features/school/schoolSlice';

export default function Upload() {
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const [upload, setUpload] = useState({
        name: "",
        lastname: "",
        subject: "",
        grade: 0,
        comments: "",
    })

    const dispatch = useDispatch()

    const isLoading = useSelector(state=> state.isLoading)
    const error = useSelector(state => state.error)

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        dispatch(uploadSchool(upload, `student`))
        if(isLoading === false)
            setState({ open: true, ...newState });
        else
        console.log(error)
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const handleChange = (e) =>{
        setUpload({
            ...upload,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Paper elevation={4} sx={{
            bgcolor: "white",
            width: "40%",
            textAlign: "center",
            margin: "auto",
            borderRadius: "5px",
        }}>
            <FormControl sx={{ alignItems: "center", width: "70%", padding: "20px 0" }}>
            <Box sx={{ display: "flex" }}>
                    <Box>
                        <FormLabel sx={{ padding: "0 0 0 10px" }}>Name</FormLabel>
                        <TextField
                            required
                            id="name-input"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px 0", borderRadius: "4px", width: "100%" }}
                        />
                    </Box>
                    <Box sx={{ margin: "0 0 0 10px" }}>
                        <FormLabel sx={{ padding: "0 0 0 10px" }}>LastName</FormLabel>
                        <TextField
                            required
                            id="lastname-input"
                            name="lastname"
                            type="text"
                            placeholder="Lastname"
                            onChange={handleChange}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px 0", borderRadius: "4px", width: "100%" }} />
                    </Box>
                </Box>
                <TextField
                    id="subject-input"
                    name="subject"
                    type="text"
                    value="Physics"
                    disabled
                    placeholder="Subject"
                    onChange={handleChange}
                    sx={{
                        bgcolor: "#D9D9D9",
                        margin: "10px",
                        borderRadius: "4px",
                        width: "100%"
                    }}
                />
                <TextField
                    required
                    id="grade-input"
                    name="grade"
                    type="number"
                    placeholder="Grade"
                    onChange={handleChange}
                    sx={{
                        bgcolor: "#D9D9D9",
                        margin: "10px",
                        borderRadius: "4px",
                        width: "100%"
                    }}
                />
                <TextField
                    id="comments-input"
                    name="comments"
                    type="text"
                    placeholder="Comments (optional)"
                    multiline={true}
                    rows={4}
                    onChange={handleChange}
                    sx={{
                        bgcolor: "#D9D9D9",
                        margin: "10px",
                        borderRadius: "4px",
                        width: "100%"
                    }}
                />
                <Button
                    onClick={handleClick({
                        vertical: 'bottom',
                        horizontal: 'right',
                    })}
                    sx={{
                        bgcolor: "#F2994A",
                        borderRadius: 20,
                        width: "80%",
                        "&:hover": {
                            bgcolor: "#E46B00"
                        }
                    }}>
                    <Typography sx={{ color: "black" }}>
                        Upload
                    </Typography>
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    autoHideDuration={1}
                    open={open}
                    key={vertical + horizontal}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}>
                        <Typography sx={{ color: "black", textDecoration: "bold" }}>
                            Grade upload
                        </Typography>

                    </Alert>
                </Snackbar>
            </FormControl>
        </Paper>
    )
}