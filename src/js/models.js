export class Project {
  constructor(name) {
    this.name = name;
  }

  static getAll() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }
}
