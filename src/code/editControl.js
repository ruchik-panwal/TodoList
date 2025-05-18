import { createNewBtn } from "./domCreator";
import { creatorFormDom } from "./domCreator";
import { createTodo } from "./editTodo";

function newButton() {

    const newBtn = document.querySelector(".newTodoBtn");

    newBtn.addEventListener("click", () => {

        creatorFormDom();
        createTodo();

    });

}

export default newButton;