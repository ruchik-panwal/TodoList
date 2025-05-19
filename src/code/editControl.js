import { creatorFormDom, editFormDom } from "./domCreator";
import { createTodo, cancelTodo } from "./editTodo";

function newButton() {

    const newBtn = document.querySelector(".newTodoBtn");

    newBtn.addEventListener("click", () => {

        creatorFormDom();
        createTodo();
        cancelTodo();

    });

}

function editButton() {

    const editBtn = document.querySelectorAll(".editBtn");

    editBtn.forEach((editBtn) => {
        editBtn.addEventListener('click', () => {
            editFormDom();
            cancelTodo();
        });
    });

}

export { newButton, editButton };