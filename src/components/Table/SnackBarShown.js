import { Snackbar } from '@mui/material'
import React from 'react'

function SnackBarShown(props) {
    if (props.snackbar) {
        return (
            <Snackbar
            open={props.openGrade}
            autoHideDuration={6000}
            onClose={props.handleClose}
            message="Grade updated"
            action={props.action}
          />
        )
    }
}

export default SnackBarShown