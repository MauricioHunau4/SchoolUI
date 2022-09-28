import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function FormMail() {
    const [send, setSend] = useState(true)

    return (
            <>
            {send ?
            <FormControl sx={{ padding: "30px" }}>
                <Box sx={{ display: "flex" }}>
                    <TextField
                        required
                        id="name-input"
                        name="name"
                        type="text"
                        placeholder="Name"
                        sx={{ bgcolor: "#D9D9D9", margin: "10px" }}
                    />
                    <TextField
                        id="name-input"
                        name="phone-number"
                        type="text"
                        placeholder="Phone number"
                        sx={{ bgcolor: "#D9D9D9", margin: "10px" }}
                    ></TextField>
                </Box>
                <TextField
                    required
                    id="email-input"
                    name="email"
                    type="text"
                    placeholder="Email"
                    sx={{ bgcolor: "#D9D9D9", margin: "10px" }}
                />
                <TextField
                    id="subject-input"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    sx={{ bgcolor: "#D9D9D9", margin: "10px" }}
                />
                <TextField
                    required
                    id="message-input"
                    name="message"
                    type="text"
                    placeholder="Message"
                    multiline={true}
                    rows={4}
                    size="medium"
                    sx={{ bgcolor: "#D9D9D9", margin: "10px" }}
                />
                <Box sx={{ textAlign: "center", padding: "10px 0 0 0" }}>
                    <Button
                        onClick={() => { setSend(false) }}
                        sx={{
                            bgcolor: "#F2994A",
                            borderRadius: 20,
                            width: "80%",
                            "&:hover": {
                                bgcolor: "#E46B00"
                            }
                        }}>
                        <Typography sx={{ color: "black" }}>
                            Send
                        </Typography>
                    </Button>
                </Box>
            </FormControl>:
        <Box sx={{ textAlign: "center", padding: "100px 0 0 0" }}>
            <svg class="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52">
                <circle className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none" />
                <path className="checkmark__check"
                    fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <Typography variant="h6" sx={{ color: "#FFFF" }}>Thanks for contact us!</Typography>
        </Box>
        }
    </>
)
}



export default FormMail