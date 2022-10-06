import React, { useState, useEffect } from 'react'

//MUI
import { Box, Button, IconButton, Popover, Typography, TableContainer, TablePagination, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';

//Internal Imports
import ModalEntities from '../Modal/ModalEntities';
import TableForEachEntitie from './TableForEachEntitie';
import { tableDesign } from '../../DesignConst';
import { subjects, classes } from '../TagsForColumns';

//Redux imports
import { trashCheck } from '../../features/school/schoolSlice';
import { useDispatch } from 'react-redux';

//Crear un JSON con todos los datos de las personas 


export default function TablesEntities(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [newRows, setNewRows] = useState(rows)
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    for (let materia in subjects) {
      if (props.subjectSelection === subjects[materia]) {
        setNewRows(rowsForStudents.filter(obj => Object.keys(obj).some(key => obj[key] === subjects[materia])))
      }else if(props.subjectSelection === ""){
        setNewRows(rowsForStudents)
      }
    }
  }, [props.subjectSelection ])

  useEffect(()=>{
    for(let classSelect in classes){
      if (props.classOfStudents === classes[classSelect]) {
        setNewRows(rows.filter(obj => Object.keys(obj).some(key => obj[key] === classes[classSelect])))
      }else if(props.classOfStudents === ""){
        setNewRows(rows)
      }
    }
  },[props.classOfStudents])
  
  useEffect(()=>{
    if (props.dateSearch !== '') {
      setNewRows(rows.filter(obj => Object.keys(obj).some(key => obj[key] === props.dateSearch)))
    }else if(props.dateSearch === ""){
      setNewRows(rows)
    }
  },[props.dateSearch])

  console.log(rows.filter(obj => obj.student.includes(props.search))) //funcion que filtre
 
  useEffect(()=>{
    if (props.search !== '') {
      setNewRows(rows.filter(obj => obj.student.includes(props.search)))
    }else if(props.search === ""){
      setNewRows(rows)
    }
  },[props.search])
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={tableDesign}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <TableForEachEntitie
          subjectSelection={props.subjectSelection}
          rows={newRows}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsForStudents={newRows}
        />
      </TableContainer >
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={newRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

function ButtonDelete() {
  const dispatch = useDispatch()
  const deletingPeople = () => {
    dispatch(trashCheck(true))
  }

  return (
    <Button type='submit' onClick={() => { deletingPeople() }}>
      <DeleteIcon sx={{ color: "black" }} />
    </Button>
  )
}

export function CreateDataForProfessor(student, subject, grade, date, classOfStudents) {
  const edit =
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModalEntities student={student} grade={grade} subject={subject} />
      <ButtonDelete />
    </Box>
  return { student, subject, grade, date, classOfStudents, edit };
}

export function createDataForGrades(subject, grade, professor, date, commented) {
  const comment = <CheckComment commented={commented} />
  return { subject, grade, professor, date, comment }
}

function CheckComment(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  if (props.commented !== "") {
    return (<>
      <IconButton sx={{ height: "20px", color: "gray" }}  onClick={handleClick}>
        <CommentIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{props.commented}</Typography>
      </Popover>
    </>
    )
  } else {
    return (<></>)
  }

}

const rows = [
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('James States', 'Math', 7.5,  "2022-06-06", 102),
  CreateDataForProfessor('Anderson States', 'Math', 1403500365, "2022-08-06", 103),
  CreateDataForProfessor('Italy Kingdom', 'Math', 60483973, "2022-08-06", 103),
  CreateDataForProfessor('James States', 'Math', 327167434, "2022-08-06", 103),
  CreateDataForProfessor('Anderson States', 'Math', 37602103, "2022-08-06", 103),
  CreateDataForProfessor('Italy States', 'Math', 35475400, "2022-08-06", 103),
  CreateDataForProfessor('Germany States', 'Math', 83019200, "2022-06-06", 103),
  CreateDataForProfessor('Ireland States', 'Math', 4857000, "2022-06-06", 103),
  CreateDataForProfessor('Ireland States', 'Math', 4857000, "2022-06-06", 103),
  CreateDataForProfessor('Ireland States', 'Math', 4857000, "2022-06-06", 103),
  CreateDataForProfessor('Mexico Kingdom', 'Math', 126577691, "2022-05-10", 101),
  CreateDataForProfessor('Japan Kingdom', 'Math', 126317000, "2022-05-10", 101),
  CreateDataForProfessor('France Kingdom', 'Math', 67022000, "2022-05-10", 101),
  CreateDataForProfessor('United Kingdom', 'Math', 67545757, "2022-05-10", 101),
  CreateDataForProfessor('Russia States', 'Math', 146793744, "2022-05-10", 101),
  CreateDataForProfessor('Nigeria Kingdom', 'Math', 200962417, "2022-05-10", 101),
  CreateDataForProfessor('Brazil Kingdom', 'Math', 210147125, "2022-09-10", 101),
  CreateDataForProfessor('Japan Kingdom', 'Math', 126317000, "2022-09-10", 104),
  CreateDataForProfessor('France Kingdom', 'Math', 67022000, "2022-09-10", 104),
  CreateDataForProfessor('United Kingdom', 'Math', 67545757, "2022-09-10", 104),
  CreateDataForProfessor('Russia States', 'Math', 146793744, "2022-09-10", 104),
  CreateDataForProfessor('Nigeria Kingdom', 'Math', 200962417, "2022-05-10", 104),
  CreateDataForProfessor('Brazil Kingdom', 'Math', 210447125, "2022-09-10", 104),
];

 const rowsForStudents = [
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/5/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/8/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/14/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/22/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "6/1/2022", ""),
  createDataForGrades('Math', 10.0, "James Smith", "6/6/2022", "Test for the comments"),
  createDataForGrades('Math', 7.0, "James Smith", "6/8/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "6/15/2022", "Test for the comments"),
  createDataForGrades('History', 3.0, "Steven Jong", "10/5/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "10/5/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "10/5/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "10/5/2022", ""),
  createDataForGrades('Science', 7.5, "Marcel Renue", "10/5/2022", ""),
  createDataForGrades('Math', 7.5, "James Smith", "10/5/2022", ""),
  createDataForGrades('Math', 7.5, "James Smith", "10/5/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "10/5/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "10/5/2022", ""),
  createDataForGrades('Math', 9.0, "James Smith", "10/5/2022", "Test for the comments"),
  createDataForGrades('History', 6.5, "Steven Jong", "10/7/2022", ""),
  createDataForGrades('Science', 4.0, "Marcel Renue", "10/8/2022", "Test for the comments"),
  createDataForGrades('Math', 10.0, "James Smith", "10/9/2022", "Test for the comments"),
  createDataForGrades('Math', 7.0, "James Smith", "10/15/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "10/22/2022", "Test for the comments"),
  createDataForGrades('History', 3.0, "Steven Jong", "11/5/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "11/9/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "11/14/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "11/16/2022", ""),
  createDataForGrades('Science', 7.5, "Marcel Renue", "11/25/2022", ""),
  createDataForGrades('Math', 7.5, "James Smith", "10/5/2022", ""),
  createDataForGrades('Math', 7.5, "James Smith", "10/5/2022", ""),
]


