import {
  Table,
  TableBody,
  TableHead,
  TableRow
} from '@mui/material';

import React from 'react'
import ColumnsTag from './ColumnsTag';
import RowsPerEntitie from './RowsPerEntitie';


export default function TableForEachEntitie(props) {

  return (<>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <ColumnsTag
          columnsOfGrades={columnsOfGrades}
          columnsOfProfessor={columnsOfProfessor} 
          columnsOfStudents={columnsOfStudents}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        <RowsPerEntitie
          columnsOfGrades={columnsOfGrades}
          columnsOfProfessor={columnsOfProfessor}
          columnsOfStudents={columnsOfStudents}
          page={props.page}
          rowsForStudents={props.rowsForStudents}
          rowsPerPage={props.rowsPerPage} 
          rows={props.rows}/>
      </TableBody>
    </Table></>
  )
}


const columnsOfGrades = [
  { id: 'subject', label: 'Subject', minWidth: 170 },
  { id: 'grade', label: 'Grade', minWidth: 100, format: (value) => value.toFixed(2) },
  { id: 'professor', label: 'Professor', minWidth: 170, align: 'center', format: (value) => value.toString() },
  { id: 'date', label: 'Date', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') }
];

const columnsOfProfessor = [
  { id: 'name', label: 'Professor', minWidth: 170 },
  { id: 'subject', label: 'Subject', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toString() },
  { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center', format: (value) => value },
  { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
];

const columnsOfStudents = [
  { id: 'student', label: 'Student', minWidth: 170 },
  { id: 'subject', label: 'Subject', minWidth: 100 },
  { id: 'grade', label: 'Grade', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
  { id: 'date', label: 'Date', minWidth: 170, align: 'center' },
  { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
];

/*{columnsProfessor.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))} */

/*{columnsOfProfessor.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })} */