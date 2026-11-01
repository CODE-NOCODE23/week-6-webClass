const students = [
    {
        name: "Chioma",
        age: 16,
        course: "Economics",
        score: 64
    },
    {
        name: "Tunde",
        age: 15,
        course: "Geography",
        score: 38
    },
    {
        name: "Fatima",
        age: 17,
        course: "History",
        score: 91
    },
    {
        name: "Emeka",
        age: 14,
        course: "Literature",
        score: 45
    },
    {
        name: "Zainab",
        age: 16,
        course: "Government",
        score: 72
    },
]

function getGrade(score) {
    if (score >= 70) {
        return "A";
    }
    else if (score >= 50 && score <= 69) {
        return "B";
    }
    else if (score >= 35 && score <= 49) {
        return "C";
    }
    else if (score <= 35) {
        return "F";
    }
}

function displayStudent(student) {
    console.log(
        `${student.name} (${student.age}) is studying ${student.course} and scored ${student.score} - Grade ${getGrade(student.score)}`
    );
}

students.forEach(student => displayStudent(student));

const passedStudents = students.filter((student) => student.score >= 50);
console.log("students who passed:");
passedStudents.forEach(student => displayStudent(student));

const studentNames = students.map((student) => student.name);
console.log("Student Names:", studentNames);

function averageScore(students) {
    const totalScore = students.reduce((total, student) => total + student.score, 0);
    return totalScore / students.length;
}

console.log("Average Score:", averageScore(students));
