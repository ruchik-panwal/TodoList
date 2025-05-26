import {
  todoDom,
  createNewBtn,
  defProjectBtn,
  backBone,
  header,
  footer,
} from "./code/domCreator";
import { removeTodo } from "./code/editTodo";
import { newButton, editButton } from "./code/editControl";
import {
  newProject,
  projectSelection,
  localProject,
} from "./code/projectSystem";

import "./css/colors.css";
import "./css/backbone.css";
import "./css/todo.css";
import "./css/Form.css";
import "./css/projectButtons.css";
import "./css/controlWrapper.css";
import "./css/headerFooter.css";

header();
backBone();
defProjectBtn();
localProject();
newProject();
projectSelection();
createNewBtn();
newButton();
todoDom();
editButton();
removeTodo();
footer();
