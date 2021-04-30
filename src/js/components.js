import { format } from 'date-fns';
import { parser } from './utils';

export function makeTodoCard(todo) {
  return ` 
    <div class="card w-100 mb-3" data-todo-card="${todo.id}">
      <div class="card-body">
        <h5 class="card-title">${todo.title}</h5>
        <p class="card-text">${todo.description} </p>
        <ul class="list-group">
          <li class="list-group-item py-1">Date: ${format(
            todo.date,
            'dd-mm-yyyy',
          )}</li>
          <li class="list-group-item py-1">Priority: ${
            todo.priority
          }</li>         
        </ul>
      </div>
      <div class="card-footer">
        <button class="btn py-0" data-delete="${
          todo.id
        }"><i class="bi bi-trash"></i></button>
        <button class="btn py-0" data-update="${
          todo.id
        }"><i class="bi bi-pencil-fill"></i></button>
      </div>
    </div>`;
}

export function makeTodoForm(todo = {}) {
  const todoForm = parser(`
    <form id="todoForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" value="${
          todo.title || ''
        }" class="form-control" id="title" name="title" placeholder="What is the title of your task?" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="3" placeholder="What is your task about?" required></textarea>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Description</label>
        <input class="form-control" type="date" id="date" name="date" required>
      </div>
      <div class="mb-3">
        <label for="priority" class="form-label">Priotity</label>
        <select class="form-select" id="priority" name="priority">
            <option value="low">Low</option>
            <option value="mid" selected>Mid</option>
            <option value="high">High</option>
        </select>
      </div>
    </form>
  `);

  return todoForm;
}
