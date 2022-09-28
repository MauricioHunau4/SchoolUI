import React, {useEffect, useState} from 'react';
import { 
  Box,
  Button, 
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow 
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import ModalSchool from './ModalSchool';

import { useSelector, useDispatch } from 'react-redux';
import { fetchS } from '../../features/school/schoolSlice';

const columnsProfessor = [
    { id: 'name', label: 'Professor', minWidth: 170 },
    { id: 'subject', label: 'Subject', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toFixed(1) },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
];

/*const columnsStudent = [
    { id: 'student', label: 'Student', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toFixed(1) },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'dateOfBirth', label: 'Date of birth', minWidth: 100 },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
];*/

function createDataProfessor(name, lastname, subject, email, phoneNumber) {
    const edit = <Box sx={{display:"flex", justifyContent:"center"}}>
            <ModalSchool name={name} lastname={lastname} subject={subject} email={email} phoneNumber={phoneNumber}/>
        <Button>
            <DeleteIcon sx={{ color: "black" }} />
        </Button>
    </Box>
    return { name, subject, email, phoneNumber, edit };
}

const rows = [
  createDataProfessor('India','Jones', 'IN', 1324171354, 3287263),
  createDataProfessor('China', 'CN', 1403500365, 9596961),
  createDataProfessor('Italy', 'IT', 60483973, 301340),
  createDataProfessor('United States', 'US', 327167434, 9833520),
  createDataProfessor('Canada', 'CA', 37602103, 9984670),
  createDataProfessor('Australia', 'AU', 25475400, 7692024),
  createDataProfessor('Germany', 'DE', 83019200, 357578),
  createDataProfessor('Ireland', 'IE', 4857000, 70273),
  createDataProfessor('Mexico', 'MX', 126577691, 1972550),
  createDataProfessor('Japan', 'JP', 126317000, 377973),
  createDataProfessor('France', 'FR', 67022000, 640679),
  createDataProfessor('United Kingdom', 'GB', 67545757, 242495),
  createDataProfessor('Russia', 'RU', 146793744, 17098246),
  createDataProfessor('Nigeria', 'NG', 200962417, 923768),
  createDataProfessor('Brazil', 'BR', 210147125, 8515767),
];

export default function TableSchool() {
  const [page, setPage] = useState(0);
  const [row, setRow] = useState({})
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch()
  const info = useSelector(state=>state.data)
  const isLoading = useSelector(state=>state.isLoading)
  const error = useSelector(state => state.error)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(()=>{
    dispatch(fetchS("professor"))
    if (!isLoading) { 
      setRow(info)
    }else{
      console.log(error)
    }
  },[])

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin:"auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columnsProfessor.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                    {columnsProfessor.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
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
