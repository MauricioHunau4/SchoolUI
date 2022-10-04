import React, { useState } from "react"
import { Button, FormControl, TextField, Typography } from "@mui/material"


import { useDispatch } from "react-redux";
import { snackBarCheck } from "../../features/school/schoolSlice";

const FormProfessorModal = (props) => {
    const [studentChange, setStudentChange] = useState({
        subject: props.subject,
        grade: props.grade,
        date: props.date,
        comment: ""
    })
    const dispatch= useDispatch()

    const handleChange = (e) => {
        setStudentChange({
            ...studentChange, [e.target.name]: e.target.value
        })
    }

    const closingForm = ()=>{
        dispatch(snackBarCheck(true))
        //dispatch(consultar a la base de datos).then(props.handleClosing)
    }

    return (<>
        <FormControl sx={{ width: "100%", margin: "auto", gap: "10px" }}>
            <Typography sx={{ fontSize: "30px", textAlign: "center" }}>Mauricio</Typography>
            <TextField
                sx={{ bgcolor: "white" }}
                name="subject"
                type="text"
                value={studentChange.subject}
                placeholder="Subject"
                onChange={handleChange}
                id="outlined-subject"
                label="Subject"
            //value={`${props.subject}`}
            />
            <TextField
                sx={{ bgcolor: "white" }}
                name="grade"
                id="outlined-grade"
                label="Grade"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={studentChange.grade}
                placeholder="Grade"
                onChange={handleChange}
            />
            <TextField
                sx={{ bgcolor: "white" }}
                id="date-input"
                name="date"
                type="date"
                value={studentChange.date}
                placeholder="Date of the grade"
                onChange={handleChange}
            />
            <TextField
                sx={{ bgcolor: "white" }}
                id="comment-input"
                name="comment"
                type="text"
                multiline={true}
                rows={4}
                placeholder="Comment"
                onChange={handleChange}
            />
            <Button type='submit' onClick={() => { props.handleClosing()
            closingForm()
             }}>
                button
            </Button>
        </FormControl>
    </>)


}

export default FormProfessorModal


