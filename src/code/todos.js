let todos = JSON.parse(localStorage.getItem("todos")) || [];
let projectList = JSON.parse(localStorage.getItem("projectList")) || [];

let forminputs = [
    {
        name: "Title",
        type: "text",
        placeholder: "What To Do?",
        required: true
    },
    {
        name: "Description",
        type: "text",
        placeholder: "Add a Description...",
        required: false
    },
    {
        name: "DueDate",
        type: "date",
        placeholder: "",
        required: true
    },
    {
        name: "Priority",
        type: "text",
        placeholder: ["1", "2", "3", "4"],
        required: true
    }
]

let projectStatus = "Default";

function todolist() {
    return todos;
}

function getProjectList() {
    return projectList;
}

function formInput() {
    return forminputs;
}

function setProjectSelectionStatus(val) {
    projectStatus = val;
}

function getProjectSelectionStatus() {
    return projectStatus;
}

export { todolist, formInput, getProjectSelectionStatus, setProjectSelectionStatus, getProjectList };
