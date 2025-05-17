import todolist from "./todos";

function todoDom(){

    const body = document.querySelector("body");
    const todosWrapper = document.createElement("div");
    todosWrapper.className = "todosWrapper";
    let count = 0;


    todolist().forEach((todo) => {


        const todoDiv = document.createElement("div");
        todoDiv.className = "todoDiv";

        for(const type in todo){
            const typeDiv = document.createElement("div");
            typeDiv.className = type;
            typeDiv.textContent = todo[type];
            todoDiv.appendChild(typeDiv);
        }

        count++;
        todosWrapper.appendChild(todoDiv);
    });

    body.appendChild(todosWrapper);
}

export default todoDom;