export class Project {
  constructor(name) {
    this.name = name;
  }

  static getAll() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }
}

export class Todo {
  constructor(props) {
    this.title = props.title;
    this.date = new Date(props.date);
    this.description = props.description;
    this.priority = props.priority;
    this.project = props.project;
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
