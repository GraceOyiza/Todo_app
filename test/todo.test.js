import Project from '../src/js/models/project';
import Todo from '../src/js/models/todo';

describe('todo', () => {
  const todo = new Todo('Test todo');

  describe('constructor', () => {
    it('creates a new name instance', () => {
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates a new description instance', () => {
      const description = new Todo('do well');
      expect(description instanceof Todo).toBe(true);
    });
    it('creates a new todo instance', () => {
      const todo = new Todo('do well');
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates a new priority instance', () => {
      const priority = new Todo('do well');
      expect(priority instanceof Todo).toBe(true);
    });
    it('creates a new date instance', () => {
      const date = new Date();
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
  const todo = 'I love yam';
  const todoDelete = Project.getAll().lenght;
  it('deletes task from localStorage', () => {
    todo.delete;
    const todoCheck = Project.getAll().lenght;
    todoDelete !== todoCheck;
  });
});

describe('update', () => {
  let update = 'I love yam';
  const updateSave = update.id;
  it('update task from localStorage', () => {
    update = 'I love yam and egg';
    updateSave === update;
  });
});
