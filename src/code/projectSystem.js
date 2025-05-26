import { newProjectBtn, newProjectFormDom, todoDom } from "./domCreator";
import { setProjectSelectionStatus, getProjectList } from "./todos";
import { removeTodo } from "./editTodo";
import { editButton } from "./editControl";

// Adding existing projects from localstorage
function localProject() {
  let projectList = getProjectList();

  if (projectList) {
    projectList.forEach((project) => {
      newProjectBtn(project);
    });
  }
}

// Calls the DomCreator for ProjectForm
function newProject() {
  const newProBtn = document.querySelector(".newProjectBtn"); //selecting Button

  newProBtn.addEventListener("click", () => {
    newProjectFormDom(); //Calling Dom Creator
    projectForm(); //rendering
  });
}

// Calls the Project Button Creator when clicked Done and also a cancel bttuon feature
function projectForm() {
  // Selecting Done Button and Form Input
  const projectSubmitBtn = document.querySelector(".projectFormSubmitBtn");
  const projectFormInput = document.querySelector("#projectFormInput");
  let projectList = getProjectList();

  projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //If input has value then seend it else keep the placeholder as name
    if (projectFormInput.value) {
      newProjectBtn(projectFormInput.value);
      projectList.push(projectFormInput.value);
    } else {
      newProjectBtn(projectFormInput.placeholder);
      projectList.push(projectFormInput.placeholder);
    }

    localStorage.setItem("projectList", JSON.stringify(projectList));
    projectCancelBtn.parentElement.parentElement.parentElement.remove(); //Cancelling

    projectSelection(); //rendering
  });

  const projectCancelBtn = document.querySelector(".projectFormCancelBtn"); //Selecting Cancel Button

  projectCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectCancelBtn.parentElement.parentElement.parentElement.remove(); //Cancelling

    projectSelection(); //rendering
  });
}

// selects the project clicked by user
function projectSelection() {
  const projectBtns = document.querySelectorAll(".projectButton");

  projectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectBtns.forEach((e) => {
        e.id = "";
      }); // Changes id to blank to keep default css
      btn.id = "selectedProject"; // Changes id for special css
      setProjectSelectionStatus(btn.textContent); // Changes global status for keeeping track

      // Reloading shit
      todoDom();
      removeTodo();
      editButton();
    });
  });
}

// // Editing the project
// function editProject(){

//     const editBtn = document.querySelectorAll(".projectEditButton");

//     editBtn.forEach((editBtn) => {
//         editBtn.addEventListener('click', () => {
//             const index = parseInt(editBtn.parentElement.parentElement.parentElement.id.slice(1)); //index number of the selected todo
//             editFormDom(index); //Creating DOM for the Form
//             editTodo(index); // assigning properties
//             cancelTodo(); // assigning properties
//         });
//     });

// }

export { newProject, projectForm, projectSelection, localProject };
