import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard />
        <TaskCard />
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default App
