import { TableRow } from "@mui/material";
import React from "react"
import TablesRow from "./TablesRow";

const RowsPerEntitie = (props) => {
  let data = JSON.parse(sessionStorage.getItem('session'))

  if (data.entitie === "student") {
    return <>{props.rowsStudents
      .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TablesRow row={row} columnsOfGrades={props.columnsOfGrades} entitie={data.entitie} />
          </TableRow>
        );
      })}</>
  } else if (data.entitie === "professor") {
    return (<>{props.rows
      .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TablesRow row={row} columnsOfStudents={props.columnsOfStudents} entitie={data.entitie} />
          </TableRow>
        );
      })}

    </>)
  } else {
    return (<>{props.rowsSchool
      .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TablesRow row={row}
              schoolChooseEntitie={props.schoolChooseEntitie}
              columnsOfStudentsForSchool={props.columnsOfStudentsForSchool}
              columnsOfProfessorsForSchool={props.columnsOfProfessorsForSchool} />
          </TableRow>
        )
      })}
    </>)
  }
}

export default RowsPerEntitie