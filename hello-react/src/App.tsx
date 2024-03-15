import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <h1 className="text-xl font-bold text-left">Smarter Tasks</h1>
      <br />
      <p className="text-left"> <b>Project:</b> Graduation Final Year Project</p>
      <br />
      <div className="flex flex-row">
        <div className="flex-1 border border-gray-300 rounded-lg p-2 mb-2 mr-12">
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
        <div className="flex-1 border border-gray-300 rounded-lg p-2 mb-2 ml-12">
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
