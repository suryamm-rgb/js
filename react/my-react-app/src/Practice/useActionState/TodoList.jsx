import { useActionState } from 'react';

function addTodo(prevTodos, formData) {
  const newTodo = formData.get('todo');
  return [...prevTodos, newTodo];
}

export default function TodoList() {
  const [todos, formAction, isPending] = useActionState(addTodo, [],'');

  return (
    <form action={formAction}>
      <input type="text" name="todo" placeholder="Add a todo" required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </form>
  );
}
