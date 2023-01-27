import * as React from "react";
import {
  useAppSelector,
  useAppDispatch,
  update,
  remove,
  toggle,
} from "../store";

function TodoListItems() {
  const todos = useAppSelector((state: any) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      {todos.map((todo: any) => (
        <div>
          <input
            type="checkbox"
            checked={todo.done}
            onClick={() => dispatch(toggle(todo.id))}
          />
          <input
            value={todo.text}
            onChange={(evt) =>
              dispatch(update({ id: todo.id, text: evt.target.value }))
            }
          />
          <button onClick={() => dispatch(remove(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <TodoListItems />
    </>
  );
}

export default TodoList;
