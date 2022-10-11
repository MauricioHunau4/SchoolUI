import { TableCell } from "@mui/material"

const ColumnsTag = (props) => {
  let data = JSON.parse(sessionStorage.getItem('session'))

  if (data.entitie === "student") {
    return <>{props.columnsOfGrades.map((column) => (
      <TableCell
        key={column.id}
        align={column.align}
        style={{ minWidth: column.minWidth }}
      >
        {column.label}
      </TableCell>
    ))}
    </>
  }
  else if (data.entitie === "professor") {
    return <>{props.columnsOfStudents.map((column) => (
      <TableCell
        key={column.id}
        align={column.align}
        style={{ minWidth: column.minWidth }}
      >
        {column.label}
      </TableCell>
    ))}
    </>
  } else {
    if (props.schoolChooseEntitie === "professor") {
      return <>{props.columnsOfProfessorsForSchool.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
      </>
    }
    else {
      return <>{props.columnsOfStudentsForSchool.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
      </>
    }
  }
}

export default ColumnsTag