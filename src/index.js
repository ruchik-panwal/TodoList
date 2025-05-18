import { todoDom, creatorFormDom, createNewBtn } from "./code/domCreator";
import {removeTodo, createTodo} from "./code/editTodo";
import newButton from "./code/editControl";
import "./css/todo.css";
import "./css/creatorForm.css";

createNewBtn();
newButton();
todoDom();
removeTodo();
