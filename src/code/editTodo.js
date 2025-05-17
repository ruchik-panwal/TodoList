import todolist from "./todos";
import todoDom from "./domCreator";

function removeTodo() {

    const rmBtn = document.querySelectorAll(".rmBtn");
    let todoArr = todolist();

    rmBtn.forEach((rm) => {

        rm.addEventListener("click", () => {
            const index = parseInt(rm.parentElement.id.slice(1)); //takes integer from the id
            todoArr.splice(index, 1); // Removing the object 
            todoDom(); // Create New dom for the changed array
            removeTodo(); // assigns event listener to thr new Dom
        });

    });

}

export default removeTodo;