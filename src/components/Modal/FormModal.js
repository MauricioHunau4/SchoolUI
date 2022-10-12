import React from 'react'
import FormProfessorModal from './FormProfessorModal'
import FormSchoolModal from './FormSchoolModal'

function FormModal(props) {
    let data = JSON.parse(sessionStorage.getItem('session'))
    
    if (data.entitie==="professor"){
    return (<>
        <FormProfessorModal handleClosing={props.handleClosing}
        student={props.student} 
        grade={props.grade} 
        date={props.date}
        subject={props.subject}
        comment={props.comment}
        />
    </>
    )}else if(data.entitie === "school"){
        return(
        <FormSchoolModal handleClosing={props.handleClosing} 
            name={props.name}
            subject={props.subject}
            email={props.email}
            phoneNumber={props.phoneNumber}
            classes={props.classes}
            dateOfBirth={props.dateOfBirth}
            />)
    }
}


export default FormModal