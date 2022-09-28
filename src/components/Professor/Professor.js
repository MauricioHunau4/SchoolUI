import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import Foot from '../Foot';
import TableProfessor from './Table'
import Upload from './Upload';

import PropTypes from 'prop-types';

import {
    Box,
    //For the tabs
    Tab,
    Tabs,
    TextField,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

function TabPanel(props) {
    const { value, index, ...other } = props;
    const [search, setSearch] = useState("");
    
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    };
    
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === 0 && (<>
                <Box sx={{ margin:"auto", textAlign: "center"}}>
                        <SearchIcon sx={{fontSize:"55px", color:"gray"}}/>
                        <TextField
                            id="student-input"
                            name="student"
                            type="text"
                            placeholder="Student" 
                            onChange={handleSearch}
                            sx={{bgcolor:"white", minWidth: 300}}/>
                        </Box>
                        <Box sx={{height:"20px"}}/>
                <TableProfessor />
            </>
            )}
            {value === 1 && (<>
                <Upload />
            </>)}
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


export default function Professor() {
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {

        setValue(newValue);
    };

    return (
        <>
            <NavBar />
            <Box sx={{ bgcolor: "antiquewhite", bottom: 80, top: 70, position: "absolute", width: "100%" }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', margin:" 0 0 20px 0" }}>
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
    );
}