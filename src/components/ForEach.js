import { Box } from '@mui/system'
import React from 'react'
import Foot from './Foot'
import NavBar from './NavBar/NavBar'
import TabsEntities from './TabsEntities'

function ForEach() {
  return (<>
    <Box sx={{ bgcolor:"antiquewhite", position:"absolute", top: 0, bottom: 0, left:0, right: 0}}>
        <NavBar />
        <TabsEntities />
    <Foot/>
    </Box>
  </>
  )
}

export default ForEach