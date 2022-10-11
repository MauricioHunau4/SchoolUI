import React from 'react'
import { peopleToAdd } from '../TagsForColumns'
import CellTableForSchool from './CellTableForSchool'

function AddingTableSchool(props) {
    return (
        <>
        {peopleToAdd.map((people)=>{
            return <CellTableForSchool key={people} classAddingSelection={props.classAddingSelection}/>
        })}
        </>
    )
}



export default AddingTableSchool