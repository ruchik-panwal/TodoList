import { todolist } from "./todos";
import { todoDom } from "./domCreator";
import { editButton } from "./editControl";

function removeTodo() {

    const rmBtn = document.querySelectorAll(".rmBtn");
    let todoArr = todolist();

    rmBtn.forEach((rm) => {

        rm.addEventListener("click", () => {
            const index = parseInt(rm.parentElement.id.slice(1)); //takes integer from the id
            todoArr.splice(index, 1); // Removing the object 
            todoDom(); // Create New dom for the changed array
            removeTodo(); // assigns event listener to thr new Dom
            editButton(); //assign event listerner 
        });

    });

}

function createTodo() {

    const createBtn = document.querySelector(".createBtn"); //Selecting Submit Button
    const inputs = document.querySelectorAll("input"); //Selecting input fields

    // Creating a temporary object so to update and append to the todo array
    const tempObj = {
        Title: "",
        Description: "",
        DueDate: "",
        Priority: 1,
        status: 0,
        project: "default"
    };

    // storing array reference to this variable
    let todoArr = todolist();

    // Doing things when Clicked
    createBtn.addEventListener('click', (e) => {

        e.preventDefault(); //Prevents page reloading

        // Going through tempObj to update properties 
        for (const element in tempObj) {

            // going through every input
            inputs.forEach((input) => {
                if (element == input.id) tempObj[element] = input.value; //ex if(Title == Title) tempObj[Title] = inputValue
            });
        }

        todoArr.push(tempObj); //Pushing the Object in the array

        // Reloading shit
        todoDom();
        createTodo();
        removeTodo();

        // Removing the form once a todo is created
        document.querySelector(".creatorForm").remove();

    });

}

function cancelTodo() {

    const cancelButton = document.querySelector(".cancelBtn");

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector("." + cancelButton.parentElement.className).remove();
    });
}


export { removeTodo, createTodo, cancelTodo };