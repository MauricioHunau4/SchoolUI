import { Box, Fade, Tooltip, Typography } from '@mui/material'
import CastleIcon from '@mui/icons-material/Castle';

import React from 'react'

function SchoolsChoose(props) {
    return (<>
        <Box sx={{ textAlign: "center" }} key={props.school.id} className="animate__animated animate__fadeInDown">
            <Tooltip title={props.school.name}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                placement="top">
                <CastleIcon sx={{ fontSize: 100 }} />
            </Tooltip>
            <Typography>{props.school.name}</Typography>
        </Box>
    </>

    )
}

export default SchoolsChoose