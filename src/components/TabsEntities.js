import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import TablesEntities from './Table/TablesEntities';
import { IconButton, Box, Tab, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { snackBarCheck, trashCheck } from '../features/school/schoolSlice';
import SnackBarShown from './Table/SnackBarShown';
import TrashShow from './Table/TrashShow';
import AddingTab from './FormAdding/AddingTab';
import FilterSearch from './Table/FilterSearch';
import SelectionClass from './FormAdding/SelectionClass';


export default function TabsEntities() {
  let data = JSON.parse(sessionStorage.getItem('session'))
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (data.entitie === "student") {
    return (<>
      <Box sx={{ width: '100%', position: "relative", top: 70, textAlign: "center", alignContent: "center" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="Table" {...a11yProps(0)} sx={{ width: "20%" }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} />
      </Box>
    </>
    );
  } else {
    return (<>
      <Box sx={{ width: '100%', position: "relative", top: 70, textAlign: "center", alignContent: "center" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="Table" {...a11yProps(0)} sx={{ width: "20%" }} />
            <Tab label="Adding" {...a11yProps(1)} sx={{ width: "20%" }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} />
      </Box>
    </>
    );
  }
}


function TabPanel(props) {
  const { value, index, ...other } = props;

  const snackbar = useSelector(state => state.school.snackbar)
  const trash = useSelector(state => state.school.trash)

  const dispatch = useDispatch()

  const [subjectSelection, setSubjectSelection] = useState("")
  const [openGrade, setOpenGrade] = useState(snackbar);
  const [openTrash, setOpenTrash] = useState(trash);
  const [search, setSearch] = useState()
  const [dateSearch, setDateSearch] = useState()
  const [classOfStudents, setClassOfStudents] = useState('');

  const handleSearchDate = (e) => {
    setDateSearch(e.target.value)
  }

  const handleSubjectSelection =(event)=>{
    setSubjectSelection(event.target.value)
  }

  const handleClassSelect = (event) => {
    setClassOfStudents(event.target.value);
  };

  const handleClose = (event, reason) => {
    dispatch(snackBarCheck(false))
    dispatch(trashCheck(false))
  };

  const [entitieSelection, setEntitieSelection] = useState("Professor")

  const handleEntitieSelection = (event) => {
    setEntitieSelection(event.target.value);
  };

  const [classSelection, setClassSelection] = useState("");

  const handleChange = (event) => {
    setClassSelection(event.target.value);
  };

  useEffect(() => {
    setOpenGrade(snackbar)
  }, [snackbar])

  useEffect(() => {
    setOpenTrash(trash)
  }, [trash])

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === 0 && (
        <Box sx={{ position: "relative" }}>
          <FilterSearch
            handleSubjectSelection={handleSubjectSelection}
            subjectSelection={subjectSelection}
            entitieSelection={entitieSelection}
            handleEntitieSelection={handleEntitieSelection}
            handleSearch={handleSearch}
            handleClassSelect={handleClassSelect}
            classOfStudents={classOfStudents}
            handleSearchDate={handleSearchDate} />
          <TablesEntities
            search={search}
            dateSearch={dateSearch}
            classOfStudents={classOfStudents} />
          <SnackBarShown
            action={action}
            handleCloseSnackbar={handleClose}
            openGrade={openGrade}
            snackbar={snackbar}
          />
          <TrashShow
            action={action}
            handleCloseTrash={handleClose}
            trash={trash}
            openTrash={openTrash}
          />
        </Box>)}
      {value === 1 && (
        <Box sx={{ position: "relative" }}>
          <SelectionClass classSelection={classSelection} handleChange={handleChange} />
          <AddingTab classSelection={classSelection} />
        </Box>)}
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
