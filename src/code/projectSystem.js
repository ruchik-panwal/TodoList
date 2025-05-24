import { newProjectBtn, newProjectFormDom, todoDom } from "./domCreator";
import { getProjectSelectionStatus, setProjectSelectionStatus } from "./todos";
import { removeTodo, editTodo } from "./editTodo";
import { editButton } from "./editControl";

// Calls the DomCreator for ProjectForm
function newProject() {

    const newProBtn = document.querySelector(".newProjectBtn"); //selecting Button

    newProBtn.addEventListener('click', () => {
        newProjectFormDom(); //Calling Dom Creator
        projectForm(); //rendering
    });

}

// Calls the Project Button Creator when clicked Done and also a cancel bttuon feature
function projectForm() {

    // Selecting Done Button and Form Input
    const projectSubmitBtn = document.querySelector(".projectFormSubmitBtn");
    const projectFormInput = document.querySelector("#projectFormInput");

    projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectFormInput.value ? newProjectBtn(projectFormInput.value) : newProjectBtn(projectFormInput.placeholder); //If input has value then seend it else keep the placeholder as name 
        projectCancelBtn.parentElement.parentElement.parentElement.remove(); //Cancelling

        projectSelection(); //rendering
    });

    const projectCancelBtn = document.querySelector(".projectFormCancelBtn"); //Selecting Cancel Button

    projectCancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectCancelBtn.parentElement.parentElement.parentElement.remove(); //Cancelling

        projectSelection(); //rendering
    });


}

// selects the project clicked by user
function projectSelection() {

    const projectBtns = document.querySelectorAll(".projectButton");

    projectBtns.forEach((btn) => {

        btn.addEventListener('click', (e) => {

            projectBtns.forEach((e) => { e.id = ""; }); // Changes id to blank to keep default css
            btn.id = "selectedProject"; // Changes id for special css
            setProjectSelectionStatus(btn.textContent); // Changes global status for keeeping track 

            // Reloading shit
            todoDom();
            removeTodo();
            editButton();
        });

    });

}

export { newProject, projectForm, projectSelection };