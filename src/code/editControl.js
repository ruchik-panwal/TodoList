import { creatorFormDom } from "./domCreator";
import { createTodo, cancelTodo} from "./editTodo";

function newButton() {

    const newBtn = document.querySelector(".newTodoBtn");

    newBtn.addEventListener("click", () => {

        creatorFormDom();
        createTodo();
        cancelTodo();

    });

}

export default newButton;