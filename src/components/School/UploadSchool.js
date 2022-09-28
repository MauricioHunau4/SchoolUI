import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { uploadSchool } from "../../features/school/schoolSlice";

import {
    Box,
    Button,
    Typography,
    FormControl,
    Paper,
    Snackbar,
    //For the tabs
    TextField,
    Alert,
    FormLabel,
    MenuItem,
    InputLabel,
    Select
} from '@mui/material'


export default function UploadSchool() {
    //React-redux
    const dispatch = useDispatch()
    const [entitie, setEntitie] = useState('');
    //handles
    const [upload, setUpload] = useState({
        name: "",
        lastname: "",
        subject: "",
        entitie: "",
        dateOfBirth: "",
        email: "",
        phoneNumber: 0
    })

    const handleUpload = (e) => {
        setUpload({
            ...upload,
            [e.target.name]: e.target.value
        })
    }

    //Select
    const handleChange = (e) => {
        setEntitie(e.target.value);
    };

    //Snackbar
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        upload.entitie = entitie
        dispatch(uploadSchool(upload, `${entitie}`))
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const date = new Date()
    const year = date.getFullYear()
    const defaultValueYear = year - 18

    return (
        <Paper elevation={4} sx={{
            bgcolor: "white",
            width: "40%",
            textAlign: "center",
            margin: "auto",
            borderRadius: "5px",
        }}>
            <FormControl sx={{ width: "70%", padding: " 20px 0" }}>
                <Box sx={{ display: "flex" }}>
                    <Box>
                        <FormLabel sx={{ padding: "0 0 0 10px" }}>Name</FormLabel>
                        <TextField
                            required
                            id="name-input"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={handleUpload}
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
                            onChange={handleUpload}
                            sx={{ bgcolor: "#D9D9D9", margin: "10px 0", borderRadius: "4px", width: "100%" }} />
                    </Box>
                </Box>
                <div>
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Entitie</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={entitie}
                            onChange={handleChange}
                            autoWidth
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Professor"}>Professor</MenuItem>
                            <MenuItem value={"Student"}>Student</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {entitie === "Professor" ? <>
                    <TextField
                        required
                        id="subject-input"
                        name="subject"
                        type="text"
                        defaultValue={""}
                        placeholder="Subject"
                        onChange={handleUpload}
                        sx={{
                            bgcolor: "#D9D9D9",
                            margin: "10px 0",
                            borderRadius: "4px",
                            width: "100%"
                        }} /></> : entitie === "Student" ? <>
                            <FormLabel sx={{ margin: "5px 0 0 0" }}>Date of birth</FormLabel>
                            <TextField
                                required
                                id="dateOfBirth-input"
                                name="dateOfBirth"
                                type="date"
                                defaultValue={`${defaultValueYear}-01-01`}
                                min={`${defaultValueYear}-01-01`}
                                max={`${year}-12-31`}
                                onChange={handleUpload}
                                sx={{
                                    bgcolor: "#D9D9D9",
                                    margin: "10px 0",
                                    borderRadius: "4px",
                                    width: "100%"
                                }} /></> : <></>}

                <TextField
                    required
                    id="email-input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleUpload}
                    sx={{
                        bgcolor: "#D9D9D9",
                        margin: "10px 0",
                        borderRadius: "4px",
                        width: "100%"
                    }} />

                <TextField
                    required
                    id="phoneNumber-input"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone number"
                    onChange={handleUpload}
                    sx={{
                        bgcolor: "#D9D9D9",
                        margin: "10px 0 30px 0",
                        borderRadius: "4px",
                        width: "100%"
                    }} />
                <Button
                    onClick={handleClick({
                        vertical: 'bottom',
                        horizontal: 'right',
                    })}
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
                        Upload
                    </Typography>
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    autoHideDuration={1}
                    open={open}
                    key={vertical + horizontal}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}>
                        <Typography sx={{ color: "black", textDecoration: "bold" }}>
                            {entitie} upload
                        </Typography>
                    </Alert>
                </Snackbar>
            </FormControl>
        </Paper>
    )
}
