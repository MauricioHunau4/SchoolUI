import { IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { CellTableSchool } from '../../DesignConst'

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { dataAdding } from '../../features/school/schoolSlice';


function CellTableForSchool(props) {
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState(false)
    const [animation, setAnimation] =useState("")
    const dispatch = useDispatch()

    const [addInformationNewStudent, setAddInformationNewStudent] = useState({
        name:'',
        email:'',
        class:props.classAddingSelection,
        dateOfBirth:'',
    })

    const handleAddInformationNewStudent=(e)=>{
        setAddInformationNewStudent({...addInformationNewStudent, [e.target.name]: e.target.value})
    }

    const handleCheck = () => {
        if(addInformationNewStudent.name !== '' && addInformationNewStudent.email !== '' && addInformationNewStudent.dateOfBirth !== ''){
            dispatch(dataAdding(addInformationNewStudent))
            setDisabled(true)
        }else{
            setError(true)
            setAnimation("animate__animated animate__shakeX")
        }
    }

    return (
        <Box sx={CellTableSchool} >{disabled ?<Box sx={{ width: "200px" }}>
            <IconButton disabled>
                <CheckIcon />
            </IconButton>
            </Box>:<Box sx={{ width: "200px" }}>
            <IconButton onClick={handleCheck} >
                <AddIcon />
            </IconButton>
            </Box>}
            <TextField
                sx={{ width: "200px" }}
                className={animation}
                error={error}
                id="outlined-error-helper-text"
                onChange={handleAddInformationNewStudent}
                name="name"
                disabled={disabled} 
            />
            <TextField
                sx={{ width: "200px"}}
                className={animation}
                error={error}
                id="outlined-error-helper-text"
                onChange={handleAddInformationNewStudent}
                name="email"
                disabled={disabled} 
            />
            <TextField
                sx={{ width: "200px" }}
                className={animation}
                error={error}
                id="outlined-error-helper-text"
                onChange={handleAddInformationNewStudent}
                type='date'
                name="dateOfBirth"
                disabled={disabled} 
            />
        </Box>
    )
}

export default CellTableForSchool