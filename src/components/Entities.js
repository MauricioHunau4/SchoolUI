import React from "react";
import Student from './Student/Student'
import Professor from "./Professor/Professor";
import School from "./School/School"

export default function Entities(){
    let data = JSON.parse(sessionStorage.getItem('session'))
    return(
        <>
        {data[0].entitie === "student"? <Student />:<></>}
        {data[0].entitie === "professor"? <Professor />:<></>}
        {data[0].entitie === "school"? <School />:<></>}
        </>
    )
}
