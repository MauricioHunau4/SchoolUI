import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'

function FormAdding() {
  return (
    <Box sx={{position: 'absolute', top: '50%', left:'50%', transform:'translate(-50%, 10%)'}}>
        <FormControl sx={{gap:'20px'}}>
            <Typography>Adding Professor</Typography>
            <TextField placeholder='Name' sx={{bgcolor:'whitesmoke'}}/>
            <TextField placeholder='Subject' sx={{bgcolor:'whitesmoke'}}/>
            <TextField placeholder='Email' sx={{bgcolor:'whitesmoke'}}/>
            <TextField placeholder='Phone number' sx={{bgcolor:'whitesmoke'}}/>
            <Button>Add</Button>
        </FormControl>
    </Box>
  )
}

export default FormAdding