import React from 'react'
import { useState } from 'react'
import FormProfessorModal from './FormProfessorModal'

function FormModal(props) {
    let data = JSON.parse(sessionStorage.getItem('session'))

    if (data.entitie==="professor"){
    return (<>
        <FormProfessorModal handleClosing={props.handleClosing}/>
    </>
    )}else if(data.entitie==="school"){
        <FormSchoolModal handleClosing={props.handleClosing}/>
    }

}

const FormSchoolModal = (props) =>{
    const[entitieChange, setEntitieChange] = useState({
        name:props.name,
        lastname:props.lastname,
        dateOfBirth:props.dateOfBirth,
        subject:props.subject,
        email:props.email
    })
    
    return(<>

    </>)
}


export default FormModal