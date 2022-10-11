import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Box } from "@mui/system"
import {classes, subjects} from '../TagsForColumns'

function SearchForEntitie(props) {
    let data = JSON.parse(sessionStorage.getItem('session'))
    if (data.entitie === "professor") {
        return (<>
            <TextField
                sx={{ marginTop: "15px", width: "30%", bgcolor: "white" }}
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                onChange={props.handleSearch}
            />
            <TextField
                sx={{ marginTop: "15px", width: "11%", bgcolor: "white" }}
                id="outlined-basic"
                type='date'
                variant="outlined"
                onChange={props.handleSearchDate}
            />
            <Box sx={{ minWidth: 120, marginTop: "15px", bgcolor: "white" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
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

                    </Select>
                </FormControl>
            </Box></>)
    } else if (data.entitie === "student") {
        return (<>
        <Box sx={{ minWidth: 120, marginTop: "15px", bgcolor: "white" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.subjectSelection}
                    label="Subject"
                    onChange={props.handleSubjectSelection}>
                    <MenuItem value={""}><em>None</em></MenuItem>
                    {subjects.map((subject) => {
                        return <MenuItem value={subject} key={subject}>{subject}</MenuItem>
                    })}
                </Select>
            </FormControl>
            </Box>
        </>
        )
    }else{
        return(<>
        <TextField
                sx={{ marginTop: "15px", width: "30%", bgcolor: "white" }}
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                onChange={props.handleSearch}
            />
            <Box sx={{ minWidth: 120, marginTop: "15px", bgcolor: "white" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Entitie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.schoolChooseEntitie}
                        label="Class"
                        onChange={props.handleSchoolChooseEntitie}
                    >
                        <MenuItem value={"professor"}>Professors</MenuItem>
                        <MenuItem value={"student"}>Students</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>)
    }
}

export default SearchForEntitie

