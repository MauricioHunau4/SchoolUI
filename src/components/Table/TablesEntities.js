import React from 'react'
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableForEachEntitie from './TableForEachEntitie';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEntities from '../Modal/ModalEntities';
import { tableDesign } from '../../DesignConst';

export default function TablesEntities() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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


function createDataForProfessor(student, subject, grade, date) {
  const edit =
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <ModalEntities student={student} grade={grade} subject={subject} />
      <Button>
          <DeleteIcon sx={{ color: "black" }} />
      </Button>
  </Box>
  return { student, subject, grade, date, edit };
}


function createDataForGrades(subject, grade, professor, date){
  
return {subject, grade, professor, date}
}

/*function createDataForSchool(){

}*/

const rows = [
  createDataForProfessor('James States', 'IN', 1324171354, 3287263),
  createDataForProfessor('Anderson States', 'CN', 1403500365, 9596961),
  createDataForProfessor('Italy Kingdom', 'IT', 60483973, 301340),
  createDataForProfessor('James States', 'US', 327167434, 9833520),
  createDataForProfessor('Anderson States', 'CA', 37602103, 9984670),
  createDataForProfessor('Italy States', 'AU', 25475400, 7692024),
  createDataForProfessor('Germany States', 'DE', 83019200, 357578),
  createDataForProfessor('Ireland States', 'IE', 4857000, 70273),
  createDataForProfessor('Mexico Kingdom', 'MX', 126577691, 1972550),
  createDataForProfessor('Japan Kingdom', 'JP', 126317000, 377973),
  createDataForProfessor('France Kingdom', 'FR', 67022000, 640679),
  createDataForProfessor('United Kingdom', 'GB', 67545757, 242495),
  createDataForProfessor('Russia States', 'RU', 146793744, 17098246),
  createDataForProfessor('Nigeria Kingdom', 'NG', 200962417, 923768),
  createDataForProfessor('Brazil Kingdom', 'BR', 210147125, 8515767),
];

const rowsForStudents = [
  createDataForGrades('James States', 9.0, 1324171354, 3287263),
  createDataForGrades('Anderson States', 6.5, 1403500365, 9596961),
  createDataForGrades('Italy States', 4.0, 60483973, 301340),
  createDataForGrades('James States', 10.0, 327167434, 9833520),
  createDataForGrades('Anderson Kingdom', 7.0, 37602103, 9984670),
  createDataForGrades('Italy Kingdom', 7.5, 25475400, 7692024),
  createDataForGrades('Germany Kingdom', 3.0, 83019200, 357578),
  createDataForGrades('Ireland Kingdom', 7.5, 4857000, 70273),
  createDataForGrades('Mexico Kingdom', 7.5, 126577691, 1972550),
  createDataForGrades('Japan Kingdom', 7.5, 126317000, 377973),
  createDataForGrades('France Kingdom', 7.5, 67022000, 640679),
  createDataForGrades('United Kingdom', 7.5, 67545757, 242495),
  createDataForGrades('Russia Kingdom', 7.5, 146793744, 17098246),
  createDataForGrades('Nigeria Kingdom', 7.5, 200962417, 923768),
  createDataForGrades('Brazil Kingdom', 7.5, 210147125, 8515767),
];


