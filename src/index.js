import 'bootstrap';
import './scss/style.scss';
// import renderDom from './data/dom';

document.querySelector('#content').appendChild(renderDom());

export default (() => {
    const projectForm = document.getElementById('projectForm');
    const projectsTree = document.getElementById('projectsTree');
    
    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();
    
      const formData = new FormData(event.currentTarget);
      const newProject = new Project(formData.get('projectName'));
      const allProjects = Project.getAll();
    
      allProjects.push(newProject);
      localStorage.setItem('projects', JSON.stringify(allProjects));
    });
    
    Project.getAll().forEach((project) => {
      const projectTab = document.createElement('button');
    
      projectTab.classList.add('nav-link', 'btn', 'text-left');
      projectTab.innerText = project.name;
    
      projectsTree.appendChild(projectTab);
    });
  })();

  
