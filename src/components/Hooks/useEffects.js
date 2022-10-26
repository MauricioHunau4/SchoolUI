import { useEffect, useState } from "react"
import { schoolChooseEntitieForModal } from "../../features/school/schoolSlice"
import { classes, subjects } from "../TagsForColumns"

export const useSubjectSelection = ({ subjectSelection, rowsForStudents }) => {
    const [rowsStudents, setRowsStudents] = useState(rowsForStudents)

    useEffect(() => {
        for (let materia in subjects) {
            if (subjectSelection === subjects[materia]) {
                setRowsStudents(rowsForStudents.filter(obj => Object.keys(obj).some(key => obj[key] === subjects[materia])))
            } else if (subjectSelection === "") {
                setRowsStudents(rowsForStudents)
            }
        }

    }, [subjectSelection, rowsForStudents])

    return rowsStudents
}

export const useClassOfStudents = ({ rows, classOfStudents }) => {
    const [newRowsClassOfStudents, setNewRowsClassOfStudents] = useState(rows)
    const [countRowsClassOfStudents, setCountRowsClassOfStudents] = useState(rows.length)

    useEffect(() => {
        if (classOfStudents === "") {
            setNewRowsClassOfStudents(rows)
            setCountRowsClassOfStudents(rows.length)
        } else {
            for (let classSelect in classes) {
                if (classOfStudents === classes[classSelect]) {
                    setNewRowsClassOfStudents(rows.filter(obj => Object.keys(obj).some(key => obj[key] === classes[classSelect])))
                    setCountRowsClassOfStudents(rows.filter(obj => Object.keys(obj).some(key => obj[key] === classes[classSelect])).length)
                }
            }
        }

    }, [classOfStudents, rows])

    return { newRowsClassOfStudents, countRowsClassOfStudents }
}

export const useDateSearch = ({ rows, dateSearch }) => {
    const [countRowsdateSearch, setCountRowsdateSearch] = useState(rows.length)
    const [newRowsDataSearch, setNewRowsDataSearch] = useState(rows)

    useEffect(() => {
        if (dateSearch !== '') {
            setNewRowsDataSearch(rows.filter(obj => Object.keys(obj).some(key => obj[key] === dateSearch)))
            setCountRowsdateSearch(rows.filter(obj => Object.keys(obj).some(key => obj[key] === dateSearch)).length)
        } else if (dateSearch === "") {
            setNewRowsDataSearch(rows)
            setCountRowsdateSearch(rows.length)
        }
    }, [dateSearch, rows])

    return { countRowsdateSearch, newRowsDataSearch }
}

export const useSearchAndSchoolEntitie = ({search, schoolChooseEntitie, rows, dispatch, rowsProfessorForSchool, rowsStudentForSchool})=>{
    
    const [rowsSchool, setRowsSchool] = useState(rowsProfessorForSchool)
    const [countsRowForSearch, setCountsRowForSearch] = useState(rowsProfessorForSchool)
    const [newRowsSearch, setNewRowsSearch] = useState(rows)

    useEffect(() => {
        if (search !== '') {
          if (schoolChooseEntitie === 'professor') {
            setRowsSchool(rowsProfessorForSchool.filter(obj => obj.name.includes(search)))
            setCountsRowForSearch(rowsProfessorForSchool.filter(obj => obj.name.includes(search)).length)
          } else {
            setRowsSchool(rowsStudentForSchool.filter(obj => obj.name.includes(search)))
            setCountsRowForSearch(rowsStudentForSchool.filter(obj => obj.name.includes(search)).length)
          }
          setNewRowsSearch(rows.filter(obj => obj.student.includes(search)))
          setCountsRowForSearch(rows.filter(obj => obj.student.includes(search)).length)
        } else if (search === "") {
          if (schoolChooseEntitie === 'professor') {
            setRowsSchool(rowsProfessorForSchool)
            setCountsRowForSearch(rowsProfessorForSchool.length)
          } else {
            setRowsSchool(rowsStudentForSchool)
            setCountsRowForSearch(rowsStudentForSchool.length)
          }
          setNewRowsSearch(rows)
          setCountsRowForSearch(rows.length)
        }
        dispatch(schoolChooseEntitieForModal(schoolChooseEntitie))
      }, [search, schoolChooseEntitie, dispatch, rows, rowsStudentForSchool, rowsProfessorForSchool])

      return {rowsSchool, countsRowForSearch, newRowsSearch}
}