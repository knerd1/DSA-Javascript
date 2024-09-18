//Create a array with 5 students names after that create a function which takes 2 parameters (allStudents & studentNames) iterate over all students and find that specific studentNames.

const studentsData = ['john','eick','merab','cody']

function students(allStudents,studentName) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i]===studentName) {
            console.log(`found; ${studentName}`);
        }
    }
}
students(studentsData,'merab')