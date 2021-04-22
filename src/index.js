import './scss/style.scss';
import 'bootstrap';
import { Project } from './js/models';

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
};

// Fetch all projects and display them on DOM
Project.getAll().forEach((project) => {
  const projectTab = document.createElement('button');

  projectTab.classList.add('nav-link', 'btn', 'text-left');
  projectTab.innerText = project.name;
  projectsTree.appendChild(projectTab);
});
