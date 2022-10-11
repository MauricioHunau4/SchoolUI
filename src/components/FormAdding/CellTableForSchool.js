import { IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { CellTableSchool } from '../../DesignConst'

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

/*Tarminar esto, tambien la tabla para los profesores y publicarlo en LinkedIn */
function CellTableForSchool(props) {
    const [disabled, setDisabled] = useState(false)
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
            setDisabled(true)
        }else{}
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
                //className={animation}
                //error={errorGrading}
                id="outlined-error-helper-text"
                onChange={handleAddInformationNewStudent}
                name="name"
            //disabled={disabled} 
            />
            <TextField
                sx={{ width: "200px"}}
                //className={animation}
                //error={errorGrading}
                id="outlined-error-helper-text"
                onChange={handleAddInformationNewStudent}
                name="email"
            //disabled={disabled} 
            />
            <TextField
                sx={{ width: "200px" }}
                //className={animation}
                //error={errorGrading}
                id="outlined-error-helper-text"
                onChange={handleAddInformationNewStudent}
                type='date'
                name="dateOfBirth"
            //disabled={disabled} 
            />
        </Box>
    )
}

export default CellTableForSchool