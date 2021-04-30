import './scss/style.scss';
import 'bootstrap';
import { Modal } from 'bootstrap';
import Project from './js/models/project';
import Todo from './js/models/todo';
import { appendTodo, appendProject, getActiveTab } from './js/dom';
import { makeTodoForm } from './js/components';

const projectForm = document.getElementById('projectForm');
const todoModal = document.getElementById('todoModal');

// Handle project form submission
projectForm.onsubmit = (event) => {
  event.preventDefault();

  const projectName = document.getElementById('projectName').value;
  const newProject = new Project(projectName);
  const allProjects = Project.getAll();

  allProjects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(allProjects));
  appendProject(newProject);
  projectForm.reset();
};

// Handle todo form submission
todoModal.addEventListener('show.bs.modal', () => {
  // Append form
  todoModal.querySelector('.modal-body').appendChild(makeTodoForm());

  const todoForm = document.getElementById('todoForm');

  // Handle form submission
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

    todoForm.reset();
    Modal.getInstance(document.getElementById('todoModal')).hide();
  };
});

// Remove form from modal body when modal is hidden
todoModal.addEventListener('hide.bs.modal', () => {
  todoModal.querySelector('.modal-body').innerHTML = '';
});

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
