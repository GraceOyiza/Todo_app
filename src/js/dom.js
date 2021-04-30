import { makeTodoCard } from './components';
import Todo from './models/todo';
import { parser } from './utils';

export function appendTodo(todo) {
  const rawHTML = makeTodoCard(todo);
  const parsedHTML = parser(rawHTML, 'text/html');
  const deleteTodo = parsedHTML.querySelector('[data-delete]');

  deleteTodo.onclick = () => {
    const todoId = deleteTodo.getAttribute('data-delete');
    const todo = Todo.get(todoId);

    todo.delete(); // delete from localStorage
    document.querySelector(`[data-todo-card=${todo.id}]`).remove(); // Remove from DOM
  };

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

  // Handle click event
  projectTab.onclick = (event) => {
    const allTodos = Todo.getAll();
    const ownTodos = allTodos.filter(
      (todo) => todo.project.id === event.currentTarget.id,
    );

    document.getElementById('projectTodos').innerHTML = '';
    ownTodos.forEach((todo) => appendTodo(todo));
  };

  projectsTree.appendChild(projectTab);
}

// Return the active project tab element
export function getActiveTab() {
  return document.querySelector('#projectsTree .nav-link.active');
}
