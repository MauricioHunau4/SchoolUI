import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Snackbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

function SelectionClass(props) {
    const check = useSelector(state => state.school.dataAdding)
    const [open, setOpen] = React.useState(false);

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

    console.log(check)

    const addingGrades = () => {
        if (check.length === 0) {
            handleClick()
        }
    }

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
                ><MenuItem value="">
                        <em>None</em>
                    </MenuItem>
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
}

export default SelectionClass

const classes = [101, 102, 103, 104]