import React, { useEffect, useState } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material/';


import { useSelector, useDispatch } from 'react-redux';
import { fetchS } from '../../features/school/schoolSlice';

const columns = [
    { id: 'subject', label: 'Subject', minWidth: 170 },
    { id: 'grade', label: 'Grade', minWidth: 100, format: (value) => value.toFixed(2) },
    { id: 'date', label: 'Date', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') }
];

const rows = [
    { subject: 'Math', grade: 'IN', date: 1324171354, id: 1 },
    { subject: 'Science', grade: 'CN', date: 1403500365, id: 2 },
    { subject: 'Science', grade: 'IT', date: 60483973, id: 3 },
    { subject: 'Math', grade: 'US', date: 327167434, id: 4 },
    { subject: 'Canada', grade: 'CA', date: 37602103, id: 5 },
    { subject: 'Australia', grade: 'AU', date: 25475400, id: 6 },
    { subject: 'Germany', grade: 'DE', date: 83019200, id: 7 },
    { subject: 'Ireland', grade: 'IE', date: 4857000, id: 8 },
    { subject: 'Mexico', grade: 'MX', date: 126577691, id: 9 },
    { subject: 'Japan', grade: 'JP', date: 126317000, id: 10 },
    { subject: 'France', grade: 'FR', date: 67022000, id: 11 },
    { subject: 'United Kingdom', grade: 'GB', date: 67545757, id: 12 },
    { subject: 'Russia', grade: 'RU', date: 146793744, id: 13 },
    { subject: 'Nigeria', grade: 'NG', date: 200962417, id: 14 },
    { subject: 'Brazil', grade: 'BR', date: 210147125, id: 15 },
];

/*createData('India', 'IN', 1324171354, 1),
    createData('China', 'CN', 1403500365, 2),
    createData('Italy', 'IT', 60483973, 3),
    createData('United States', 'US', 327167434, 4),
    createData('Canada', 'CA', 37602103, 5),
    createData('Australia', 'AU', 25475400, 6),
    createData('Germany', 'DE', 83019200, 7),
    createData('Ireland', 'IE', 4857000, 8),
    createData('Mexico', 'MX', 126577691, 9),
    createData('Japan', 'JP', 126317000, 10),
    createData('France', 'FR', 67022000, 11),
    createData('United Kingdom', 'GB', 67545757, 12),
    createData('Russia', 'RU', 146793744, 13),
    createData('Nigeria', 'NG', 200962417,14),
    createData('Brazil', 'BR', 210147125, 15), 
*/

let subjectChoose = []
export default function TableStudent(props) {
    const { subject } = props

    const [row, setRow] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const dispatch = useDispatch()

    const info = useSelector(state => state.data)
    const isLoading = useSelector(state => state.isLoading)
    const error = useSelector(state => state.error)

    useEffect(() => {
        dispatch(fetchS("subject"))
        if (!isLoading) {
            setRow(info)
        } else {
            console.log(error)
        }
    }, [])


    const changeSubject = (subject) => {
        subjectChoose = []
        if (subject !== "") {
            for (let x = 0; x < rows.length; x++) {
                if (subject === rows[x].subject) {
                    subjectChoose.push(rows[x])
                }
            }
        }
    }

    useEffect(() => {
        changeSubject()
    }, [subject])

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
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subject === "" ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
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
                            }) : subjectChoose.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
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
                                    )
                                })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 30]}
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
