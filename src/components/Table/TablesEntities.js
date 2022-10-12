import React, { useState, useEffect } from 'react'

//MUI
import { Box, Button, TableContainer, TablePagination, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//Internal Imports
import TableForEachEntitie from './TableForEachEntitie';
import { tableDesign } from '../../DesignConst';
import { subjects, classes } from '../TagsForColumns';
import CheckComment from './FunctionsTable';
import { schoolChooseEntitieForModal, trashCheck } from "../../features/school/schoolSlice";
import ModalEntities from "../Modal/ModalEntities"

//Redux imports
import { useDispatch } from "react-redux";


export default function TablesEntities(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [newRows, setNewRows] = useState(rows)
  const [rowsStudents, setRowsStudents] = useState(rowsForStudents)
  const [rowsSchool, setRowsSchool] = useState(rowsProfessorForSchool)
  const [countRows, setCountRows] = useState(rows.length)
  const dispatch = useDispatch()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    for (let materia in subjects) {
      if (props.subjectSelection === subjects[materia]) {
        setRowsStudents(rowsForStudents.filter(obj => Object.keys(obj).some(key => obj[key] === subjects[materia])))
      } else if (props.subjectSelection === "") {
        setRowsStudents(rowsForStudents)
      }
    }
    
  }, [props.subjectSelection])

  useEffect(() => {
    if (props.classOfStudents === "") {
      setNewRows(rows)
      setCountRows(rows.length)
    } else {
      for (let classSelect in classes) {
        if (props.classOfStudents === classes[classSelect]) {
          setNewRows(rows.filter(obj => Object.keys(obj).some(key => obj[key] === classes[classSelect])))
          setCountRows(rows.filter(obj => Object.keys(obj).some(key => obj[key] === classes[classSelect])).length)
        }
      }
    }
    
  }, [props.classOfStudents])

  useEffect(() => {
    if (props.dateSearch !== '') {
      setNewRows(rows.filter(obj => Object.keys(obj).some(key => obj[key] === props.dateSearch)))
      setCountRows(rows.filter(obj => Object.keys(obj).some(key => obj[key] === props.dateSearch)).length)
    } else if (props.dateSearch === "") {
      setNewRows(rows)
      setCountRows(rows.length)
    }
  }, [props.dateSearch])

  useEffect(() => {
    if (props.search !== '') {
      if (props.schoolChooseEntitie === 'professor') {
        setRowsSchool(rowsProfessorForSchool.filter(obj => obj.name.includes(props.search)))
        setCountRows(rowsProfessorForSchool.filter(obj => obj.name.includes(props.search)).length)
      } else {
        setRowsSchool(rowsStudentForSchool.filter(obj => obj.name.includes(props.search)))
        setCountRows(rowsStudentForSchool.filter(obj => obj.name.includes(props.search)).length)
      }
      setNewRows(rows.filter(obj => obj.student.includes(props.search)))
      setCountRows(rows.filter(obj => obj.student.includes(props.search)).length)
    } else if (props.search === "") {
      if (props.schoolChooseEntitie === 'professor') {
        setRowsSchool(rowsProfessorForSchool)
        setCountRows(rowsProfessorForSchool.length)
      } else {
        setRowsSchool(rowsStudentForSchool)
        setCountRows(rowsStudentForSchool.length)
      }
      setNewRows(rows)
      setCountRows(rows.length)
    }
    dispatch(schoolChooseEntitieForModal(props.schoolChooseEntitie))
  }, [props.search, props.schoolChooseEntitie, dispatch])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={tableDesign}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <TableForEachEntitie
          schoolChooseEntitie={props.schoolChooseEntitie}
          subjectSelection={props.subjectSelection}
          rowsSchool={rowsSchool}
          rowsStudents={rowsStudents}
          rows={newRows}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsForStudents={newRows}
        />
      </TableContainer >
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


function ButtonDelete() {
  const dispatch = useDispatch()
  const deletingPeople = () => {
    dispatch(trashCheck(true))
  }

  return (
    <Button type='submit' onClick={() => { deletingPeople() }}>
      <DeleteIcon sx={{ color: "black" }} />
    </Button>
  )
}

function CreateDataForProfessor(student, subject, grade, date, classOfStudents, comment) {

  const edit =
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModalEntities student={student} grade={grade} subject={subject} date={date} comment={comment} />
      <ButtonDelete />
    </Box>

  return { student, subject, grade, date, classOfStudents, edit };
}

function createDataForGrades(subject, grade, professor, date, commented) {
  const comment = <CheckComment commented={commented} />
  return { subject, grade, professor, date, comment }
}

function createDataForSchoolStudent(name, email, classes, dateOfBirth) {
  const edit =
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModalEntities
        name={name}
        email={email}
        classes={classes}
        dateOfBirth={dateOfBirth}
      />
      <ButtonDelete />
    </Box>
  return { name, email, classes, dateOfBirth, edit }
}

function CreateDataForSchoolProfessor(name, subject, email, phoneNumber) {
  const edit =
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModalEntities name={name} subject={subject} email={email} phoneNumber={phoneNumber} />
      <ButtonDelete />
    </Box>
  return { name, subject, email, phoneNumber, edit }
}



//Just for the Demo
const rows = [
  CreateDataForProfessor('Violet Stanley', 'Math', 7.5, "2022-06-06", 102, ""),
  CreateDataForProfessor('Lawrence Beck', 'Math', 5.5, "2022-06-06", 102, ""),
  CreateDataForProfessor('Heather Vasquez', 'Math', 6.0, "2022-06-06", 101, "Test for the comments"),
  CreateDataForProfessor('Samuel Roberts', 'Math', 7.5, "2022-06-06", 102, "Test for the comments"),
  CreateDataForProfessor('David Shelton', 'Math', 3.5, "2022-06-06", 102, "Test for the comments"),
  CreateDataForProfessor('Brett Murray', 'Math', 4.0, "2022-06-06", 101, ""),
  CreateDataForProfessor('Jessie Sanders', 'Math', 10.0, "2022-06-06", 102, ""),
  CreateDataForProfessor('James States', 'Math', 9.0, "2022-06-06", 101, ""),
  CreateDataForProfessor('Anderson Ryan', 'Math',  8.0, "2022-08-06", 103, ""),
  CreateDataForProfessor('Aubree Crawford', 'Math',  7.5, "2022-08-06", 104, ""),
  CreateDataForProfessor('Sylvia Crawford', 'Math',  2.0, "2022-08-06", 104, "Test for the comments"),
  CreateDataForProfessor('Andrea Palmer', 'Math',  1.5, "2022-08-06", 103, "Test for the comments"),
  CreateDataForProfessor('Russell Castillo', 'Math',  3.0, "2022-08-06", 103, "Test for the comments"),
  CreateDataForProfessor('Melanie Thomas', 'Math',  8.0, "2022-06-06", 102, "Test for the comments"),
  CreateDataForProfessor('Everett Harvey', 'Math',  6.0, "2022-06-06", 103, "Test for the comments"),
  CreateDataForProfessor('Rebecca Howard', 'Math',  5.0, "2022-06-06", 103, ""),
  CreateDataForProfessor('Violet Stanley', 'Math',  5.5, "2022-06-06", 102, ""),
  CreateDataForProfessor('Lawrence Beck', 'Math',  9.5, "2022-05-10", 102, ""),
  CreateDataForProfessor('Heather Vasquez', 'Math',  2.5, "2022-05-10", 101, ""),
  CreateDataForProfessor('Samuel Roberts', 'Math',  4.0, "2022-05-10", 102, "Test for the comments"),
  CreateDataForProfessor('Jessie Sanders', 'Math',  4.5, "2022-05-10", 102, "Test for the comments"),
  CreateDataForProfessor('Brett Murray', 'Math',  3.5, "2022-05-10", 101, "Test for the comments"),
  CreateDataForProfessor('James States', 'Math',  1.0, "2022-05-10", 101, "Test for the comments"),
  CreateDataForProfessor('Anderson Ryan', 'Math',  9.0, "2022-09-10", 103, "Test for the comments"),
  CreateDataForProfessor('Aubree Crawford', 'Math',  8.0, "2022-09-10", 104, ""),
  CreateDataForProfessor('Sylvia Crawford', 'Math',  7.0, "2022-09-10", 104, ""),
  CreateDataForProfessor('Stanley Hughes', 'Math',  6.0, "2022-09-10", 104, ""),
  CreateDataForProfessor('Pamela Harvey', 'Math',  5.0, "2022-09-10", 104, ""),
  CreateDataForProfessor('Glen Cole', 'Math',  3.0, "2022-05-10", 104, "Test for the comments"),
  CreateDataForProfessor('Katie Herrera', 'Math',  4.0, "2022-09-10", 104, "Test for the comments"),
];

const rowsStudentForSchool = [
  createDataForSchoolStudent('Katie Herrera', 'katie.herrera@example.com', 104, '2004-05-04'),
  createDataForSchoolStudent('Pamela Harvey', 'pamela.harvey@example.com', 104, '2004-07-01'),
  createDataForSchoolStudent('Stanley Hughes', 'stanley.hughes@example.com', 104, '2004-05-01'),
  createDataForSchoolStudent('Glen Cole', 'glen.cole@example.com', 104, '2004-05-04'),
  createDataForSchoolStudent('Violet Stanley', 'violet.stanley@example.com', 102, '2006-05-04'),
  createDataForSchoolStudent('Lawrence Beck', 'lawrence.beck@example.com', 102, '2006-05-04'),
  createDataForSchoolStudent('Heather Vasquez', 'heather.vasquez@example.com', 101, '2007-05-04'),
  createDataForSchoolStudent('Samuel Roberts', 'samuel.roberts@example.com', 101, '2007-05-04'),
  createDataForSchoolStudent('David Shelton', 'david.shelton@example.com', 102, '2006-05-04'),
  createDataForSchoolStudent('Brett Murray', 'brett.murray@example.com', 101, '2007-05-04'),
  createDataForSchoolStudent('Jessie Sanders', 'jessie.anders@example.com', 102, '2006-05-04'),
  createDataForSchoolStudent('James States', 'jamess.tates@example.com', 101, '2007-05-04'),
  createDataForSchoolStudent('Anderson Ryan', 'anderson.ryan@example.com', 103, '2005-05-04'),
  createDataForSchoolStudent('Aubree Crawford', 'aubree.crawford@example.com', 104, '2004-05-04'),
  createDataForSchoolStudent('Sylvia Crawford', 'sylvia.crawford@example.com', 104, '2004-05-04'),
  createDataForSchoolStudent('Andrea Palmer', 'andrea.palmer@example.com', 103, '2005-05-04'),
  createDataForSchoolStudent('Russell Castillo', 'russell.castillo@example.com', 103, '2005-05-04'),
  createDataForSchoolStudent('Melanie Thomas', 'melanie.thomas@example.com', 102, '2006-05-04'),
  createDataForSchoolStudent('Everett Harvey', 'everett.harvey@example.com', 103, '2005-05-04'),
]

const rowsForStudents = [
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/5/2022", ""),
  createDataForGrades('Art', 7.5, "Ella Martinez", "5/8/2022", ""),
  createDataForGrades('Art', 9, "Ella Martinez", "5/8/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/14/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "5/22/2022", ""),
  createDataForGrades('Economy', 6.5, "Sylvia Jones", "6/1/2022", ""),
  createDataForGrades('Math', 10.0, "James Smith", "6/6/2022", "Test for the comments"),
  createDataForGrades('Math', 7.0, "James Smith", "6/8/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "6/15/2022", "Test for the comments"),
  createDataForGrades('P.E.', 10.0, "Scott Morris", "10/5/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "10/5/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "10/5/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "10/5/2022", ""),
  createDataForGrades('Science', 7.5, "Marcel Renue", "10/5/2022", ""),
  createDataForGrades('P.E.', 8.0, "Scott Morris", "10/5/2022", "Test for the comments"),
  createDataForGrades('Math', 3.5, "James Smith", "10/5/2022", ""),
  createDataForGrades('Math', 7.5, "James Smith", "10/5/2022", ""),
  createDataForGrades('Geography', 4.0, "Diane Butler", "10/5/2022", ""),
  createDataForGrades('Geography', 7.5, "Diane Butler", "10/5/2022", ""),
  createDataForGrades('Economy', 6.5, "Sylvia Jones", "6/1/2022", ""),
  createDataForGrades('Math', 9.0, "James Smith", "10/5/2022", "Test for the comments"),
  createDataForGrades('History', 6.5, "Steven Jong", "10/7/2022", ""),
  createDataForGrades('Science', 4.0, "Marcel Renue", "10/8/2022", "Test for the comments"),
  createDataForGrades('Informatic', 7.5, "Pat Carroll", "10/5/2022", ""),
  createDataForGrades('Math', 10.0, "James Smith", "10/9/2022", "Test for the comments"),
  createDataForGrades('Math', 7.0, "James Smith", "10/15/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "10/22/2022", "Test for the comments"),
  createDataForGrades('Music', 3.0, "Teresa Sutton", "11/5/2022", "Test for the comments"),
  createDataForGrades('Music', 7.0, "Teresa Sutton", "11/5/2022", "Test for the comments"),
  createDataForGrades('Spanish', 5.0, "Beth Johnson", "11/9/2022", "Test for the comments"),
  createDataForGrades('Spanish', 7.5, "Beth Johnson", "11/9/2022", "Test for the comments"),
  createDataForGrades('Science', 7.5, "Marcel Renue", "11/14/2022", "Test for the comments"),
  createDataForGrades('History', 7.5, "Steven Jong", "11/16/2022", ""),
  createDataForGrades('Science', 7.5, "Marcel Renue", "11/25/2022", ""),
  createDataForGrades('Psicology', 7.5, "James Pena", "10/5/2022", ""),
  createDataForGrades('Psicology', 7.5, "James Pena", "10/5/2022", ""),
  createDataForGrades('Informatic', 7.5, "Pat Carroll", "10/5/2022", ""),
]


const rowsProfessorForSchool = [
  CreateDataForSchoolProfessor('Diane Butler', 'Geography', 'diane.butler@example.com', 5084202),
  CreateDataForSchoolProfessor('James Smith', 'Math', 'james.smith@example.com', 9170710),
  CreateDataForSchoolProfessor('Marcel Renue', 'Science', 'marcel.renue@example.com', 2308512),
  CreateDataForSchoolProfessor('Steven Jong', 'History', 'steven.jong@example.com', 8070098),
  CreateDataForSchoolProfessor('Ella Martinez', 'Art', 'ella.martinez@example.com', 4598459),
  CreateDataForSchoolProfessor('Sylvia Jones', 'Economy', 'sylvia.jones@example.com', 5701671),
  CreateDataForSchoolProfessor('Scott Morris', 'P.E.', 'scott.morris@example.com', 3529723),
  CreateDataForSchoolProfessor('Teresa Sutton', 'Music', 'teresa.sutton@example.com', 8302082),
  CreateDataForSchoolProfessor('Pat Carroll', 'Informatic', 'pat.carroll@example.com', 5270903),
  CreateDataForSchoolProfessor('Christine Neal', 'Cousine', 'christine.neal@example.com', 3220971),
  CreateDataForSchoolProfessor('Beth Johnson', 'Spanish', 'beth.johnson@example.com', 4532510),
  CreateDataForSchoolProfessor('Gertrude Willis', 'English', 'gertrude.willis@example.com', 4507998),
  CreateDataForSchoolProfessor('James Pena', 'Psicology', 'james.pena@example.com', 6503134),
  CreateDataForSchoolProfessor('Jose Riley', 'France', 'jose.riley@example.com', 2386697),
  CreateDataForSchoolProfessor('Kristin Lopez', 'Theatre', 'kristin.lopez@example.com', 8386719),
]
