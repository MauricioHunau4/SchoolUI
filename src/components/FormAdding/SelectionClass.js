import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

function SelectionClass(props) {
    let data = JSON.parse(sessionStorage.getItem('session'))
    const check = useSelector(state => state.school.dataAdding)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const addingGrades = () => {
        if (check.length === 0) {
            handleClick()
        }
    }
    if (data.entitie === "professor") {
        return (
            <Box sx={{ width: "30%", margin: "auto", padding: "20px 0 0 0", display: "flex", gap: "30px", justifyContent: "center" }}>
                <FormControl sx={{ width: "30%" }}>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.classSelection}
                        label="Class"
                        onChange={props.handleChange}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {classes.map((classes) => {
                            return <MenuItem value={classes} key={classes}>{classes}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <Button sx={{ color: "black", bgcolor: "#F2994A", width: "30%" }} onClick={addingGrades} >
                    Add Grades
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="No grades registered"
                    action={action}
                />
            </Box>
        )
    } else {
        return (
            <Box sx={{ width: "30%", margin: "auto", padding: "20px 0 0 0", display: "flex", gap: "30px", justifyContent: "center" }}>
                <FormControl sx={{ width: "30%" }}>
                    <InputLabel id="demo-simple-select-label">Entitie</InputLabel>
                    <Select
                        sx={{ bgcolor:'whitesmoke' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.addingEntitie}
                        label="Entitie"
                        onChange={props.handleAddingEntitie}
                    >
                        <MenuItem value="professor">Professor</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                    </Select>
                </FormControl>
                {props.addingEntitie !== 'professor' && (<><FormControl>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                        sx={{ width: "100%", bgcolor:'whitesmoke' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.classAddingSelection}
                        label="Class"
                        onChange={props.handleChangeAddingSelection}>
                        {classes.map((classes) => {
                            return <MenuItem value={classes}>{classes}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <Button sx={{ color: "black", bgcolor: "#F2994A", width: "30%" }} onClick={addingGrades} >
                    Add Students
                </Button>
                </>)}
            </Box>
        )
    }
}

export default SelectionClass

const classes = [101, 102, 103, 104]