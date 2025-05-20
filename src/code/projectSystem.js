import { newProjectBtn, newProjectFormDom } from "./domCreator";

function newProject() {

    const newProBtn = document.querySelector(".newProjectBtn");

    newProBtn.addEventListener('click', () => {
        newProjectFormDom();

        projectForm(); //rendering
    });

}

function projectForm() {

    const projectSubmitBtn = document.querySelector(".projectFormSubmitBtn");
    const projectFormInput = document.querySelector("#projectFormInput");

    projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });

    const projectCancelBtn = document.querySelector(".projectFormCancelBtn");

    projectCancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectCancelBtn.parentElement.parentElement.remove();
    });
}

export { newProject, projectForm };