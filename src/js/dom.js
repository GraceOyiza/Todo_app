import { makeTodoCard, editTodoForm } from './components';
import Todo from './models/todo';
import { parser } from './utils';

export function appendTodo(todo, index = null) {
  const rawHTML = makeTodoCard(todo, index);
  const parsedHTML = parser(rawHTML, 'text/html');
  const deleteTodo = parsedHTML.querySelector('[data-delete]');
  const editTaskBtn = parsedHTML.querySelector('#editTaskBtn');
  const editTaskModal = document.querySelector('#editTaskModal');
  const editFormModalContainer = editTaskModal.querySelector('.modal-body');

  deleteTodo.onclick = () => {
    const todoId = deleteTodo.getAttribute('data-delete');
    const todoIndex = deleteTodo.getAttribute('data-index');
    const todo = Todo.get(todoId);

    Todo.delete(todoIndex); // delete from localStorage
    document.querySelector(`[data-todo-card=${todo.id}]`).remove(); // Remove from DOM
  };

  editTaskBtn.onclick = () => {
    editFormModalContainer.innerHTML = '';
    const todoId = editTaskBtn.getAttribute('data-update');
    const currentTodo = Todo.get(todoId);
    editFormModalContainer.insertAdjacentHTML(
      'beforeend',
      editTodoForm(currentTodo),
    );

    // editTaskForm.addEventListener('submit', () => {
    //   e.preventDefault();
    //   console.log('SUBMITTING O!!!!!');
    //   const newTitle = editTaskForm.querySelector('#title').value;
    //   const newDescription = editTaskForm.querySelector('#description').value;
    //   const newDate = editTaskForm.querySelector('#date').value;
    //   const newPriority = editTaskForm.querySelector('#priority').value;

    //   const todoId = editTodoForm.getAttribute('data-todoId');
    //   const currentTodo = Todo.get(todoId);
    //   const allTodos = Toda.getAll();
    //   const updatedTodo = {
    //     title: newTitle,
    //     description: newDescription,
    //     date: newDate,
    //     priority: newPriority,
    //   };

    //   const updatedTodoArray = allTodos.map((todo) => {
    //     if (todo.id === todoId) {
    //       todo = updatedTodo;
    //     }
    //     return todo;
    //   });

    //   Todo.update(updatedTodoArray);
    // });
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
    ownTodos.forEach((todo, index) => appendTodo(todo, index));
  };

  projectsTree.appendChild(projectTab);
}

// Return the active project tab element
export function getActiveTab() {
  return document.querySelector('#projectsTree .nav-link.active');
}
