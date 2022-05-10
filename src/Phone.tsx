import "./Phone.css";
import TodoList from "./ToDoList";
function Phone() {
  return (
    <div className="phoneFrame">
      <div className="screen">
        <div className="notch" />
        <TodoList />
      </div>
    </div>
  );
}

export default Phone;
