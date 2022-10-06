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
          subjectSelection={props.subjectSelection}
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
