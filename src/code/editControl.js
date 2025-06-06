import { creatorFormDom, editFormDom } from "./domCreator";
import { createTodo, cancelTodo, editTodo } from "./editTodo";

// Calls a form for inputing new todo
function newButton() {
  const newBtn = document.querySelector(".newTodoBtn");

  newBtn.addEventListener("click", () => {
    creatorFormDom(); //Creates form
    createTodo(); //create button
    cancelTodo(); //cancel button
  });
}

function editButton() {
  const editBtn = document.querySelectorAll(".editBtn");

  editBtn.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      const index = parseInt(
        editBtn.parentElement.parentElement.parentElement.id.slice(1)
      ); //index number of the selected todo
      editFormDom(index); //Creating DOM for the Form
      editTodo(index); // assigning properties
      cancelTodo(); // assigning properties
    });
  });
}

export { newButton, editButton };
