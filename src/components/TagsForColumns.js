
export const columnsOfGrades = [
    { id: 'subject', label: 'Subject', minWidth: 170 },
    { id: 'grade', label: 'Grade', minWidth: 100, format: (value) => value.toFixed(2) },
    { id: 'professor', label: 'Professor', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'date', label: 'Date', minWidth: 170, align: 'center', format: (value) => value.toLocaleString() },
    { id: 'comment', label: 'Comment', minWidth: 100, align: 'right' }
];

export const columnsOfProfessor = [
    { id: 'name', label: 'Professor', minWidth: 170 },
    { id: 'subject', label: 'Subject', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center', format: (value) => value },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
];

export const columnsOfStudents = [
    { id: 'student', label: 'Student', minWidth: 170 },
    { id: 'subject', label: 'Subject', minWidth: 100 },
    { id: 'grade', label: 'Grade', minWidth: 170, align: 'center', format: (value) => value.toFixed(2) },
    { id: 'date', label: 'Date (YYYY-MM-DD)', minWidth: 170, align: 'center' },
    { id: 'classOfStudents', label: 'Class', minWidth: 100, align: 'center', format: (value) => Number(value) },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
];

export const columnsOfStudentsForSchool = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'classes', label: 'Class', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'dateOfBirth', label: 'Date of birth', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
]
export const columnsOfProfessorsForSchool = [
    { id: 'name', label: 'Professor', minWidth: 170 },
    { id: 'subject', label: 'Subject', minWidth: 170, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center' },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
]

export const subjects = ["Math", "Science", "Geography", "History", "Art", "Economy", 'P.E.', 'Music','Informatic', 'Cousine', 'Spanish','English', 'Psicology', 'France', 'Theatre']

export const classes = [101, 102, 103, 104]

export const peopleToAdd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
