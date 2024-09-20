const studentData = ['ervik','john','harald','bjorn']

function students(allStudents,studentName) {
for(let i=0; i<allStudents.length;i++)  {
    if (allStudents[i]===studentName) {
        console.log(`found:${studentName}`
        );
    }
}
}
students(studentData,'john')