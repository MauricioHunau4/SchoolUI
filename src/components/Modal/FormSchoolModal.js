import { useSelector } from "react-redux"
import FormSchoolModalForProfessor from "./FormSchoolModalForProfessor"
import FormSchoolModalForStudent from "./FormSchoolModalForStudent"

const FormSchoolModal = (props) =>{
    const entitieChosen = useSelector(state=>state.school.schoolChooseEntitieForModal)
    if(entitieChosen === 'student'){
        return(<FormSchoolModalForStudent
            name={props.name}
            email={props.email}
            classes={props.classes}
            dateOfBirth={props.dateOfBirth} 
            />)
    }else{
        return(<FormSchoolModalForProfessor 
            name={props.name}
            subject={props.subject}
            email={props.email}
            phoneNumber={props.phoneNumber}/>)
    }
}

export default FormSchoolModal