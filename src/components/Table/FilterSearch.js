import { Box } from '@mui/material'
import React from 'react'
import SearchForEntitie from './SearchForEntitie'


function FilterSearch(props) {
    return (<Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <SearchForEntitie
            handleSubjectSelection={props.handleSubjectSelection}
            subjectSelection={props.subjectSelection}
            handleSearch={props.handleSearch}
            handleSearchDate={props.handleSearchDate}
            classOfStudents={props.classOfStudents}
            handleClassSelect={props.handleClassSelect}
        />
    </Box>
    )
}



export default FilterSearch

