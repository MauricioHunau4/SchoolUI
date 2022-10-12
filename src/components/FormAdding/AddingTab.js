import React from 'react';
import { Box, Typography } from '@mui/material';
import { letterHeadTable, tableAdding } from '../../DesignConst';
import CellTableOption from './CellTableOption';
import FormAdding from './FormAdding';
import AddingTableSchool from './AddingTableSchool';

export default function AddingTab(props) {
    let data = JSON.parse(sessionStorage.getItem('session'))

    if(data.entitie === 'professor'){
        return (
            <Box sx={tableAdding}>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px", position: "sticky", borderBottom:"0.5px solid #E6E6E6" }}>
                    <Typography sx={letterHeadTable}>Upload</Typography>
                    <Typography sx={letterHeadTable}>Student</Typography>
                    <Typography sx={letterHeadTable}>Subject</Typography>
                    <Typography sx={letterHeadTable}>Grade</Typography>
                    <Typography sx={letterHeadTable}>Comment</Typography>
                </Box>
                <Box>
                    <CellTableOption classSelection={props.classSelection} />
                </Box>
            </Box>
        );
    }else{
        if(props.addingEntitie === 'professor'){
        return(<Box sx={{position: 'relative'}}>
            <FormAdding handleCloseSnackbar={props.handleCloseSnackbar} handleClickSnackBar={props.handleClickSnackBar}/>
            </Box>
        )}else{
            return (<>
            <Box sx={tableAdding}>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px", position: "sticky", borderBottom:"0.5px solid #E6E6E6" }}>
                    <Typography sx={letterHeadTable}>Upload</Typography>
                    <Typography sx={letterHeadTable}>Name</Typography>
                    <Typography sx={letterHeadTable}>Email</Typography>
                    <Typography sx={letterHeadTable}>Date Of Birth </Typography>
                </Box>
                <Box>
                    <AddingTableSchool classAddingSelection={props.classAddingSelection}/>
                </Box>
            </Box>
            </>)
        }
    }
}



