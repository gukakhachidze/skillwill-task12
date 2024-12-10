import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    const completedTask = todoList.splice(index, 1)[0];
    setTodoList([...todoList]);
    setCompletedList([...completedList, completedTask]);
  };

  const deleteTask = (index) => {
    const updatedList = completedList.filter((_, i) => i !== index);
    setCompletedList(updatedList);
  };

  const moveToTodo = (index) => {
    const taskToMove = completedList.splice(index, 1)[0];
    setCompletedList([...completedList]);
    setTodoList([...todoList, taskToMove]);
  };

  return (
    <div style={styles.container}>
      <h1>გასაკეთებელის სია</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="შეიყვანე დავალება"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          დამატება
        </button>
      </div>
      <div style={styles.listContainer}>
        <div style={styles.column}>
          <h2>შესასრულებელი</h2>
          {todoList.map((task, index) => (
            <div key={index} style={styles.task}>
              <span>{task}</span>
              <button onClick={() => completeTask(index)} style={styles.button}>
                შესრულება
              </button>
            </div>
          ))}
        </div>
        <div style={styles.column}>
          <h2>შესრულებული</h2>
          {completedList.map((task, index) => (
            <div key={index} style={styles.task}>
              <span>{task}</span>
              <button onClick={() => moveToTodo(index)} style={styles.button}>
                გაუქმება
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={styles.deleteButton}
              >
                წაშლა
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
  input: { padding: "10px", marginRight: "10px" },
  button: { padding: "10px", margin: "5px", cursor: "pointer" },
  deleteButton: {
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    backgroundColor: "red",
    color: "white",
  },
  listContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  column: { width: "45%", textAlign: "left" },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
};

export default App;
