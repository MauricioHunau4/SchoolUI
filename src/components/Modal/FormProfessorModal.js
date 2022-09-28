import React, { useState } from "react"
import { Button, TextField, Typography } from "@mui/material"

 const FormProfessorModal = (props)=>{
    const [studentChange, setStudentChange]=useState({
        subject:props.subject,
        grade:props.grade,
        date:props.date,
        comment:""  
    })

    const handleChange =(e)=>{
        setStudentChange({
            ...studentChange,[e.target.name]: e.target.value
        })
    }

    const closingForm = (props)=>{
        props.handleClosing()
        //dispatch(consultar a la base de datos).then(props.handleClosing)
    }

    return(<>
    <form onSubmit={closingForm(props.handleClosing)}>
        <Typography sx={{ fontSize: "30px" }}>Mauricio</Typography>
        <TextField
            id="subject-input"
            name="subject"
            type="text"
            value= {studentChange.subject}
            placeholder="Subject"
            onChange={handleChange}
                    //value={`${props.subject}`}
        />
        <TextField
            id="grade-input"
            name="grade"
            type="text"
            value={studentChange.grade}
            placeholder="Grade" 
            onChange={handleChange}
        />
        <TextField
            id="date-input"
            name="date"
            type="text"
            value={studentChange.date}
            placeholder="Date of the grade" 
            onChange={handleChange}
        />
        <TextField
            id="comment-input"
            name="comment"
            type="text"
            multiline={true}
            rows={4}
            placeholder="Comment"
            onChange={handleChange}
        />
        <Button type='submit' onClick={closingForm(props.handleClosing)}>
        button
    </Button>
    </form>
    </>)

    
}

export default FormProfessorModal