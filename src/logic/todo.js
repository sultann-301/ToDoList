const uuid = require("uuid");

class AppHandler {
  constructor() {
    this.projects = [];
  }

  findProject(projectID) {
    const foundProject = this.projects.find(
      (project) => project.projectID == projectID
    );

    console.log(`i found the project! ${foundProject.projectName}`);
    return foundProject;
  }
  findProjectAndDelete(projectID) {
    const projectToDelete = this.findProject(projectID);
    console.log(projectToDelete);
    console.log(`deleted project ${projectToDelete.projectName}!`);
    const projectToDeleteIndex = this.projects.indexOf(projectToDelete);
    this.projects = this.projects.filter(
      (elem, index) => index != projectToDeleteIndex
    );
    console.log(this.projects);
  }

  AddNewProject(projectName) {
    let newProject = new Project(projectName);
    this.projects.push(newProject);
    console.log(`added new project! its called ${newProject.projectName}`);
    return newProject;
  }
  AddNewTask(projectTitle, taskName, taskDueDate) {
    let newTask = new Task(taskName, taskDueDate);
    const currentProject = this.findProject(projectTitle.id);
    currentProject.addNewTask(newTask);
    console.log(
      `added task ${newTask.taskName} in project ${currentProject.projectName}`
    );
  }
  findTask() {
    null;
  }
  getProjectTaskList(projectTitle) {
    const currentProject = this.findProject(projectTitle.id);
    return currentProject.taskList;
  }
}

class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectID = uuid.v4();
    this.taskList = [];
  }
  addNewTask(task) {
    this.taskList.push(task);
  }
}

class Task {
  constructor(taskName, taskDueDate) {
    this.taskName = taskName;
    this.taskDueDate = taskDueDate;
    this.taskID = uuid.v4();
  }
}

const appHandler = new AppHandler();

export { appHandler };
