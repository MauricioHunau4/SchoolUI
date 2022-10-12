import { capitalize, Snackbar } from '@mui/material'
import React from 'react'


function TrashShow(props) {
    let data = JSON.parse(sessionStorage.getItem('session'))

    if (props.trash) {
        if (data.entitie === 'professor') {
            return (
                <Snackbar
                    open={props.openTrash}
                    autoHideDuration={6000}
                    onClose={props.handleClose}
                    message='Grade deleted'
                    action={props.action}
                />
            )
        } else {
            return (<Snackbar
                open={props.openTrash}
                autoHideDuration={6000}
                onClose={props.handleClose}
                message={capitalize(props.schoolChooseEntitie) + ' deleted'}
                action={props.action}
            />)
        }
    }
}

export default TrashShow