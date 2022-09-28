import React, { useState } from "react";
import NavBar from "../NavBar/NavBar"
import Foot from "../Foot"
import TableSchoolProfessor from "./TableSchoolProfessor"
import TableSchoolStudent from "./TableSchoolStudents"
import UploadSchool from "./UploadSchool";

import PropTypes from 'prop-types';

import {useGetDateQuery} from '../../features/school/createApi'

import {
    Tabs,
    Tab,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    //Select
    const [entitie, setEntitie] = useState("Professor");

    const handleChange = (event) => {
        setEntitie(event.target.value);
    };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === 0 && (<>
            <Box sx={{margin:"20px"}}>
                <Box sx={{ margin: "auto", display: "flex", justifyContent:"left", width:"80%" }}>
                    <FormControl sx={{ width: "10%" }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Entitie</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={entitie}
                            onChange={handleChange}
                            autoWidth
                            label="Entitie"
                            sx={{ bgcolor: "white" }}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Professor"}>Professor</MenuItem>
                            <MenuItem value={"Student"}>Student</MenuItem>
                        </Select>
                    </FormControl>
                    <SearchIcon sx={{ fontSize: "55px", color: "gray" }} />
                    <TextField
                        id="student-input"
                        name="student"
                        type="text"
                        placeholder={entitie === "" ? "Professor": `${entitie}`}
                        //onChange={handleSearch}
                        sx={{ bgcolor: "#D9D9D9", minWidth: 300 }}
                    />
                </Box>
                </Box>
                {entitie === "Professor" ? <TableSchoolProfessor/>: <TableSchoolStudent/>}
                
            </>
            )}
            {value === 1 && (<>
                <Box sx={{ height: "50px" }} />
                <UploadSchool />
            </>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function School() {
    //Tabs
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const algo = useGetDateQuery()


    return (
        <>
            <NavBar />
            <Box sx={{ bgcolor: "antiquewhite", bottom: 80, top: 70, position: "absolute", width: "100%" }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Search" {...a11yProps(0)} />
                            <Tab label="Upload" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    </TabPanel>
                </Box>
            </Box>
            <Foot />
        </>
    )
}
