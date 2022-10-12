import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    snackbar: false,
    trash: false,
    schoolChooseEntitieForModal: 'professor',
    dataAdding:[],
    error:{},
    data: []
}


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
        },
        schoolChooseEntitieForModal:(state, action) =>{
            state.schoolChooseEntitieForModal = action.payload
        }
    }
})


export const { fetchStart, fetchComplete, fetchError, snackBarCheck, trashCheck, dataAdding, schoolChooseEntitieForModal } = schoolSlice.actions

export default schoolSlice.reducer