import React from 'react';
import { Box, Typography } from '@mui/material';
import { letterHeadTable, tableAdding } from '../../DesignConst';
import CellTableOption from './CellTableOption';

/*
- Hacer yo la tabla para mas facilidad
- Crear button check en archivo TabsEntities, pasar como prop a un useState que sea falso, pero que si es verdadero haga check a todos
con un useEffect para que cuando pongas que no se desactiven todos

- Usar Redux para anotar a todos los que quiere agregar en un array de objetos y 
que cuando aprete el boton de subir notas se mande todo a la base de datos
color del borde: #E6E6E6
*/

export default function AddingTab(props) {

    return (<Box>
        <Box sx={tableAdding}>
            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px", position: "sticky", borderBottom:"0.5px solid #E6E6E6" }}>
                <Typography sx={letterHeadTable}>Upload</Typography>
                <Typography sx={letterHeadTable}>Student</Typography>
                <Typography sx={letterHeadTable}>Subject</Typography>
                <Typography sx={letterHeadTable}>Grade</Typography>
                <Typography sx={letterHeadTable}>Comment</Typography>
            </Box>
            <Box>
                <CellTableOption classSelection={props.classSelection} aproval={props.aproval} />
            </Box>
        </Box>
        
    </Box>
    );
}



