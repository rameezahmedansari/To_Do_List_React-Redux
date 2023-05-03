import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <div className="main-div">
      <h1>ToDo List using Redux 📌</h1>
      <div className="child-div">
        <figure>
          <figcaption>Add your List Here 📜📜 </figcaption>
        </figure>
        <div className="add-items">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Add items..."
          />
          <button
            className="add-btn"
            onClick={() => dispatch(addTodo(inputVal), setInputVal(""))}
          >
            <i className="fa fa-plus "></i>
          </button>
        </div>

        <div className="todos-list">
          {list.map((elem) => (
            <div key={elem.id} className="list-item">
              <h3>{elem.data}</h3>
              <div className="todo-btn">
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                ></i>
              </div>
            </div>
          ))}
        </div>

        <div className="show-items">
          <button className="btn" onClick={() => dispatch(removeTodo())}>
            Check List / Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
