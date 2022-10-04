import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function AddingTab2() {
    const [classSelection, setClassSelection] = useState("")

    const handleClassSelection = (e) => {
        setClassSelection(e.target.value)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", position: "absolute", top: "50%", left: "50%", gap: "10px", transform: "translate(-50%,10%)", width: "25%" }}>
            <Typography>Adding Grade</Typography>
            <TextField type='text'
                id="outlined-basic"
                label="Student"
                variant="outlined" />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={classSelection}
                    label="Class"
                    onChange={handleClassSelection}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {classes.map((classes) => {
                        return <MenuItem value={classes} key={classes}>{classes}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <TextField type='text'
                id="outlined-basic"
                label="Subject"
                variant="outlined" />
            <TextField type='number'
                id="outlined-basic"
                label="Grade"
                variant="outlined" />
            <TextField type='text'
                placeholder='Comment'
                multiline={true}
                rows={4} />
            <Button>Add Grade</Button>
        </Box>
    )
}

export default AddingTab2

const classes = [101, 102, 103, 104]