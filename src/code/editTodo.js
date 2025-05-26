import { todolist , getProjectSelectionStatus } from "./todos";
import { todoDom } from "./domCreator";
import { editButton } from "./editControl";

function removeTodo() {

    const rmBtn = document.querySelectorAll(".rmBtn");
    let todos = todolist();

    rmBtn.forEach((rm) => {

        rm.addEventListener("click", () => {
            const index = parseInt(rm.parentElement.parentElement.parentElement.id.slice(1)); //takes integer from the id
            todos.splice(index, 1); // Removing the object 
            localStorage.setItem("todos", JSON.stringify(todos));
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
        Project: ""
    };

    // storing array reference to this variable
    let todos = todolist();

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

        tempObj.Project = getProjectSelectionStatus();

        todos.push(tempObj); //Pushing the Object in the array

        localStorage.setItem("todos", JSON.stringify(todos));
        
        // re-rendering
        todoDom();
        createTodo();
        removeTodo();
        editButton();
        

        // Removing the form once a todo is created
        document.querySelector(".creatorForm").parentElement.remove();

    });

}

// Cancels and removes the form from the DOM
function cancelTodo() {

    const cancelButton = document.querySelector(".cancelBtn");

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector("." + cancelButton.parentElement.parentElement.className).remove(); // Selecting and removing the main wrapper
    });
}

// this edits the todo as per the information given by the user
function editTodo(ind){

    const formEditBtn = document.querySelector(".formEditBtn"); //Selecting Edit Button
    const inputs = document.querySelectorAll("input"); //Selecting input fields

    const todos = todolist();

    formEditBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        // Going through tempObj to update properties 
        for (const element in todos[ind]) {

            // going through every input
            inputs.forEach((input) => {
                if (element == input.id) todos[ind][element] = input.value; //ex if(Title == Title) array[Title] = inputValue
            });
        }

        // Reloading shit
        localStorage.setItem("todos", JSON.stringify(todos));
        todoDom();
        removeTodo();
        editTodo(0);
        editButton();
        

        // Removing the form 
        document.querySelector(".editorForm").parentElement.remove();
    });

}

export { removeTodo, createTodo, cancelTodo, editTodo };