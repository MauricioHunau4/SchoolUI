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

/*let data = JSON.parse(sessionStorage.getItem('session'))
    const navigate = useNavigate();
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
                    {props.bool === true ? <Button
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
                    </Button> : data !== null ? 
                     data[0].entitie === "student" ?<>
                     
                     <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Typography sx={{color: "black", padding: "0 0 0 0"}}>
                        {data[1].username}
                        </Typography>
                        <Link to={'/'} className="link">
                        Log out
                        </Link>
                    </Box>
                    </>:
                     data[0].entitie ==="professor" ? <>
                     <SchoolIcon sx={{color:"black", fontSize: 40}}/>
                     <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Typography sx={{color: "black", padding: "0 0 0 0"}}>
                        {data[1].username}
                        </Typography>
                        <Link to={'/'} className="link">
                        Log out
                        </Link>
                    </Box>
                    </>: 
                     data[0].entitie === "school"? <>
                     <CastleIcon sx={{color:"black", fontSize: 40}}/>
                     <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Typography sx={{color: "black", padding: "0 0 0 0"}}>
                        {data[1].username}
                        </Typography>
                        <Link to={'/'} className="link">
                        Log out
                        </Link>
                    </Box>
                    </>: 
                     <></>:<></>}
                </Toolbar>
            </AppBar>
        </Box>
    ) */