import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { formAdding } from '../../DesignConst'

function FormAdding(props) {
  const [informationNewProfessor, setInformationNewProfessor] = useState({
    name: '',
    subject: '',
    email: '',
    phoneNumber: ''
  })

  const handleInformationNewProfessor = (e) => {
    setInformationNewProfessor({ ...informationNewProfessor, [e.target.name]: e.target.value })
  }

  const addingProfessor = () => {
    if (informationNewProfessor.name !== '' && informationNewProfessor.subject !== '' && informationNewProfessor.email !== '' && informationNewProfessor.phoneNumber !== '') {
      props.handleClickSnackBar()
    }
  }

  return (
    <Box sx={formAdding}>
      <FormControl sx={{ gap: '20px' }}>
        <Typography>Adding Professor</Typography>
        <TextField
          onChange={handleInformationNewProfessor}
          placeholder='Name'
          name='name'
          sx={{ bgcolor: 'whitesmoke' }} />
        <TextField
          onChange={handleInformationNewProfessor}
          placeholder='Subject'
          name='subject'
          sx={{ bgcolor: 'whitesmoke' }} />
        <TextField
          onChange={handleInformationNewProfessor}
          placeholder='Email'
          type='email'
          name='email'
          sx={{ bgcolor: 'whitesmoke' }} />
        <TextField
          onChange={handleInformationNewProfessor}
          placeholder='Phone number'
          type='tel'
          name='phone'
          sx={{ bgcolor: 'whitesmoke' }} />
        <Button
          onClick={addingProfessor}
          sx={{
            color: "black",
            bgcolor: "#F2994A",
            width: "100%",
            padding: '15px'
          }}>Add professor</Button>
      </FormControl>
    </Box>
  )
}

export default FormAdding
