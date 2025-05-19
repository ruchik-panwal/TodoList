import { todoDom, creatorFormDom, createNewBtn } from "./code/domCreator";
import {removeTodo} from "./code/editTodo";
import {newButton, editButton} from "./code/editControl";
import "./css/todo.css";
import "./css/creatorForm.css";

createNewBtn();
newButton();
todoDom();
editButton();
removeTodo();
