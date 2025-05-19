import { creatorFormDom, editFormDom } from "./domCreator";
import { createTodo, cancelTodo, editTodo } from "./editTodo";

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
            editFormDom(parseInt(editBtn.parentElement.id.slice(1)));
            editTodo(); // assigning properties
            cancelTodo(); // assigning properties
        });
    });

}

export { newButton, editButton };