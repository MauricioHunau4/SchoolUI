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
  columnsOfStudentsForSchool,
  columnsOfProfessorsForSchool
} from '../TagsForColumns';
import ColumnsTag from './ColumnsTag';
import RowsPerEntitie from './RowsPerEntitie';


export default function TableForEachEntitie(props) {
  return (<>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <ColumnsTag
            schoolChooseEntitie={props.schoolChooseEntitie}
            columnsOfGrades={columnsOfGrades}
            columnsOfProfessor={columnsOfProfessor}
            columnsOfStudents={columnsOfStudents}
            columnsOfStudentsForSchool={columnsOfStudentsForSchool}
            columnsOfProfessorsForSchool={columnsOfProfessorsForSchool}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        <RowsPerEntitie
          schoolChooseEntitie={props.schoolChooseEntitie}
          rowsProfessorForSchool={props.rowsProfessorForSchool}
          rowsStudentForSchool={props.rowsStudentForSchool}
          subjectSelection={props.subjectSelection}
          columnsOfStudentsForSchool={columnsOfStudentsForSchool}
          columnsOfProfessorsForSchool={columnsOfProfessorsForSchool}
          columnsOfGrades={columnsOfGrades}
          columnsOfProfessor={columnsOfProfessor}
          columnsOfStudents={columnsOfStudents}
          page={props.page}
          rowsForStudents={props.rowsForStudents}
          rowsPerPage={props.rowsPerPage}
          rowsSchool={props.rowsSchool}
          rows={props.rows} />
      </TableBody>
    </Table>
  </>
  )
}
