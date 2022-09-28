import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TablesEntities from './Table/TablesEntities';

export default function TabsEntities() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<> 
  <Box sx={{ width: '100%', position:"relative", top: 70, textAlign:"center", alignContent:"center" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Table" {...a11yProps(0)} sx={{width:"20%"}}/>
          <Tab label="Adding" {...a11yProps(1)} sx={{width:"20%"}}/>
        </Tabs>
      </Box>
      <ShowTabs value={value}/>
    </Box>
    </>
  );
}

const ShowTabs = (props)=>{

  let data = JSON.parse(sessionStorage.getItem('session'))
  if(data.entitie !=="student"){
    return <TabPanel value={props.value} index={0}/>
  }else{
    return <>
    <TabPanel value={props.value} index={0}/>
    <TabPanel value={props.value} index={1}>hola</TabPanel>
    </>
  }
}

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
      {value === index && (<Box sx={{position:"relative"}}>
          <TablesEntities/>
        </Box>
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
