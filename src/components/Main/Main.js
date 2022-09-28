import React from "react";
import NavBar from "../NavBar/NavBar";

//MUI
import {
    Box,
    Typography,
} from '@mui/material';

//MUI icons
import SchoolIcon from '@mui/icons-material/School';
import FormMail from "./FormMail";
import SchoolsChoose from "./SchoolsChoose";
import BoxInformation from "./BoxInformation";
import { boxEmailAndPhrase, flexMainInfoAndIcon, flexSchoolChoose, mainBackgroundImage, typographyInfo, typographyPhrase } from "../../DesignConst";

export default function Main() {
    
    let obj = null
    sessionStorage.setItem('session', JSON.stringify(obj))

    return (
        <>
            <NavBar bool={true} />
            <Box sx={mainBackgroundImage}>
                <SchoolIcon sx={{ fontSize: 400 }} className="animate__animated animate__fadeIn" />
                <Box sx={flexMainInfoAndIcon} className="animate__animated animate__fadeIn">
                    <Typography variant="h4"
                        sx={typographyInfo}>
                        The space that all the institutions want
                    </Typography>
                    <BoxInformation/>
                </Box>
            </Box>
            <Box sx={{ bgcolor: "#F2994A" }}>
                <Typography variant="h4" sx={{
                    textAlign: "center",
                    padding: "30px 0 0 0"
                }}>
                    The institutions that chose us
                </Typography>
                <Box sx={flexSchoolChoose}>
                    {schools.map(school => {
                        return <SchoolsChoose school={school} key={school.id}/>
                    })}
                </Box>
            </Box>
            <Box sx={boxEmailAndPhrase}>
                <Typography variant="h3" sx={typographyPhrase}>
                    If you want to register you school, contact us.
                </Typography>
                <Box sx={{ bgcolor: "#3A3A3A", width: 479, height: 480 }}>
                    <FormMail />
                </Box>
            </Box>
        </>
    );
}

const schools = [{
    id: 1,
    name: "School1"
}, {
    id: 2,
    name: "School2"
}, {
    id: 3,
    name: "School3"
}, {
    id: 4,
    name: "School4"
}
]
