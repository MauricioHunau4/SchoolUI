import React from "react";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material';

import { navBar, typographyNavBar } from "../../DesignConst";
import FeaturesNavBar from "./FeaturesNavBar";

export default function NavBar() {
    
    return (
        <Box sx={navBar}>
            <AppBar position="static"
                sx={{ bgcolor: "#F2994A" }}>
                <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        component="div"
                        sx={typographyNavBar}>
                        School UI
                    </Typography>
                    <FeaturesNavBar />
                </Toolbar>
            </AppBar>
        </Box>
    )
}