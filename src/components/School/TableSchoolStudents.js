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
import ModalSchool from './ModalSchoolStudents';

import { useSelector, useDispatch } from 'react-redux';
import { fetchS } from '../../features/school/schoolSlice';

const columnsStudent = [
    { id: 'name', label: 'Student', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toFixed(1) },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'dateOfBirth', label: 'Birth', minWidth: 170, align: 'center', format: (value) => value.toDate() },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
];

function createDataStudent(name,  lastname, email, phoneNumber, dateOfBirth,) {
    const edit = <Box sx={{display:"flex", justifyContent:"center"}}>
            <ModalSchool name={name} lastname={lastname} email={email} birth={dateOfBirth} phoneNumber={phoneNumber}/>
        <Button>
            <DeleteIcon sx={{ color: "black" }} />
        </Button>
    </Box>
    return { name, email, phoneNumber, dateOfBirth, edit };
}

const rows = [
  createDataStudent('India','Jones', 1324171354, 3287263, '01-01-2022'),
  createDataStudent('China', 'CN', 1403500365, 9596961, '01-01-2022'),
  createDataStudent('Italy', 'IT', 60483973, 301340, '01-01-2022'),
  createDataStudent('United States', 'US', 327167434, 9833520, '01-01-2022'),
  createDataStudent('Canada', 'CA', 37602103, 9984670, '01-01-2022'),
  createDataStudent('Australia', 'AU', 25475400, 7692024, '01-01-2022'),
  createDataStudent('Germany', 'DE', 83019200, 357578, '01-01-2022'),
  createDataStudent('Ireland', 'IE', 4857000, 70273, '01-01-2022'),
  createDataStudent('Mexico', 'MX', 126577691, 1972550, '01-01-2022'),
  createDataStudent('Japan', 'JP', 126317000, 377973, '01-01-2022'),
  createDataStudent('France', 'FR', 67022000, 640679, '01-01-2022'),
  createDataStudent('United Kingdom', 'GB', 67545757, 242495, '01-01-2022'),
  createDataStudent('Russia', 'RU', 146793744, 17098246, '01-01-2022'),
  createDataStudent('Nigeria', 'NG', 200962417, 923768, '01-01-2022'),
  createDataStudent('Brazil', 'BR', 210147125, 8515767, '01-01-2022'),
];

export default function TableSchool() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [row, setRow] = useState({})

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
    dispatch(fetchS("student"))
    if (isLoading) { 
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
              {columnsStudent.map((column) => (
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
                    {columnsStudent.map((column) => {
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
