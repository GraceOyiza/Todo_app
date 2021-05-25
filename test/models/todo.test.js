import Project from '../../src/js/models/project';
import Todo from '../../src/js/models/todo';

describe('todo', () => {
  let todo = new Todo('Test todo');

  describe('constructor', () => {
    it('creates a new name instance', () => {
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates a new description instance', () => {
      let description = new Todo('do well');
      expect(description instanceof Todo).toBe(true);
    });
    it('creates a new todo instance', () => {
      let todo = new Todo('do well');
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates a new priority instance', () => {
      let priority = new Todo('do well');
      expect(priority instanceof Todo).toBe(true);
    });
    it('creates a new date instance', () => {
      let date = new Date();
      expect(date instanceof Date).toBe(true);
    });
  });

  describe('getAll', () => {
    test('all returned objects are instances of todo', () => {
      expect(Todo.getAll().every((todo) => todo instanceof Todo)).toBe(true);
    });
  });
});

describe('delete', () => {
  let todo = 'I love yam';
  let todoDelete = Project.getAll().lenght;
  it('deletes task from localStorage', () => {
    todo.delete;
    let todoCheck = Project.getAll().lenght;
    todoDelete != todoCheck;
  });
});

describe('update', () => {
  let update = 'I love yam';
  let updateSave = update.id;
  it('update task from localStorage', () => {
    update = 'I love yam and egg';
    updateSave == update;
  });
});
