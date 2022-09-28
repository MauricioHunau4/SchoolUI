import React, { useState, useEffect } from "react"
import BasicModal from './Modal';

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
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector, useDispatch } from 'react-redux';
import { fetchS } from '../../features/school/schoolSlice';

const rows = [
    createData('Jones', 'Physics', 9.5, 3287263, 1),
    createData('China', 'CN', 1, 9596961, 2),
    createData('Italy', 'IT', 6, 301340, 3),
    createData('United States', 'US', 3, 9833520, 4),
    createData('Canada', 'CA', 3, 9984670, 5),
    createData('Australia', 'AU', 2, 7692024, 6),
    createData('Germany', 'DE', 8, 357578, 7),
    createData('Ireland', 'IE', 4, 70273, 8),
    createData('Mexico', 'MX', 1, 1972550, 9),
    createData('Japan', 'JP', 1, 377973, 10),
    createData('France', 'FR', 6, 640679, 11),
    createData('United Kingdom', 'GB', 67545757, 242495, 12),
    createData('Russia', 'RU', 1, 17098246, 13),
    createData('Nigeria', 'NG', 2, 923768, 14),
    createData('Brazil', 'BR', 2, 8515767, 15),
];

function createData(name, lastname, subject, grade, date, index) {
    const edit =
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <BasicModal name={name} lastname={lastname} grade={grade} subject={subject} />
            <Button>
                <DeleteIcon sx={{ color: "black" }} />
            </Button>
        </Box>
    return { name, lastname, subject, grade, date, index, edit };
}

const columns = [
    { id: 'student', label: 'Student', minWidth: 170 },
    { id: 'subject', label: 'Subject', minWidth: 100 },
    { id: 'grade', label: 'Grade', minWidth: 170, align: 'center', format: (value) => value.toFixed(1) },
    { id: 'date', label: 'Date', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
];

export default function TableProfessor() {
    const [page, setPage] = useState(0);
    const [row, setRow] = useState([])
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const dispatch = useDispatch()

    const info = useSelector(state=>state.data)
    const isLoading = useSelector(state=>state.isLoading)
    const error = useSelector(state => state.error)

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(()=>{
        dispatch(fetchS("student"))
        if (!isLoading) { 
          setRow(info)
        }else{
          console.log(error)
        }
      },[])

    return (
        <Paper sx={{ width: '80%', overflow: 'hidden', margin: "auto" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (                                
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                               
                                return (<>
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const valor = row[column.id];
                                            return (
                                                <TableCell key={column.label} align={column.align}>
                                                    {column.format && typeof valor === 'number'
                                                        ? column.format(valor)
                                                        : valor}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                </>
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

    )
}