// variables
const studentsNameInput = document.getElementById("add-student-name");

const addStudentBtn = document.getElementById("add-student-btn");


const gradesTableContainer=document.querySelector('.grades-table-container');           ////                   !!!!
//listeners
studentsNameInput.addEventListener("keyup", addNewStudent);
addStudentBtn.addEventListener("click", addNewStudent);

let selectedStudent; /////////  variablia asta e undefined la inceput. vezi hoisting. vezi
///           o sa tot modificam variablia asta                  vezi var    VS let.       ! ! ! ! !

const students = [
  {
    id: 1,
    name: "James Dean",
    meanGrades: 8.5,
    grades: [9, 8, 7, 9, 8],
  },
  {
    id: 2,

    name: "Alain Delon",
    meanGrades: 7.8,
    grades: [9, 8, 7, 6, 8],
  },
  {
    id: 3,

    name: "Marilyn Monroe",
    meanGrades: 8.2,
    grades: [8, 7, 9, 8, 8],
  },
  {
    id: 4,

    name: "Audrey Hepburn",

    meanGrades: 9.0,
    grades: [10, 9, 8, 9, 10],
  },
  {
    id: 5,

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
    students.push({ id, name: name, gradesMean: 0, grades: [] });
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
      <td> ${student.id} </td>

      <td> ${student.name} </td>
      <td> ${student.meanGrades} </td>
      <td> <button id=${student.id}     class="show-grades">See/Add grades</button> </td>           
      <td> <button       class="delete-grades">X</button> </td>
      
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

///punem listener pe tbody ca sa verifica clasele din BUTOANELE STERGE NOTE (ADICA BUTONUL X) SI ADAUGA/VEZI NOTE
/// nu ave rost sa punem pe tot tabelul

const studentsTableBody = document.getElementById("students-table-body");

studentsTableBody.addEventListener("click", handleStudentActions);

/////////////////////////////////////////////////////////////////////////////////////                  YOU CAN USE IT AT SOME POINT
// function handleActions (e)
// {
//   if(e.target.classList.contains('delete-grades'))
//   {
//     console.log('x');   /////////////X E PUS INTRE ghilimele!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   }
//   else if(e.target.classList.contains('show-grades'))
//   {
//        console.log("grades");
//   }
// }

// function handleActions(e) {
//   if (e.target.classList.contains("delete-grades")) {
//     e.target.parentNode.parentNode.remove(); ////////////////tu aveai de sters un th. parintele paritelui!
//   } else if (e.target.classList.contains("show-grades")) {
//     ///aici a aparut problema idului
//     console.log(e.target.id);
//     const buttonId=e.target.id;
//     const student=students.find((student) => buttonId==student.id)
//     console.log(student);                                                     /////////////////////poti sa te mai uiti odata la asta
//   }
// }

//1
const gradesTableBody = document.getElementById("grades-table"); //////////!!!!!!!!!!!!!!!!!!!!!!!!!   acum e global

//2
gradesTableBody.addEventListener("click", handleGradesActions); ///////handle grades actions e nume de listener

function handleStudentActions(e) {
  if (e.target.classList.contains("delete-grades")) {
    e.target.parentNode.parentNode.remove(); ////////////////tu aveai de sters un th. => parintele paritelui!
  } else if (e.target.classList.contains("show-grades")) {
    ///aici a aparut problema idului
    console.log(e.target.id);
    const buttonId = e.target.id;
    gradesTableContainer.classList.remove('hide-grades');
    selectedStudent = students.find((student) => buttonId == student.id);

    //const gradesTableBody = document.getElementById("grades-table");

    gradesTableBody.innerHTML = selectedStudent.grades
      .map(
        (grade, index) =>
          `
      <tr>

         <td>${grade}<td/>
         <td><button id=${selectedStudent.id}-${index} class="delete-grade"> X </button>
         <td/>

         </tr>


      `
      )
      .join(" "); ///////////////////////////                   atentie la join

    console.log(selectedStudent);
  }
}

//   stergem note

// function handleGradesActions(e) {
//   console.log(e.target.id);  ///afisez nota cu indexul ei..................use index!

// }

/////////////////////////////////////////////////////////////////////////////////////////////              look at this
function handleGradesActions(e) {
  if (e.target.classList.contains("delete-grade")) {
    const gradeIndex = Number(e.target.id);
    console.log("gradeIndex=", gradeIndex);
    selectedStudent.grades.splice(gradeIndex, 1);
    // console.log(selectedStudent.grades);                         /// decomentaza sa vezi cum stergi note

    /// might result in glass breaking code                   refelosim maparea ca sa modificam indexul jnotei la fiecare stergere.
    ///                                       PUTEAM         SA      FAC             FUNCTIE:            RERENDER
    gradesTableBody.innerHTML = selectedStudent.grades
      .map(
        (grade, index) =>
          `
      <tr>

         <td>${grade}<td/>
         <td><button id=${selectedStudent.id}-${index} class="delete-grade"> X </button>
         <td/>

         </tr>


      `
      )
      .join(" "); ///////////////////////////                   atentie la join

    console.log(selectedStudent);
  }
}

//adaugam note
const gradeInput = document.getElementById("grade-input");
const addGradeBtn = document.getElementById("add-grade-btn");

addGradeBtn.addEventListener("click", addGrade);

function addGrade() {
  const grade = Number(gradeInput.value);
  selectedStudent.grades.push(grade);

  gradesTableBody.innerHTML = selectedStudent.grades
    .map(
      (grade, index) =>
        `
      <tr>

         <td>${grade}<td/>
         <td><button id=${selectedStudent.id}-${index} class="delete-grade"> X </button>
         <td/>

         </tr>


      `
    )
    .join(" "); ///////////////////////////                   atentie la join
}

//ASCUNDEM NOTE



const hideGradesBtn=document.getElementById('hide-grades');

hideGradesBtn.addEventListener('click', hideGradesContainer);

function hideGradesContainer()
{
  gradesTableContainer.classList.add("hide-grades");
}
