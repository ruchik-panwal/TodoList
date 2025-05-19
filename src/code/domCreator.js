import { todolist, formInput } from "./todos";

const body = document.querySelector("body");

// Creates a Button which creates the Form for inputing todos
function createNewBtn() {

    const newBtn = document.createElement("button");
    newBtn.className = "newTodoBtn";
    newBtn.textContent = "New";

    body.appendChild(newBtn);

}

function todoDom() {

    // Checks if the wrapper is already present
    const existingWrapper = document.querySelector(".todosWrapper");
    if (existingWrapper) existingWrapper.remove();


    const todosWrapper = document.createElement("div"); //This will contain every todos
    todosWrapper.className = "todosWrapper";

    // adding a counter
    let count = 0

    //storing the reference of array to a variable 
    let todoArr = todolist();

    // Going through the todo array to create dom for every element
    todoArr.forEach((todo) => {

        // wrapper for single todos
        const todoDiv = document.createElement("div");
        todoDiv.className = "todoDiv";
        todoDiv.id = "x" + count++; //This gives every todo div the index of its og object

        // going through the single todo object to create dom for all the properties
        for (const type in todo) {

            const typeDiv = document.createElement("div");
            typeDiv.className = type;
            typeDiv.textContent = todo[type];
            todoDiv.appendChild(typeDiv);

        }

        // Creating and appending the remove Button
        const rmBtn = document.createElement("button");
        rmBtn.className = "rmBtn";
        rmBtn.textContent = "Remove";
        todoDiv.appendChild(rmBtn);

        // Creating and appending the edit button
        const editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "Edit";
        todoDiv.appendChild(editBtn);

        // Appending everything to a wrapper
        todosWrapper.appendChild(todoDiv);
    });

    // Appending to body
    body.appendChild(todosWrapper);
}

// Creating a Dom for the form which creates new todo
function creatorFormDom() {


    // Creating a Form
    const creatorForm = document.createElement("form");
    creatorForm.className = "creatorForm"

    // Storing the reference of array to a variable
    let formInputs = formInput();

    // Itterating through the array to create every Input
    formInputs.forEach((inputElement) => {

        // Wrapper for input and label
        const inputWrapper = document.createElement("div");
        inputWrapper.className = "inputWrapper";

        // Creating and appending label
        const label = document.createElement("label");
        label.for = inputElement.name;
        label.textContent = inputElement.name;
        inputWrapper.appendChild(label);

        // Creating and appending Input
        const input = document.createElement("input");
        input.id = inputElement.name;
        input.type = inputElement.type;
        input.placeholder = inputElement.placeholder;
        inputWrapper.appendChild(input);

        creatorForm.appendChild(inputWrapper); //Appending both
    });

    // Creating and appending a Submit Button 
    const createBtn = document.createElement("button");
    createBtn.className = "createBtn";
    createBtn.type = "submit";
    createBtn.textContent = "Create";
    creatorForm.appendChild(createBtn);

    // Creating and Appending a Cancel Button
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cancelBtn";
    cancelBtn.type = "submit";
    cancelBtn.textContent = "Cancel";
    creatorForm.appendChild(cancelBtn);

    body.appendChild(creatorForm); //Appending to body

}

// Creating a DOM for the form which edits the todo
function editFormDom(ind) {

    // Creating a Form
    const editorForm = document.createElement("form");
    editorForm.className = "editorForm"

    // Storing the reference of array to a variable
    let formInputs = formInput();
    let todoArr = todolist();

    // Storing array objecct of the todo
    const todoObj = todoArr[ind];

    // Itterating through the array to create every Input
    formInputs.forEach((inputElement) => {

        // Wrapper for input and label
        const inputWrapper = document.createElement("div");
        inputWrapper.className = "inputWrapper";

        // Creating and appending label
        const label = document.createElement("label");
        label.for = inputElement.name;
        label.textContent = inputElement.name;
        inputWrapper.appendChild(label);

        // Creating and appending Input
        const input = document.createElement("input");
        input.id = inputElement.name;
        input.type = inputElement.type;
        input.placeholder = inputElement.placeholder;
        inputWrapper.appendChild(input);

        // Changing input value to match that of the todo to be editted
        input.value = todoObj[input.id];

        editorForm.appendChild(inputWrapper); //Appending both
    });

    // Adding a status Input
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "inputWrapper";

    const label = document.createElement("label");
    label.for = "Status";
    label.textContent = "Completed";
    inputWrapper.appendChild(label);

    const input = document.createElement("input");
    input.id = "Status";
    input.type = "checkbox";
    inputWrapper.appendChild(input);

    // Changing input value to match that of the todo to be editted
    input.checked = todoObj[input.id];

    editorForm.appendChild(inputWrapper); //Appending both


    // Creating and appending a Submit Button 
    const formEditBtn = document.createElement("button");
    formEditBtn.className = "formEditBtn";
    formEditBtn.type = "submit";
    formEditBtn.textContent = "Edit";
    editorForm.appendChild(formEditBtn);

    // Creating and Appending a Cancel Button
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cancelBtn";
    cancelBtn.type = "submit";
    cancelBtn.textContent = "Cancel";
    editorForm.appendChild(cancelBtn);

    body.appendChild(editorForm); //Appending to body

}

export { todoDom, creatorFormDom, createNewBtn, editFormDom };