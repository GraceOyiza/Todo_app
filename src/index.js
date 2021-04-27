import './scss/style.scss';
import 'bootstrap';
import { Modal } from 'bootstrap';
import { Project, Todo } from './js/models';
import { appendTodo, appendProject, getActiveTab } from './js/utils';

const projectForm = document.getElementById('projectForm');
const projectsTree = document.getElementById('projectsTree');

// Handle project form submission
projectForm.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const newProject = new Project(formData.get('projectName'));
  const allProjects = Project.getAll();

  allProjects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(allProjects));
  appendProject(newProject);
  projectForm.reset();
};

// Handle todo form submission
todoForm.onsubmit = (event) => {
  event.preventDefault();

  const todoData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    date: document.getElementById('date').value,
    priority: document.getElementById('priority').value,
    project: Project.get(getActiveTab().id),
  };
  const newTodo = new Todo(todoData);

  newTodo.save();
  appendTodo(newTodo);

  Modal.getInstance(document.getElementById('taskModal')).hide();
};

// Fetch all projects and display them on DOM
const allProjects = Project.getAll();

if (allProjects.length > 0) {
  allProjects.forEach((project, index) => {
    const active = index === 0 ? true : false;
    appendProject(project, active);
  });
} else {
  const defaultProject = new Project('Default');

  localStorage.setItem('projects', JSON.stringify([defaultProject]));
  appendProject(defaultProject, true);
}

// Fetch all todos and display them on DOM
Todo.getAll().forEach((todo) => {
  if (todo.project.id === getActiveTab().id) appendTodo(todo);
});
