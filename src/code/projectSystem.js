import { newProjectBtn, newProjectFormDom } from "./domCreator";

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
        projectCancelBtn.parentElement.parentElement.remove(); //Cancelling
    });

    const projectCancelBtn = document.querySelector(".projectFormCancelBtn"); //Selecting Cancel Button

    projectCancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectCancelBtn.parentElement.parentElement.remove(); //Cancelling
    });
}

export { newProject, projectForm };