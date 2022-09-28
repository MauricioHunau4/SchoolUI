import { TableCell } from "@mui/material";

const TablesRow = (props) => {
    let data = JSON.parse(sessionStorage.getItem('session'))

    if (data.entitie === "student") {
        return <>{props.columnsOfGrades.map((column) => {
            const value = props.row[column.id];
            return (
                <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                </TableCell>
            );
        })}
        </>
    }
    else if (data.entitie === "professor") {
        return <>{props.columnsOfStudents.map((column) => {
            const value = props.row[column.id];
            return (
                <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                </TableCell>
            );
        })}
        </>
    }
}

export default TablesRow;