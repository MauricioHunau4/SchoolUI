import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableForEachEntitie from './TableForEachEntitie';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEntities from '../Modal/ModalEntities';
import { tableDesign } from '../../DesignConst';
import { useDispatch } from 'react-redux';
import { trashCheck } from '../../features/school/schoolSlice';
import CommentIcon from '@mui/icons-material/Comment';

export default function TablesEntities(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={tableDesign}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <TableForEachEntitie
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsForStudents={rowsForStudents}
        />
      </TableContainer >
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
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

function CreateDataForProfessor(student, subject, grade, date, classOfStudents) {
  const edit =
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModalEntities student={student} grade={grade} subject={subject} />
      <ButtonDelete />
    </Box>
  return { student, subject, grade, date, classOfStudents, edit };
}

function createDataForGrades(subject, grade, professor, date, commented) {
  const comment = <CheckComment commented={commented} />
  return { subject, grade, professor, date, comment }
}

function CheckComment(props) {
  if (props.commented !== "") {
    return (
      <Button sx={{ height: "20px", color: "gray" }}>
        <CommentIcon />
      </Button>
    )
  } else {
    return (<></>)
  }

}

const rows = [
  CreateDataForProfessor('James States', 'IN', 1324171354, 3287263, 2),
  CreateDataForProfessor('Anderson States', 'CN', 1403500365, 9596961, 2),
  CreateDataForProfessor('Italy Kingdom', 'IT', 60483973, 301340, 2),
  CreateDataForProfessor('James States', 'US', 327167434, 9833520, 2),
  CreateDataForProfessor('Anderson States', 'CA', 37602103, 9984670, 2),
  CreateDataForProfessor('Italy States', 'AU', 25475400, 7692024, 2),
  CreateDataForProfessor('Germany States', 'DE', 83019200, 357578, 2),
  CreateDataForProfessor('Ireland States', 'IE', 4857000, 70273, 2),
  CreateDataForProfessor('Mexico Kingdom', 'MX', 126577691, 1972550, 2),
  CreateDataForProfessor('Japan Kingdom', 'JP', 126317000, 377973, 2),
  CreateDataForProfessor('France Kingdom', 'FR', 67022000, 640679, 2),
  CreateDataForProfessor('United Kingdom', 'GB', 67545757, 242495, 2),
  CreateDataForProfessor('Russia States', 'RU', 146793744, 17098246, 2),
  CreateDataForProfessor('Nigeria Kingdom', 'NG', 200962417, 923768, 2),
  CreateDataForProfessor('Brazil Kingdom', 'BR', 210147125, 8515767, 2),
];

const rowsForStudents = [
  createDataForGrades('Math', 9.0, "1324171354", 3287263, "hola"),
  createDataForGrades('History', 6.5, "1324171354", 9596961, ""),
  createDataForGrades('Science', 4.0, "1324171354", 301340, "hola"),
  createDataForGrades('Math', 10.0, "1324171354", 9833520, "hola"),
  createDataForGrades('Math', 7.0, "1324171354", 9984670, "hola"),
  createDataForGrades('Science', 7.5, "1324171354", 7692024, "hola"),
  createDataForGrades('History', 3.0, "1324171354", 357578, "hola"),
  createDataForGrades('History', 7.5, "1324171354", 70273, "hola"),
  createDataForGrades('Science', 7.5, "1324171354", 1972550, "hola"),
  createDataForGrades('History', 7.5, "1324171354", 377973, ""),
  createDataForGrades('Science', 7.5, "1324171354", 640679, ""),
  createDataForGrades('Math', 7.5, "1324171354", 242495, ""),
  createDataForGrades('Math', 7.5, "1324171354", 17098246, ""),
  createDataForGrades('Geography', 7.5, "1324171354", 923768, ""),
  createDataForGrades('Geography', 7.5, "1324171354", 8515767, ""),
  createDataForGrades('Math', 9.0, "1324171354", 3287263, "hola"),
  createDataForGrades('History', 6.5, "1324171354", 9596961, "hola"),
  createDataForGrades('Science', 4.0, "1324171354", 301340, "hola"),
  createDataForGrades('Math', 10.0, "1324171354", 9833520, "hola"),
  createDataForGrades('Math', 7.0, "1324171354", 9984670, "hola"),
  createDataForGrades('Science', 7.5, "1324171354", 7692024, "hola"),
  createDataForGrades('History', 3.0, "1324171354", 357578, "hola"),
  createDataForGrades('History', 7.5, "1324171354", 70273, "hola"),
  createDataForGrades('Science', 7.5, "1324171354", 1972550, "hola"),
  createDataForGrades('History', 7.5, "1324171354", 377973, ""),
  createDataForGrades('Science', 7.5, "1324171354", 640679, ""),
  createDataForGrades('Math', 7.5, "1324171354", 242495, ""),
  createDataForGrades('Math', 7.5, "1324171354", 17098246, ""),
  createDataForGrades('Geography', 7.5, "1324171354", 923768, ""),
  createDataForGrades('Geography', 7.5, "1324171354", 8515767, ""),
];
