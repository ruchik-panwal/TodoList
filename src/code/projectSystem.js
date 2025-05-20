import { newProjectBtn } from "./domCreator";

function newProject(){

    const newProBtn = document.querySelector(".newProjectBtn");

    newProBtn.addEventListener('click', () => {

        newProjectBtn();

    });

}

export default newProject;