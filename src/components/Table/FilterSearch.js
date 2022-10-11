import { Box } from '@mui/material'
import React from 'react'
import SearchForEntitie from './SearchForEntitie'


function FilterSearch(props) {
    return (<Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <SearchForEntitie
            handleSchoolChooseEntitie={props.handleSchoolChooseEntitie}
            handleSubjectSelection={props.handleSubjectSelection}
            handleSearch={props.handleSearch}
            handleSearchDate={props.handleSearchDate}
            handleClassSelect={props.handleClassSelect}
            subjectSelection={props.subjectSelection}
            classOfStudents={props.classOfStudents}
            schoolChooseEntitie={props.schoolChooseEntitie}
        />
    </Box>
    )
}



export default FilterSearch

