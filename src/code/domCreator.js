import { todolist, formInput } from "./todos";

const body = document.querySelector("body");

function header(){

    const headerTab = document.createElement("div");
    headerTab.className = "headerTab";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.textContent = "TODOOM";

    headerTab.appendChild(logo);
    body.appendChild(headerTab);

}

function backBone() {

    const mainWrapper = document.createElement("div");
    mainWrapper.className = "mainWrapper";
    
    // Creating Projects Wrapper
    const projectsWrapper = document.createElement("div");
    projectsWrapper.className = "projectsWrapper";

    const projectBtnWrapper = document.createElement("div");
    projectBtnWrapper.className = "projectBtnWrapper";

    const projectText = document.createElement("div");
    projectText.className = "projectText";
    projectText.textContent = "Projects"
    projectBtnWrapper.appendChild(projectText);

    projectsWrapper.appendChild(projectBtnWrapper);
    
    mainWrapper.appendChild(projectsWrapper);    

    // Creating Control Wrapper
    const controlsWrapper = document.createElement("div");
    controlsWrapper.className = "controlsWrapper";
    mainWrapper.appendChild(controlsWrapper);

    // Creator Todo Wrapper
    const todosWrapper = document.createElement("div"); //This will contain every todos
    todosWrapper.className = "todosWrapper";
    mainWrapper.appendChild(todosWrapper);

    body.appendChild(mainWrapper);
}

// Creating DOM for Different project and new project button
function defProjectBtn() {

    const projectsWrapper = document.querySelector(".projectsWrapper");

    const defaulfBtn = document.createElement("button");
    defaulfBtn.className = "projectButton";
    defaulfBtn.textContent = "Default";

    const newProjectBtn = document.createElement("button");
    newProjectBtn.className = "newProjectBtn";
    newProjectBtn.textContent = "New Project";

    const projectBtnWrapper = document.querySelector(".projectBtnWrapper");

    projectBtnWrapper.appendChild(defaulfBtn);
    projectsWrapper.appendChild(newProjectBtn);
    projectsWrapper.appendChild(projectBtnWrapper);

}

// Creates new project after form subbmit
function newProjectBtn(name) {

    const newProjectBtn = document.createElement("button");
    newProjectBtn.className = "projectButton";
    newProjectBtn.textContent = name;

    const projectBtnWrapper = document.querySelector(".projectBtnWrapper")
    projectBtnWrapper.appendChild(newProjectBtn);

}

// Creates DOM For form of newProject
function newProjectFormDom() {

    const projectFormDom = document.createElement("form");

    const projectFormInput = document.createElement("input");
    projectFormInput.type = "text";
    projectFormInput.id = "projectFormInput";
    projectFormInput.placeholder = "Project 1";

    const projectFormLabel = document.createElement("label");
    projectFormLabel.for = "projectFormInput";
    projectFormLabel.textContent = "Project Name: ";

    const projectFormSubmitBtn = document.createElement("button");
    projectFormSubmitBtn.className = "projectFormSubmitBtn";
    projectFormSubmitBtn.type = "submit";
    projectFormSubmitBtn.textContent = "Done";

    const projectFormCancelBtn = document.createElement("button");
    projectFormCancelBtn.textContent = "Cancel";
    projectFormCancelBtn.className = "projectFormCancelBtn";

    const projectForminputWrapper = document.createElement("div");
    projectForminputWrapper.className = "projectForminputWrapper";

    const projectFormBtnWrapper = document.createElement("div");
    projectFormBtnWrapper.className = "projectFormBtnWrapper";

    projectForminputWrapper.appendChild(projectFormLabel);
    projectForminputWrapper.appendChild(projectFormInput);

    projectFormBtnWrapper.appendChild(projectFormSubmitBtn);
    projectFormBtnWrapper.appendChild(projectFormCancelBtn);

    projectFormDom.appendChild(projectForminputWrapper);
    projectFormDom.appendChild(projectFormBtnWrapper);

    body.appendChild(projectFormDom);
}

// Creates a Button which creates the Form for inputing todos
function createNewBtn() {

    const controlsWrapper = document.querySelector(".controlsWrapper");

    const newBtn = document.createElement("button");
    newBtn.className = "newTodoBtn";
    newBtn.textContent = "NEW";

    controlsWrapper.appendChild(newBtn);

}

function todoDom() {

    const todosWrapper = document.querySelector(".todosWrapper");

    // Checks if the wrapper is already present
    while (todosWrapper.firstChild) {
        todosWrapper.removeChild(todosWrapper.firstChild);
    }


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

        // Wrapper For Date And TodoButton [For Styling]
        const dateBtnWrapper = document.createElement("div");
        dateBtnWrapper.className = "dateBtnWrapper";

        // Wrapper For Title And Description [For Styling]
        const titleDesWrapper = document.createElement("div");
        titleDesWrapper.className = "titleDesWrapper";


        // going through the single todo object to create dom for all the properties
        for (const type in todo) {

            if (type == "Title" || type == "Description" || type == "DueDate") {
                const typeDiv = document.createElement("div");
                typeDiv.className = type;
                typeDiv.textContent = todo[type];

                if (type == "DueDate")
                    dateBtnWrapper.appendChild(typeDiv);
                else
                    titleDesWrapper.appendChild(typeDiv);
            }
        }

        // creatin a wrapper for buttons
        const todoBtnWrapper = document.createElement("div");
        todoBtnWrapper.className = "todoBtnWrapper";

        // Creating and appending the edit button
        const editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "Edit";
        todoBtnWrapper.appendChild(editBtn);

        // Creating and appending the remove Button
        const rmBtn = document.createElement("button");
        rmBtn.className = "rmBtn";
        rmBtn.textContent = "X";
        todoBtnWrapper.appendChild(rmBtn);

        // Appending buttons 
        dateBtnWrapper.appendChild(todoBtnWrapper);

        todoDiv.appendChild(titleDesWrapper);
        todoDiv.appendChild(dateBtnWrapper);


        // Appending everything to a wrapper
        todosWrapper.appendChild(todoDiv);
    });
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

export { todoDom, creatorFormDom, createNewBtn, editFormDom, defProjectBtn, newProjectBtn, newProjectFormDom, backBone, header };