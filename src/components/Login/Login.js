import React from "react";
import NavBar from "../NavBar/NavBar";

import Foot from "../Foot";
import { useNavigate } from "react-router-dom";

//MUI
import {
    Box,
    Button,
    Typography
}
    from "@mui/material";
import { backgroundLogin, boxForm, buttonBack } from "../../DesignConst";
import FormLogin from "./FormLogin";

export default function Login() {

    let obj = null
    sessionStorage.setItem('session', JSON.stringify(obj))
    const navigate = useNavigate()

    return (<>
        <NavBar />
        <Box sx={backgroundLogin}>
            <Box className="animate__animated animate__fadeIn">
                <Box sx={boxForm}>
                    <FormLogin />
                </Box>
                <Box sx={{ height: "20px" }}></Box>
                <Button onClick={() => { navigate('/') }}
                    sx={buttonBack}>
                    <Typography sx={{ color: "black" }}>Back</Typography>
                </Button>
            </Box>
        </Box>
        <Foot />
    </>
    )
}

