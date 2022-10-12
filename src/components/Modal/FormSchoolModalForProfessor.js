import { Button, FormControl, TextField, Typography } from "@mui/material"
import React, { useState } from 'react'

function FormSchoolModalForProfessor(props) {
  
  const [ProfessorChange, setProfessorChange] = useState({
    name: props.name,
    subject: props.subject,
    email: props.email,
    phoneNumber: props.phoneNumber
})

const handleProfessorChange = (e) =>{
  setProfessorChange({...ProfessorChange, [e.target.name]: e.target.value })
}
  return (
    <>
        <FormControl sx={{ width: "100%", margin: "auto", gap: "10px" }}>
            <Typography sx={{ fontSize: "30px", textAlign: "center" }}>Edit professor</Typography>
            <TextField
                sx={{ bgcolor: "white" }}
                name="name"
                type="text"
                defaultValue={props.name}
                placeholder="Name"
                onChange={handleProfessorChange}
                id="outlined-name"
                label="Name"
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="subject"
                type="text"
                defaultValue={props.subject}
                placeholder="Subject"
                onChange={handleProfessorChange}
                id="outlined-subject"
                label="Subject"
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="email"
                id="outlined-email"
                label="Email"
                defaultValue={props.email}
                placeholder="Email"
                onChange={handleProfessorChange}
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="phoneNumber"
                id="outlined-phoneNumber"
                label="Phone number"
                type="text"
                placeholder="Phone number"
                defaultValue={props.phoneNumber}
                onChange={handleProfessorChange}
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
    </>
  )
}

export default FormSchoolModalForProfessor