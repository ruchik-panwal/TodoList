import { todoDom, createNewBtn, defProjectBtn, backBone, header, footer} from "./code/domCreator";
import { removeTodo } from "./code/editTodo";
import { newButton, editButton } from "./code/editControl";
import { newProject, projectSelection } from "./code/projectSystem";
import "./css/todo.css";
import "./css/creatorForm.css";
import "./css/projectButtons.css"
import "./css/backbone.css"
import "./css/controlWrapper.css"
import "./css/headerFooter.css"

header();
backBone();
defProjectBtn();
newProject();
projectSelection();
createNewBtn();
newButton();
todoDom();
editButton();
removeTodo();
footer();