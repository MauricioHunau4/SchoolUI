import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Box, TextField, Typography } from '@mui/material';
import { buttonLogin, radioGroup, textFieldLogin } from '../../DesignConst';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';



function FormLogin() {
    const [entitie, setEntitie] = useState();
    const [obj, setObj] = useState({ 
        entitie: undefined , 
        username: undefined , 
        password: undefined });
    const [name, setName] = useState();
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    const handleChangeEntitie = (e) => {
        setEntitie(e.target.value)
        setObj({...obj, entitie:e.target.value})
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setObj({...obj, password:e.target.value})
    }

    const handleName = async (e) => {
        setName(e.target.value)
        setObj({...obj, username:e.target.value})
    }
    
    const userError =()=>{
        if(name === undefined){
            setName(true)
        }
        if(password === undefined){
            setPassword(true)
        }
    }

    const Register = async () => {
        
        userError()
        setError(false)
        if (entitie !== undefined && name !== undefined && password !== undefined) {
            sessionStorage.setItem('session', JSON.stringify(obj))
            navigate('/foreach')
            /*setIsLoading(true)
            await fetch('/').then(()=>{
                setIsLoading(false)
                setError(false)}
            ).then(()=>{
                sessionStorage.setItem('session', JSON.stringify(obj))
                navigate(`/${entitie}`)
            })
            .catch(err=>{
                setIsLoading(false)
                setError(true)
            })*/
        }
    }

    return (<>
        <form onSubmit={(e) => {
            e.preventDefault()
            Register()
        }}>
            <Box sx={radioGroup}>
                <FormLabel id="demo-radio-buttons-group-label">Entitie</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Who is login"
                    
                    onChange={handleChangeEntitie}
                    name="radio-buttons-group"
                    row
                    sx={{ justifyContent: "center" }}
                >
                    <FormControlLabel value={"school"} control={<Radio />} label="School" />
                    <FormControlLabel value={"professor"} control={<Radio />} label="Professor" />
                    <FormControlLabel value={"student"} control={<Radio />} label="Student" />
                </RadioGroup>
            </Box>
            <Box sx={{ margin: "10px" }}>
                <TextField
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleName}
                    sx={textFieldLogin}
                /><span>{name===true && <Typography sx={{ color: "red" }}>Username is required</Typography>}</span>
                <TextField
                    id="password-input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handlePassword}
                    sx={textFieldLogin}
                /><span>{password ===true && <Typography sx={{ color: "red" }}>Password is required</Typography>}</span>
            </Box>
            {isLoading === false ?
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        Register()
                    }}
                    type='submit'
                    className="buttonLogin">
                    <Typography sx={{ color: "black" }}>
                        Login
                    </Typography>
                </button> :
                <LoadingButton sx={buttonLogin} loading>
                    Login
                </LoadingButton>
            }
            <span>{error && <Typography sx={{ color: "red" }}>Something went wrong...</Typography>}</span>
        </form>
    </>
    )
}

export default FormLogin

