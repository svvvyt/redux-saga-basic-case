import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  asyncIncrementCreator,
  asyncDecrementCreator,
} from "./redux/reducers/countReducer";
import { fetchUsers } from "./redux/reducers/usersReducer";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.usersReducer.users);

  return (
    <div className="App">
      <div className="buttons">
        <div>{count}</div>
        <button onClick={() => dispatch(asyncIncrementCreator())}>
          Async Increment ++
        </button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>
          Async Decrement --
        </button>
        <button onClick={() => dispatch(fetchUsers())}>
          Get users from API
        </button>
      </div>
      <div className="users">
        {users.map((user) => (
          <div className="user">{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
