import { makeTodoCard } from './components';

const parser = Range.prototype.createContextualFragment.bind(
  document.createRange(),
);

export function appendTodo(todo) {
  const rawHTML = makeTodoCard(todo);
  const parsedHTML = parser(rawHTML, 'text/html');

  document.getElementById('projectTodos').appendChild(parsedHTML);
}

export function appendProject(project, active = false) {
  const projectTab = document.createElement('a');
  const projectsTree = document.getElementById('projectsTree');

  projectTab.href = '#';
  projectTab.id = project.id;
  projectTab.setAttribute('data-bs-toggle', 'pill');
  projectTab.classList.add('nav-link');
  if (active === true) projectTab.classList.add('active');
  projectTab.innerText = project.name;