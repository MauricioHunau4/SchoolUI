import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

function FormModal(props) {
    //let data = JSON.parse(sessionStorage.getItem('session'))

    return (<>
        <form>
            <Typography sx={{ fontSize: "30px" }}>Mauricio</Typography>
            <TextField
                id="subject-input"
                name="subject"
                type="text"
                placeholder="Subject"
            //value={`${props.subject}`}
            />
            <TextField
                id="grade-input"
                name="grade"
                type="text"
                placeholder="Grade" />
            <TextField
                id="comment-input"
                name="comment"
                type="text"
                multiline={true}
                rows={4}
                placeholder="Comment"
            />
        </form>
        <Button onClick={props.handleClosing}>
            button
        </Button>
    </>
    )

}

export default FormModal