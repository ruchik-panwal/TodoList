
let todos = [
    {
        title: "title",
        description: "lorem ipsum bhosda",
        duedate: "22-02-20",
        priority: 1,
        status: 0,
        project: "default"
    },
    {
        title: "Linkedin Post",
        description: "IDEA Heckathon linkedin post",
        duedate: "17-05-25",
        priority: 1,
        status: 0,
        project: "default"
    },
    {
        title: "DSA",
        description: "DSA Karle bhai varna job nahi milega",
        duedate: "22-02-20",
        priority: 1,
        status: 0,
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
        placeholder: "Add a description...",
        required: false
    },
    {
        name: "Due Date",
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

function todolist() {
    return todos;
}

function formInput(){
    return forminputs;
}

export default todolist;
