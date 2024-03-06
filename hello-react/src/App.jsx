import TaskCard from "./TaskCard";
import "./App.css"

function App() {
  return (
    <div>
      <h1 className="text-xl font-bold text-left">Smarter Tasks</h1>
      <br />
      <p className="text-left"> <b>Project:</b> Graduation Final Year Project</p>
      <br />
      <div className="App">
        <div className="TaskBox pending">
          <h1 className="text-xl font-bold">Pending</h1>
          <TaskCard title="abcd" comp="Due on: 10th april" name="rahul"/>
          <TaskCard title="xyz" comp="Due on: 11th april" name="abhi"/>
        </div>
        <div className="TaskBox done">
          <h1 className="text-xl font-bold">Done</h1>
          <TaskCard title="qwer" comp="Completed on: 23rd march" name="ram"/>
          <TaskCard title="tyui" comp="Completed on: 20th march" name="sita"/>
        </div>
      </div>
    </div>
  );
}

export default App
