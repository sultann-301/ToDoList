import { appHandler } from "./todo";

const handleTaskForm = () => {
  const taskForm = document.querySelector(".task-form");
  const confirmBtn = document.querySelector("#submitTask");
  const cancelBtn = document.querySelector("#cancelTask");
  console.log(confirmBtn);
  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNewTask();
    updateDisplay();
    taskForm.classList.toggle("hidden");
  });
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskForm.classList.toggle("hidden");
    console.log("ana mafrood a3ml haga lol");
  });
};

const addNewTask = () => {
  const taskContainer = document.createElement("div");
  let taskTitle = document.querySelector("#taskTitle");
  let taskDueDateInput = document.querySelector("#dateInput");
  const projectName = document.querySelector(".project-container h2");
  console.log(projectName);
  taskContainer.classList.add("task-container");
  let taskName = taskTitle.value;
  let taskDueDate = taskDueDateInput.value;
  if (taskDueDate == "") {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    taskDueDate = date;
  }
  console.log(taskDueDate);
  appHandler.AddNewTask(projectName, taskName, taskDueDate);
  taskTitle.value = "";
  taskDueDateInput.value = "";
};

const updateDisplay = () => {
  const projectTitle = document.querySelector(".project-container h2");
  console.log(projectTitle);
  const listHolder = document.querySelector(".task-container ul");
  while (listHolder.firstChild) {
    listHolder.removeChild(listHolder.firstChild);
  }
  const tasks = appHandler.getProjectTaskList(projectTitle);
  console.log(tasks);
  for (let task of tasks) {
    const taskSlot = document.createElement("li");
    taskSlot.innerText = `${task.taskName}   Due: ${task.taskDueDate}`;

    listHolder.append(taskSlot);
  }
};

export { handleTaskForm };
