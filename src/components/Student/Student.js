import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import Foot from '../Foot';
import TableStudent from './TableStudent';

import {
    Tabs,
    Tab,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@mui/material/';

function TabPanel(props) {
    const { value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === 0 && (
                 <TableStudent subject={props.subject}/>
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

 

export default function Student() {
    const [value, setValue] = useState(0);
    const [subject, setSubject] = useState("")
    
    let data = JSON.parse(sessionStorage.getItem('session'))

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const change = (e) => {
        setSubject(e.target.value);
    }

    return (
        <>
        <NavBar name={data[1].username}/>
            <Box sx={{ position: "absolute",width: '100%', bgcolor:"antiquewhite", bottom: 80, top: 70 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} sx={{color:"white"}} aria-label="basic tabs example">
                            <Tab label="Search" {...a11yProps(0)} /> 
                    </Tabs>
                </Box>
                <Box sx={{textAlign: "center", margin:"1% 0 0 0"}}>
                <FormControl 
                sx={{ m: 1,
                    minWidth: 500,
                    bgcolor: "white",
                    "&:focus-visible":{
                        outline:"none"
                } }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Subject</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={subject}
                        onChange={change}
                        autoWidth
                        label="Subject"
                        sx={{textAlign:"left"}}
                    >
                        <MenuItem value="" sx={{ minWidth:500 }}>
                            <em>None</em>
                        </MenuItem>
                        {subjects.map(subject => { 
                            return <MenuItem key={subject.id} value={subject.name} sx={{ minWidth:500 }}>{subject.name}</MenuItem> })}
                    </Select>
                </FormControl>
                </Box>
                <TabPanel value={value} index={0} subject={subject}>
                </TabPanel>
            </Box>
            <Foot/>
        </>
    );
}


const subjects = [{
    id: 1,
    name: "Math"
}, {
    id: 2,
    name: "Science"
}, {
    id: 3,
    name: "History"
}, {
    id: 4,
    name: "Biology"
},]

