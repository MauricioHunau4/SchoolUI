import { InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function SelectEntitie(props) {
    if (props.entitie === "professor") {
        return (
            <><InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.classOfStudents}
                    label="Class"
                    onChange={props.handleClassSelect}
                >
                    <MenuItem value={""}><em>None</em></MenuItem>
                    {classes.map(classes => {
                        return <MenuItem value={classes} key={classes}>{classes}</MenuItem>
                    })}

                </Select></>
        )
    } else if (props.entitie === "school") {
        return (<><InputLabel id="demo-simple-select">Entitie</InputLabel>
            <Select
                labelId="demo-simple-select"
                id="demo-simple-select"
                value={props.entitieSelection}
                label="Entitie"
                onChange={props.handleEntitieSelection}
            >
                <MenuItem value={"Professor"} >Professor</MenuItem>
                <MenuItem value={"Student"} >Student</MenuItem>
            </Select></>)
    }
}

const classes = [101, 102, 103, 104]

export default SelectEntitie