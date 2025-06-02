import { todolist, formInput, getProjectSelectionStatus } from "./todos";

const body = document.querySelector("body");

// DOM Creator for Header
function header() {
  // Main Div for Header
  const headerTab = document.createElement("div");
  headerTab.className = "headerTab";

  // LOGO
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "TODOOM";

  // Appending Everything
  headerTab.appendChild(logo);
  body.appendChild(headerTab);
}

// DOM Creator for footer
function footer() {
  // Main footer Div
  const footerTab = document.createElement("div");
  footerTab.className = "footerTab";

  // Wrapper for Credits
  const creditTab = document.createElement("div");
  creditTab.className = "creditTab";

  // Adding my name to Credits
  const creditName = document.createElement("div");
  creditName.className = "creditName";
  creditName.textContent = "By Ruchik Sandeep Panwal";
  creditTab.appendChild(creditName);

  // Wrapper for my socials' links
  const creditLinks = document.createElement("div");
  creditLinks.className = "creditLinks";
  creditTab.appendChild(creditLinks);

  // Small loop for creating DOM for both my github and LinkedIn links
  ["github", "linkedIn"].forEach((link) => {
    const linkDiv = document.createElement("a");
    linkDiv.className = "linkDiv";
    linkDiv.id = link;
    linkDiv.textContent = link;
    linkDiv.target = "_blank";
    linkDiv.rel = "noopener noreferrer";

    if (link == "github") linkDiv.href = "https://github.com/ruchik-panwal";
    else {
      linkDiv.href = "https://www.linkedin.com/in/ruchikpanwal/";
    }
    creditLinks.appendChild(linkDiv);
  });

  // Appending Everything
  footerTab.appendChild(creditTab);
  body.appendChild(footerTab);
}

// Creates The Base Dom for TODOList [Showing, controlling, everything]
function backBone() {
  // Main Wrapper
  const mainWrapper = document.createElement("div");
  mainWrapper.className = "mainWrapper";

  // Creating Projects Wrapper
  const projectsWrapper = document.createElement("div");
  projectsWrapper.className = "projectsWrapper";

  // Wrappers for all the Project Buttons
  const projectBtnWrapper = document.createElement("div");
  projectBtnWrapper.className = "projectBtnWrapper";

  // Adding Heading for project Buttons
  const projectText = document.createElement("div");
  projectText.className = "projectText";
  projectText.textContent = "Projects";
  projectBtnWrapper.appendChild(projectText);

  // Appending
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

// Creating DOM for Default project and new project button
function defProjectBtn() {
  const projectsWrapper = document.querySelector(".projectsWrapper"); // Wrapper

  // Creating a Default Project Button
  const defaulfBtn = document.createElement("button");
  defaulfBtn.className = "projectButton";
  defaulfBtn.textContent = "Default";
  defaulfBtn.id = "selectedProject";

  // Creating a button which enables to add new project
  const newProjectBtn = document.createElement("button");
  newProjectBtn.className = "newProjectBtn";
  newProjectBtn.textContent = "New Project";

  const projectBtnWrapper = document.querySelector(".projectBtnWrapper"); // Wrapper

  // Appending
  projectBtnWrapper.appendChild(defaulfBtn);
  projectsWrapper.appendChild(newProjectBtn);
  projectsWrapper.appendChild(projectBtnWrapper);
}

// Creates new project after form subbmit
function newProjectBtn(name, index) {
  const newProjectBtnWrap = document.createElement("div");
  newProjectBtnWrap.className = "newProjectBtnWrap";

  // Creating a New Project
  const newProjectBtn = document.createElement("button");
  newProjectBtn.className = "projectButton";
  newProjectBtn.id = "";
  newProjectBtn.textContent = name;

  const projectEditBtnsWrapper = document.createElement("div");
  projectEditBtnsWrapper.className = "projectEditBtnsWrapper";

  // Creating Cancel Button
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "projectCancelBtn";
  cancelBtn.textContent = "X";
  cancelBtn.id = "x" + index;
  projectEditBtnsWrapper.appendChild(cancelBtn);

  // Appending
  newProjectBtnWrap.appendChild(newProjectBtn);
  newProjectBtnWrap.appendChild(projectEditBtnsWrapper);
  const projectBtnWrapper = document.querySelector(".projectBtnWrapper");
  projectBtnWrapper.appendChild(newProjectBtnWrap);
}

// Creates DOM For form of newProject
function newProjectFormDom(ind) {
  // Creating Form
  const projectFormDom = document.createElement("form");
  projectFormDom.className = "projectFormDom";

  // Creating DOM which takes input for Project Name
  const projectFormInput = document.createElement("input");
  projectFormInput.type = "text";
  projectFormInput.id = "projectFormInput";
  projectFormInput.placeholder = "Project " + ind ;

  // Label For Projeect Input Name
  const projectFormLabel = document.createElement("label");
  projectFormLabel.for = "projectFormInput";
  projectFormLabel.textContent = "Project Name: ";

  // Submit Button for project
  const projectFormSubmitBtn = document.createElement("button");
  projectFormSubmitBtn.className = "projectFormSubmitBtn";
  projectFormSubmitBtn.type = "submit";
  projectFormSubmitBtn.textContent = "Done";

  // Cancel Button
  const projectFormCancelBtn = document.createElement("button");
  projectFormCancelBtn.textContent = "Cancel";
  projectFormCancelBtn.className = "projectFormCancelBtn";

  // Wrapper For Form Inputs
  const projectForminputWrapper = document.createElement("div");
  projectForminputWrapper.className = "projectForminputWrapper";

  // Wrapper For Form Buttons
  const projectFormBtnWrapper = document.createElement("div");
  projectFormBtnWrapper.className = "projectFormBtnWrapper";

  // Appending
  projectForminputWrapper.appendChild(projectFormLabel);
  projectForminputWrapper.appendChild(projectFormInput);
  projectFormBtnWrapper.appendChild(projectFormSubmitBtn);
  projectFormBtnWrapper.appendChild(projectFormCancelBtn);
  projectFormDom.appendChild(projectForminputWrapper);
  projectFormDom.appendChild(projectFormBtnWrapper);

  // Added a wrapper for CSS
  const holder = document.createElement("div");
  holder.className = "holder";
  holder.appendChild(projectFormDom);
  body.appendChild(holder);
}

// Creates a Button which creates the Form for inputing todos
function createNewBtn() {
  // Creating Wrapper
  const controlsWrapper = document.querySelector(".controlsWrapper");

  // A new Button which enables to create new Todo
  const newBtn = document.createElement("button");
  newBtn.className = "newTodoBtn";
  newBtn.textContent = "NEW";

  // Append
  controlsWrapper.appendChild(newBtn);
}

function todoDom() {
  const todosWrapper = document.querySelector(".todosWrapper");

  // Checks if the wrapper is already present
  while (todosWrapper.firstChild) {
    todosWrapper.removeChild(todosWrapper.firstChild);
  }

  // adding a counter
  let count = 0;

  //storing the reference of array to a variable
  let todoArr = todolist();

  // Going through the todo array to create dom for every element
  todoArr.forEach((todo) => {
    if (todo.Project == getProjectSelectionStatus()) {
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

          if (type == "DueDate") dateBtnWrapper.appendChild(typeDiv);
          else titleDesWrapper.appendChild(typeDiv);
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
    }
  });
}

// Creating a Dom for the form which creates new todo
function creatorFormDom() {
  // Creating a Form
  const creatorForm = document.createElement("form");
  creatorForm.className = "creatorForm";

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

  const holder = document.createElement("div");
  holder.className = "holder";

  holder.appendChild(creatorForm);
  body.appendChild(holder); //Appending to body
}

// Creating a DOM for the form which edits the todo
function editFormDom(ind) {
  // Creating a Form
  const editorForm = document.createElement("form");
  editorForm.className = "editorForm";

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

  const holder = document.createElement("div");
  holder.className = "holder";

  holder.appendChild(editorForm);
  body.appendChild(holder); //Appending to body
}

export {
  todoDom,
  creatorFormDom,
  createNewBtn,
  editFormDom,
  defProjectBtn,
  newProjectBtn,
  newProjectFormDom,
  backBone,
  header,
  footer,
};
