import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CastleIcon from '@mui/icons-material/Castle';

const LoginShows = (props) => {
   
    const navigate = useNavigate()

    if (props.data === null) {
        return <Button
            onClick={() => { navigate('/login') }}
            variant="contained"
            sx={{
                bgcolor: "#FF7800",
                borderRadius: 20,
                "&:hover": {
                    bgcolor: "#E46B00"
                }
            }}>
            Log in
        </Button>
    }
}

const EntitieIcon = (props) => {


    if (props.data.entitie === "student") {
        return <PersonIcon sx={{ color: "black", fontSize: 40 }} />
    } else if (props.data.entitie === "professor") {
        return <SchoolIcon sx={{ color: "black", fontSize: 40 }} />
    } else if (props.data.entitie === "school") {
        return <CastleIcon sx={{ color: "black", fontSize: 40 }} />
    }
}

const NameShow = (props) => {

    if (props.data!== null) {
        return <>
        <EntitieIcon data={props.data}/>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ color: "black", padding: "0 0 0 0" }}>
                    {props.data.username}
                </Typography>
                <Link to={'/'} className="link">
                    Log out
                </Link>
            </Box>
        </>
    }
}

export default function LoginButtonNavBar() {
    let data = JSON.parse(sessionStorage.getItem('session'))
    return (<>
        <NameShow data={data} />
        <LoginShows data={data} />
    </>
    )
}
