import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="abcd" comp="10th april" name="rahul"/>
        <TaskCard title="xyz" comp="11th april" name="abhi"/>
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="qwer" comp="23rd march" name="ram"/>
        <TaskCard title="tyui" comp="20th march" name="sita"/>
      </div>
    </div>
  );
}

export default App
