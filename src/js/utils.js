import { makeTodoCard } from './components';

const parser = Range.prototype.createContextualFragment.bind(
  document.createRange(),
);

export function appendTodo(todo) {
  const rawHTML = makeTodoCard(todo);
  const parsedHTML = parser(rawHTML, 'text/html');

  document.getElementById('projectTodos').appendChild(parsedHTML);
}
