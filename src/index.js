import { todoDom, creatorFormDom, createNewBtn, defProjectBtn } from "./code/domCreator";
import { removeTodo } from "./code/editTodo";
import { newButton, editButton } from "./code/editControl";
import { newProject, projectSelection } from "./code/projectSystem";
import "./css/todo.css";
import "./css/creatorForm.css";
import "./css/projectButtons.css"

defProjectBtn();
newProject();
projectSelection();
createNewBtn();
newButton();
todoDom();
editButton();
removeTodo();
