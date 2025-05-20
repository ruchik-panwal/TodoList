
let todos = [
    {
        Title: "Title",
        Description: "lorem ipsum bhosda",
        DueDate: "22-02-20",
        Priority: 1,
        Status: false,
        project: "default"
    },
    {
        Title: "Linkedin Post",
        Description: "IDEA Heckathon linkedin post",
        DueDate: "17-05-25",
        Priority: 1,
        Status: false,
        project: "default"
    },
    {
        Title: "DSA",
        Description: "DSA Karle bhai varna job nahi milega",
        DueDate: "22-02-20",
        Priority: 1,
        Status: false,
        project: "default"
    }
]

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

let projectStatus = "default";

function todolist() {
    return todos;
}

function formInput(){
    return forminputs;
}

function projectSelectionStatus(){
    return projectStatus ;
}

export  {todolist,formInput, projectSelectionStatus};
