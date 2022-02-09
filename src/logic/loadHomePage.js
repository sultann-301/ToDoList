import { displayProject, deleteProject } from "./projectHandler";
import { appHandler } from "./todo";

const content = document.querySelector("#content");
const container = document.createElement("div");
container.className = "container";

const renderSideNav = () => {
  //make sideNav
  const sideNav = document.createElement("div");
  sideNav.classList.add("sidenav");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("closebtn");
  closeBtn.innerHTML = "&#10006";
  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("new-project");
  newProjectBtn.innerText = "New Project";
  const displayProjectsBtn = document.createElement("ul");
  displayProjectsBtn.classList.add("display-projects");
  displayProjectsBtn.innerText = "Projects";
  const defaultProject = document.createElement("li");
  const project = appHandler.AddNewProject("Default Project");
  defaultProject.innerText = project.projectName;
  defaultProject.id = project.projectID;
  defaultProject.classList.add("project-list-item");
  displayProjectsBtn.append(defaultProject);
  const aboutBtn = document.createElement("button");
  aboutBtn.innerText = "About";

  sideNav.append(closeBtn, newProjectBtn, displayProjectsBtn, aboutBtn);
  content.append(sideNav);
};

const renderTaskForm = () => {
  const form = document.createElement("form");
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container", "hidden", "task-form");
  const formTitle = document.createElement("h3");
  formTitle.innerText = "NEW TASK";
  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  titleInput.placeholder = "Task Name";
  titleInput.id = "taskTitle";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.placeholder = "Date";
  dateInput.id = "dateInput";

  const formBtnContainer = document.createElement("div");
  formBtnContainer.classList.add("form-div");
  const addBtn = document.createElement("button");
  addBtn.type = "none";
  addBtn.id = "submitTask";
  addBtn.innerText = "Confirm";
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "cancelTask";
  cancelBtn.innerText = "Cancel";
  formBtnContainer.append(addBtn, cancelBtn);
  form.append(formTitle, titleInput, dateInput, formBtnContainer);
  formContainer.append(form);

  content.append(formContainer);
};

const renderProjectForm = () => {
  const form = document.createElement("form");
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container", "hidden");
  const formTitle = document.createElement("h3");
  formTitle.innerText = "NEW PROJECT";
  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  titleInput.placeholder = "Project Title";
  const formBtnContainer = document.createElement("div");
  formBtnContainer.classList.add("form-div");
  const addBtn = document.createElement("button");
  addBtn.id = "submit";
  addBtn.innerText = "Confirm";
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "cancel";
  cancelBtn.innerText = "Cancel";
  formBtnContainer.append(addBtn, cancelBtn);
  form.append(formTitle, titleInput, formBtnContainer);
  formContainer.append(form);

  content.append(formContainer);
  displayProject();
  deleteProject();
};

const renderHomePage = () => {
  renderSideNav();
  const navBar = document.createElement("nav");
  navBar.classList.add("navbar");
  navBar.setAttribute("id", "mySidenav");
  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("burger-container");
  for (let i = 0; i < 3; i++) {
    const burgerBar = document.createElement("div");
    burgerBar.classList.add(`burger`, `bar${i + 1}`);
    burgerContainer.append(burgerBar);
  }
  navBar.append(burgerContainer);
  const title = document.createElement("h1");
  title.innerText = "TO DO IT ALL";
  navBar.append(title);
  content.append(navBar);
  renderProjectForm();
  renderTaskForm();

  content.append(container);
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  content.append(projectContainer);
};

export { renderHomePage };
