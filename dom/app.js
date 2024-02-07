// variables
const studentsNameInput = document.getElementById("add-student-name");

const addStudentBtn = document.getElementById("add-student-btn");
//listeners
studentsNameInput.addEventListener("keyup", addNewStudent);
addStudentBtn.addEventListener("click", addNewStudent);

const students = [
  {
    name: "James Dean",
    meanGrades: 8.5,
    grades: [9, 8, 7, 9, 8],
  },
  {
    name: "Alain Delon",
    meanGrades: 7.8,
    grades: [9, 8, 7, 6, 8],
  },
  {
    name: "Marilyn Monroe",
    meanGrades: 8.2,
    grades: [8, 7, 9, 8, 8],
  },
  {
    name: "Audrey Hepburn",

    meanGrades: 9.0,
    grades: [10, 9, 8, 9, 10],
  },
  {
    name: "Grace Kelly",
    meanGrades: 8.7,
    grades: [9, 8, 9, 8, 8],
  },
];

///DO NOT forget to initialise
//addStudentsToTable(students);

///more elegant
window.addEventListener("load", addStudentsToTable);

// // Look at it as a counter
// function addNewStudent(e) {
//   if (e.key === "Enter" || e.target.id == "add-student-btn") {
//     console.log("Enter or Click on btn!");
//   }
// }

//const students = [];

// ↑↓

// ↓

function addNewStudent(e) {
  if (e.key === "Enter" || e.target.id == "add-student-btn") {
    const name = studentsNameInput.value;
    students.push({ name: name, gradesMean: 0, grades: [] });
    ///when we add a student, by default will take the given name
    ///the grades mean will be 0 in the first place, the array of grades will be null aswell

    addStudentsToTable();
  }
}

///FUNCTION TO POPULATE TABLE

function addStudentsToTable() {
  document.getElementById("students-table-body").innerHTML = students
    .map(
      (student) => `
      <tr> 
      <td> ${student.name} </td>
      <td> ${student.meanGrades} </td>
      <td> <button>See/Add grades</button> </td>
      <td> <button>X</button> </td>
      
      </tr>
      `
    )
    .join(" "); ////do not add any dashes, any commas in  here, you ruin everything
}

////////////////////SORTING METHODSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const sortAscByNameBtn = document.getElementById("sort-name-asc");
const sortDescByNameBtn = document.getElementById("sort-name-desc");

sortAscByNameBtn.addEventListener("click", sortStudentsByNameAsc);
sortDescByNameBtn.addEventListener("click", sortStudentsByNameDesc);

////////////////////////////////////////////KEEP THESE!!!!
// function sortStudentsByNameAsc()
// {
//   console.log('Asc');
// }

//  function sortStudentsByNameDesc()
// {
//   console.log('Desc');
// }

///e neintuitiv sa mearga cu stirnguri, dar mergeeeeeeeeeeeeeeeeee!                         BA NU A MERS. E TEAPA. USE LOCAL COMPARE
function sortStudentsByNameAsc() {
  students.sort((student1, student2) =>
    student1.name.localeCompare(student2.name)
  );
  console.log(students);
  addStudentsToTable(); // do not forget this
}

///                                                                           NU MAI FACE ASTA
// function sortStudentsByNameDesc() {
//   students.sort((student1, student2)=>student2.name-student1.name);
//   addStudentsToTable();  //do not forget this

// }

function sortStudentsByNameDesc() {
  ///////////asta merge!!!!!!!!!!!
  students.sort((student1, student2) =>
    student2.name.localeCompare(student1.name)
  );

  addStudentsToTable(); //do not forget this
}






// ------------------------------------------------------------------------------------------------------------

//1
const sortAscByMeanGradesBtn = document.getElementById("sort-mean-asc");
const sortDescByMeanGradesBtn = document.getElementById("sort-mean-desc");

//2
sortAscByMeanGradesBtn.addEventListener("click", sortStudentsByMeanGradesAsc); ///astea sunt niste nume de variabile care iau nume de fctii
sortDescByMeanGradesBtn.addEventListener("click", sortStudentsByMeanGradesDesc); ///daca te ajuta cu ceva

//3
function sortStudentsByMeanGradesDesc() {
  students.sort(
    (student1, student2) => student2.meanGrades - student1.meanGrades
  );
  addStudentsToTable(); //do not forget this
}

function sortStudentsByMeanGradesAsc() {
  students.sort(
    (student1, student2) => student1.meanGrades - student2.meanGrades
  );
  addStudentsToTable(); //do not forget this
}
// ---------------------------------------------------------------------------------------------------------------
