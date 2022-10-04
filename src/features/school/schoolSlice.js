import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    snackbar: false,
    trash: false,
    checkbox:false,
    dataAdding:[],
    error:{},
    data: []
}

const url = "http://localhost:4000"

export const schoolSlice = createSlice({
    name: "school",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true
        },
        fetchComplete:(state, action) =>{
            state.isLoading = false
            if(action !== undefined)
                state.data.push(action.payload)
        },
        fetchError:(state, action) =>{
            state.isLoading = false
            state.error = action.payload
        },
        snackBarCheck:(state, action)=>{
            state.snackbar = action.payload
        },
        trashCheck:(state, action)=>{
            state.trash = action.payload
        },
        dataAdding:(state, action )=>{
            if(action.payload !== "clear"){
                state.dataAdding.push(action.payload)
            }else{
                state.dataAdding = []
            }
        }
    }
})


export const { fetchStart, fetchComplete, fetchError, snackBarCheck, trashCheck, dataAdding } = schoolSlice.actions


export const fetchS = (id) => async dispatch =>{
    try{
        dispatch(fetchStart())
        const response = await axios.get(`${url}/${id}`)
        dispatch(fetchComplete(response?.students?.[0]))
    }catch(error){
        dispatch(fetchError(error))
    }
}

export const uploadSchool = (upload, id)=> async dispatch =>{
    try{
        dispatch(fetchStart())
        await axios.post(`${url}/${id}`, {
            data: {
                name: upload.name,
                lastname: upload.lastname,
                dateOfBirth: upload.dateOfBirth,
                subject: upload.subject,
                email: upload.email,
                phoneNumber: upload.phoneNumber,
                grade: upload.grade,
                comments: upload.comments
            }
        })
        dispatch(fetchComplete())
    }catch(error){
        dispatch(fetchError(error))
    }
}

export const updateSchool = (update, id) => async dispatch=>{
    try {
        dispatch(fetchStart())
        await axios.put(`${url}/${id}`,{
            data: {
                name: update.name,
                lastname: update.lastname,
                birth: update.dateOfBirth,
                subject: update.subject,
                email: update.email,
                phoneNumber: update.phoneNumber,
                grade: update.grade,
            }
        })
        dispatch(fetchComplete())
    } catch (error) {
        dispatch(fetchError(error))
    }
}

export default schoolSlice.reducer