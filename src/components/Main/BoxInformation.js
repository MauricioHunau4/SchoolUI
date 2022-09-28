import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function BoxInformation() {
    const [text, setText] = useState(false);

  return (
    <>{text === false ?
        <Button className="fade-out" variant="contained"
            sx={{
                bgcolor: "#F2994A",
                borderRadius: 15,
                width: "30%",
                "&:hover": {
                    bgcolor: "#E46B00"
                }
            }}
            onClick={() => { setText(true) }}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "58px",
                color: "black"
            }}>
                More
            </Typography>
        </Button>
        : <Typography className="fade-in-text" variant="h5" sx={{
            wordWrap: "break-word",
            width: "60%",
            textAlign: "center",
            fontSize: 25,
            fontWeight: 500,
            letterSpacing: 0.7,
            color: "whitesmoke",
        }}>
            The place where all the information goes.
            Here you can search, upload, update and delete the information about your school.
        </Typography>}</>
  )
}

export default BoxInformation