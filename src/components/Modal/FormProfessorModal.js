import React, { useState } from "react"
import { Button, FormControl, TextField, Typography } from "@mui/material"


import { useDispatch } from "react-redux";
import { snackBarCheck } from "../../features/school/schoolSlice";

const FormProfessorModal = (props) => {
    const [studentChange, setStudentChange] = useState({
        subject: props.subject,
        grade: props.grade,
        date: props.date,
        comment: props.comment
    })
    const dispatch= useDispatch()

    const handleChange = (e) => {
        setStudentChange({
            ...studentChange, [e.target.name]: e.target.value
        })
    }

    const closingForm = ()=>{
        dispatch(snackBarCheck(true))
    }

    return (<>
        <FormControl sx={{ width: "100%", margin: "auto", gap: "10px" }}>
            <Typography sx={{ fontSize: "30px", textAlign: "center" }}>{props.student}</Typography>
            <TextField
                sx={{ bgcolor: "white" }}
                name="subject"
                type="text"
                defaultValue={props.subject}
                placeholder="Subject"
                onChange={handleChange}
                id="outlined-subject"
                label="Subject"
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="grade"
                id="outlined-grade"
                label="Grade"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                defaultValue={props.grade}
                placeholder="Grade"
                onChange={handleChange}
            />
            <Typography>Date of the grade</Typography>
            <TextField
                sx={{ bgcolor: "white" }}
                id="date-input"
                name="date"
                type="date"
                defaultValue={props.date}
                placeholder="Date of the grade"
                onChange={handleChange}
            />
            <TextField
                sx={{ bgcolor: "white" }}
                id="comment-input"
                name="comment"
                type="text"
                defaultValue={props.comment}
                multiline={true}
                rows={4}
                placeholder="Comment"
                onChange={handleChange}
            />
            <Button type='submit' onClick={() => { props.handleClosing()
            closingForm()
             }}
             sx={{
                color: "black",
                bgcolor: "#F2994A",
                width: "100%",
                padding: '15px'
            }}
             >
                Edit grade
            </Button>
        </FormControl>
    </>)


}

export default FormProfessorModal


