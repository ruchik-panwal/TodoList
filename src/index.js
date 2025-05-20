import { todoDom, creatorFormDom, createNewBtn, defProjectBtn } from "./code/domCreator";
import {removeTodo} from "./code/editTodo";
import {newButton, editButton} from "./code/editControl";
import newProject from "./code/projectSystem";
import "./css/todo.css";
import "./css/creatorForm.css";

defProjectBtn();
newProject();
createNewBtn();
newButton();
todoDom();
editButton();
removeTodo();
