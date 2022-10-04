import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'


function SelectionClass(props) {
   
    return (
        <Box sx={{ width: "30%", margin: "auto", padding: "20px 0 0 0", display: "flex", gap: "30px", justifyContent:"center" }}>
            <FormControl sx={{width:"30%"}}>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.classSelection}
                    label="Class"
                    onChange={props.handleChange}
                ><MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {classes.map((classes) => {
                        return <MenuItem value={classes} key={classes}>{classes}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button sx={{ color: "black", bgcolor: "#F2994A", width: "30%" }} >
                Add Grades
            </Button>
        </Box>
    )
}

export default SelectionClass

const classes = [101, 102, 103, 104]