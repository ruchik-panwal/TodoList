import { newProjectBtn, newProjectFormDom, todoDom } from "./domCreator";
import { setProjectSelectionStatus, getProjectList } from "./todos";
import { removeTodo } from "./editTodo";
import { editButton } from "./editControl";
import projectCancelBtnShowUp from "./animation";

// Adding existing projects from localstorage
function localProject() {
  let projectList = getProjectList();

  const np = document.querySelectorAll(".newProjectBtnWrap");

  if(np){
    np.forEach((np) => {
      np.remove();
    });
  }

  if (projectList) {
    projectList.forEach((project, index) => {
      newProjectBtn(project, index);
    });
  }

  removeProject();
  projectCancelBtnShowUp();
}

// Calls the DomCreator for ProjectForm
function newProject() {
  const newProBtn = document.querySelector(".newProjectBtn"); //selecting Button
  let projectList = getProjectList();

  newProBtn.addEventListener("click", () => {
    newProjectFormDom(projectList.length + 1); //Calling Dom Creator
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

    localProject();
    projectSelection(); //rendering

  });

  const projectCancelBtn = document.querySelector(".projectFormCancelBtn"); //Selecting Cancel Button

  projectCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectCancelBtn.parentElement.parentElement.parentElement.remove(); //Cancelling

    localProject();
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


function removeProject() {
  const cancelBtn = document.querySelectorAll(".projectCancelBtn");
  let projectList = getProjectList();

  cancelBtn.forEach((cancel) => {
    cancel.addEventListener("click", () => {
      const index = parseInt(cancel.id.slice(1)); //takes integer from the id
      projectList.splice(index, 1); // Removing the object
      localStorage.setItem("projectList", JSON.stringify(projectList));

      localProject();
    });
  });
}

export {
  newProject,
  projectForm,
  projectSelection,
  localProject,
  removeProject,
};
