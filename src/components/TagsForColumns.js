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
    { id: 'name', label: 'Professor', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toString() },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 170, align: 'center', format: (value) => value },
    { id: 'dateOfBirth', label: 'Date of birth', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'edit', label: 'Edit', minWidth: 170, align: 'center' },
]

export const subjects = ["Math", "Science", "Geography", "History"]

export const classes = [101, 102, 103, 104]

