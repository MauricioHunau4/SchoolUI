import React from 'react'
import { Button, FormControl, TextField, Typography } from "@mui/material"
import { useState } from "react"

function FormSchoolModalForStudent(props) {

    const [studentChange, setStudentChange] = useState({
        name: props.name,
        classes: props.classes,
        email: props.email,
        dateOfBirth: props.dateOfBirth
    })

    const handleStudentChange = (e) => {
        setStudentChange({ ...studentChange, [e.target.name]: e.target.value })
    }

    return (<>
        <FormControl sx={{ width: "100%", margin: "auto", gap: "10px" }}>
            <Typography sx={{ fontSize: "30px", textAlign: "center" }}>Edit student</Typography>
            <TextField
                sx={{ bgcolor: "white" }}
                name="name"
                type="text"
                defaultValue={props.name}
                placeholder="Name"
                onChange={handleStudentChange}
                id="outlined-name"
                label="Name"
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="classes"
                type="text"
                defaultValue={props.classes}
                placeholder="Class"
                onChange={handleStudentChange}
                id="outlined-subject"
                label="Class"
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="email"
                id="outlined-email"
                label="Email"
                defaultValue={props.email}
                placeholder="Email"
                onChange={handleStudentChange}
            />
            <Typography>Date of Birth</Typography>
            <TextField
                sx={{ bgcolor: "white" }}
                id="outlined-date"
                name="date"
                type="date"
                defaultValue={props.dateOfBirth}
                onChange={handleStudentChange}
            />
            <Button
                sx={{
                    color: "black",
                    bgcolor: "#F2994A",
                    width: "100%",
                    padding: '15px'
                }}
                type='submit'>
                Edit
            </Button>
        </FormControl>
    </>)
}

export default FormSchoolModalForStudent