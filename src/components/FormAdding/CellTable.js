import { Box, Button, IconButton, Popover, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddCommentIcon from '@mui/icons-material/AddComment';
import { cellTable, letterTable } from '../../DesignConst';
import { useDispatch } from 'react-redux';
import { dataAdding } from '../../features/school/schoolSlice';

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
function CellTable(props) {
    const { student, subject } = props.demo
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorGrading, setErrorGrading] = useState(false)
    const [animation, setAnimation] =useState("")
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(false)

    const [informationStudents, setInformationStudents] = useState({
        name: props.demo.student,
        class:props.classSelection,
        subject: props.demo.subject,
        grade: 0,
        comment: "",
    })

    useEffect(()=>{
        setDisabled(false)
        setErrorGrading(false)
        return ()=>{
            dispatch(dataAdding("clear"))
        }
    },[props.classSelection, dispatch])

    const handleInformationStudents = (e) => {
        setInformationStudents({ ...informationStudents, [e.target.name]: e.target.value })
    }

    const handleCheck = () => {
        if ( informationStudents.grade > 0 && informationStudents.grade <11) {
            dispatch(dataAdding(informationStudents))
            setDisabled(true)
        } else {
            setErrorGrading(true)
            setAnimation("animate__animated animate__shakeX")
        }
    }
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (<Box sx={cellTable} >{disabled ?
        <CheckIcon /> :
        <IconButton onClick={handleCheck} >
            <AddIcon />
        </IconButton>}
        <Typography sx={letterTable}>{student}</Typography>
        <Typography sx={letterTable}>{subject}</Typography>
        <TextField
            sx={{ width: "5%" }}
            className={animation}
            error={errorGrading}
            id="outlined-error-helper-text"
            onChange={handleInformationStudents}
            name="grade"
            disabled={disabled} />
        <IconButton onClick={handleClick} disabled={disabled}>
            <AddCommentIcon />
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose1}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Box sx={{ padding: "5px" }}>
                <TextField sx={{ width: "100%" }}
                    placeholder="Comment..."
                    multiline={true}
                    rows={3}
                    onChange={handleInformationStudents}
                    name="comment"
                />
                <Box sx={{ display: "flex", justifiContent: "space-between" }}>
                    <Button onClick={handleClose1} sx={{ color: "black" }}>Save</Button>
                    <Button onClick={handleClose1} sx={{ color: "black" }}>Cancel</Button>
                </Box>
            </Box>

        </Popover>
    </Box>
    )
}

export default CellTable