import * as React from "react";
import { useAppSelector, useAppDispatch, setNewTodo, addTodo } from "../store";

function TodoAdd() {
  const newTodo = useAppSelector((state: any) => state.newTodo);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        placeholder="New todo"
        value={newTodo}
        onChange={(evt) => dispatch(setNewTodo(evt.target.value))}
      />
      <button onClick={() => dispatch(addTodo())}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
