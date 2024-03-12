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
            title={"Build the website with static content"}
            dueDate={"10th april"}
            assigneeName={"Rohit S"}
            isPending={true}
          />
          <TaskCard 
            title={"Add a blog"}
            dueDate={"22nd March"}
            assigneeName={"Rohit M"}
            isPending={true}
          />
          <p className="bg-gray-100 text-left">+ New Task</p>
        </div>
        <div className="TaskBox done">
          <h1 className="text-xl font-bold">Done</h1>
          <TaskCard 
            title={"Design the mockup"}
            completedAtDate={"10th April"} 
            assigneeName={"Rohit M"}
            isPending={false}
          />
          <TaskCard 
            title={"Get the approval from principal"}
            completedAtDate={"20th April"}
            assigneeName={"Ajay S"}
            isPending={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App
