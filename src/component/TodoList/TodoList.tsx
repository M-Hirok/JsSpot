import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [todoText, setTodoText] = useState(""); // 入力されたTodoの文字列
  const [todoList, setNewTodoList]: any = useState([]);
  const [todoId, setTodoId] = useState(0);

  useEffect(() => {
    // localStorageに保存されたTodoを取得
    const todoList = localStorage.getItem("todoList");
    if (todoList) {
      setNewTodoList(JSON.parse(todoList));
    }
  }, []);

  // インプットフォームの状態を管理
  const onChangeTodoText = (event: any) => {
    setTodoText(event.target.value);
  };

  // 追加ボタンを押すとタスクがToDoリストに追加される
  const onClickAdd = () => {
    if (todoText === "") return;
    todoList.push(todoText);
    let json = JSON.stringify(todoList);
    localStorage.setItem("todoList", json);
    // 入力フォーム内を""にする
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const deletedTodoList = [...todoList];
    console.log(deletedTodoList);
    localStorage.removeItem("todoList");
    deletedTodoList.splice(index, 1);
    setNewTodoList(deletedTodoList);
  };

  return (
    <>
      <div className="task-area">
        <h1>ToDoリスト</h1>
        <ul>
          {todoList.map((todo: any, index: number) => (
            <>
              <li key={index}>
                {todo}
                <button onClick={() => onClickDelete(index)}>完了</button>
              </li>
            </>
          ))}
        </ul>
      </div>
      <h2>新規タスクの追加</h2>
      <div className="add-todo">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </>
  );
};
