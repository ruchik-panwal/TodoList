import { todolist , getProjectSelectionStatus } from "./todos";
import { todoDom } from "./domCreator";
import { editButton } from "./editControl";

function removeTodo() {

    const rmBtn = document.querySelectorAll(".rmBtn");
    let todoArr = todolist();

    rmBtn.forEach((rm) => {

        rm.addEventListener("click", () => {
            const index = parseInt(rm.parentElement.parentElement.parentElement.id.slice(1)); //takes integer from the id
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
        Project: ""
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

        tempObj.Project = getProjectSelectionStatus();

        todoArr.push(tempObj); //Pushing the Object in the array

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

    const todoArr = todolist();

    formEditBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        // Going through tempObj to update properties 
        for (const element in todoArr[ind]) {

            // going through every input
            inputs.forEach((input) => {
                if (element == input.id) todoArr[ind][element] = input.value; //ex if(Title == Title) array[Title] = inputValue
            });
        }

        // Reloading shit
        todoDom();
        removeTodo();
        editTodo(0);
        editButton();
        

        // Removing the form 
        document.querySelector(".editorForm").parentElement.remove();
    });

}

export { removeTodo, createTodo, cancelTodo, editTodo };