import { Snackbar } from '@mui/material'
import React from 'react'

function TrashShow(props) {
    if (props.trash) {
        return (
            <Snackbar
            open={props.openTrash}
            autoHideDuration={6000}
            onClose={props.handleClose}
            message="Grade deleted"
            action={props.action}
          />
        )
    }
}

export default TrashShow