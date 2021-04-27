import './scss/style.scss';
import 'bootstrap';
import { Modal } from 'bootstrap';
import { Project, Todo } from './js/models';
import { appendTodo, appendProject } from './js/utils';

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
    // project: document.getElementById('project').value
  };
  const newTodo = new Todo(todoData);

  newTodo.save();
  // appendTodo(newTodo);

  Modal.getInstance(document.getElementById('taskModal')).hide();
};

// Fetch all projects and display them on DOM
Project.getAll().forEach((project) => {
  const projectTab = document.createElement('button');

  projectTab.classList.add('nav-link', 'btn', 'text-left');
  projectTab.innerText = project.name;
  projectsTree.appendChild(projectTab);
});

// Fetch all todos and display them on DOM
Todo.getAll().forEach((todo) => {
  appendTodo(todo);
});
