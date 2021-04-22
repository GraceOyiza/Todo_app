export function makeTodoCard(todo) {
  return ` 
    <div class="card w-100">
      <div class="card-body">
        <h5 class="card-title">${todo.title}</h5>
        <p class="card-text">${todo.description} </p>
        <ul class="list-group">
          <li class="list-group-item">Date: ${todo.date}</li>
          <li class="list-group-item">Priority: ${todo.priority}</li>         
        </ul>
      </div>
      <div class="card-footer">
        <button class="btn"><i class="bi bi-trash"></i></button>
        <button class="btn"><i class="bi bi-pencil-fill"></i></button>
      </div>
    </div>`;
}
