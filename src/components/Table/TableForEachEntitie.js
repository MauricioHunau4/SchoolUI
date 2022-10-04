import {
  Table,
  TableBody,
  TableHead,
  TableRow
} from '@mui/material';

import React from 'react'
import {
  columnsOfGrades,
  columnsOfProfessor,
  columnsOfStudents,
  columnsOfStudentsForSchool
} from '../TagsForColumns';
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
            columnsOfStudentsForSchool={columnsOfStudentsForSchool}
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
          rows={props.rows} />
      </TableBody>
    </Table>
  </>
  )
}




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