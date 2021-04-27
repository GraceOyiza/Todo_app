function randomID() {
  const digits = String(Math.random()).split('.')[1].substr(0, 10);
  return `ID${digits}`;
}

export class Project {
  constructor(name) {
    this.name = name;
  }

  static getAll() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }
}

export class Todo {
  constructor(date) {
    this.title = date.title;
    this.date = new Date(date.date);
    this.description = date.description;
    this.priority = date.priority;
    this.project = date.project;
  }

  save() {
    const allTodos = Todo.getAll();

    allTodos.push(this);
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }

  static getAll() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
}
