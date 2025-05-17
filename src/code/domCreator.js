import todolist from "./todos";

function todoDom(){

    const body = document.querySelector("body");
    const todoWrapper = document.createElement("div");

    todolist().forEach((todo) => {

        for(const type in todo){
            console.log(type);
            
        }

    });
}

export default todoDom;