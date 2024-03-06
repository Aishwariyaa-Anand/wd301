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
          <TaskCard 
            title="abcd" 
            dueDate="10th april" 
            assigneeName="rahul" 
            isPending={true}
          />
          <TaskCard 
            title="xyz" 
            dueDate="11th april" 
            assigneeName="abhi" 
            isPending={true}
          />
        </div>
        <div className="TaskBox done">
          <h1 className="text-xl font-bold">Done</h1>
          <TaskCard 
            title="qwer" 
            completedAtDate="23rd march" 
            assigneeName="ram" 
            isPending={false}
          />
          <TaskCard 
            title="tyui" 
            completedAtDate="20th march" 
            assigneeName="sita" 
            isPending={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App
