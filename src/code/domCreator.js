import todolist from "./todos";

function todoDom() {


    const body = document.querySelector("body");

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

export default todoDom;