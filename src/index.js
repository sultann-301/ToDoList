import "./styles/normalize.css";
import "./styles/style.css";
import { renderHomePage } from "./logic/loadHomePage";
import { handleBurgerMenu } from "./logic/burgerIconLogic";
import "./logic/projectHandler.js";
import {
  deleteProject,
  displayForm,
  displayProject,
  handleForm,
} from "./logic/projectHandler.js";

renderHomePage();
handleBurgerMenu();
displayForm();
handleForm();
