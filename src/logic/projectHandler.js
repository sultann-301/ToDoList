import { handleTaskForm } from "./taskHandler";
import { ToDo, Project, appHandler } from "./todo";

const displayForm = () => {
  const newProjectBtn = document.querySelector(".new-project");
  const projectForm = document.querySelector(".form-container");

  newProjectBtn.addEventListener("click", () => {
    //console.log("something should happen!!");

    projectForm.classList.toggle("hidden");
    projectForm.classList.toggle("popIn");
  });
};

const handleForm = () => {
  const projectForm = document.querySelector(".form-container");

  const submitBtn = document.querySelector("#submit");
  const cancelBtn = document.querySelector("#cancel");
  const titleInput = document.querySelector("#titleInput");
  const projectsList = document.querySelector(".display-projects");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userTitle = titleInput.value;
    const projectListItem = document.createElement("li");
    projectListItem.classList.add("project-list-item");
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.innerHTML = "&#10006;";
    deleteProjectBtn.id = "delProject";
    //add new project to projects array

    const newProject = appHandler.AddNewProject(userTitle);
    appHandler.findProject(newProject.projectID);
    projectListItem.id = newProject.projectID;
    projectListItem.innerText = newProject.projectName;
    projectListItem.append(deleteProjectBtn);
    projectsList.append(projectListItem);

    titleInput.value = "";
    projectForm.classList.toggle("hidden");
    displayProject();
    deleteProject();
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectForm.classList.toggle("hidden");
  });
};

const displayProject = () => {
  const projects = document.querySelectorAll(".project-list-item");
  const projectContainer = document.querySelector(".project-container");

  for (let project of projects) {
    project.addEventListener("click", () => {
      const projectTitle = document.createElement("h2");
      projectTitle.innerText = appHandler.findProject(project.id).projectName;
      projectTitle.id = project.id;

      const listContainer = document.createElement("div");
      const listHolder = document.createElement("ul");
      listContainer.classList.add("task-container");
      const addTask = document.createElement("button");
      addTask.classList.add("add-new-task");
      addTask.innerText = "Add New Task";
      listContainer.append(addTask);
      listContainer.append(listHolder);
      if (projectContainer.hasChildNodes()) {
        projectContainer.innerHTML = "";
      }
      projectContainer.append(projectTitle, listContainer);

      listenForTaskAddition();
    });
  }
};

const deleteProject = () => {
  const delButtons = document.querySelectorAll(".display-projects li button");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", (e) => {
      const listItem = delButton.previousSibling.parentElement;

      appHandler.findProjectAndDelete(listItem.id);

      listItem.remove();
    });
  }
};

const listenForTaskAddition = () => {
  const addTaskBtn = document.querySelector(".add-new-task");
  const taskForm = document.querySelector(".task-form");
  addTaskBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
  });
  handleTaskForm();
};

export { displayForm, handleForm, displayProject, deleteProject };
