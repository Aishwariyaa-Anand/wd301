import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    description: string;
    dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
        title: "",
        description: "",
        dueDate: ""
    }
  }

  inputRef = React.createRef<HTMLInputElement>();
  
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value })
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value })
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value })
  };

  /*addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with ${this.state.title}`);
  };*/

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { title, description, dueDate } = this.state;
    if (title.trim() === "" || dueDate.trim() === "") {
        alert("Title and Due Date are required fields.");
        return;
    }
    const newTask = {
      title,
      description,
      dueDate
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };
  
  render(){
    return (
        <form onSubmit={this.addTask}>
            <label htmlFor="todoTitle">Title </label>
            <input id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged}/>
            <br />
            <label htmlFor="todoDescription">Description </label>
            <input id="todoDescription" type="text" value={this.state.description} onChange={this.descriptionChanged}/>
            <br />
            <label htmlFor="todoDueDate">Due Date </label>
            <input id="todoDueDate" type="date" value={this.state.dueDate} onChange={this.dueDateChanged}/>
            <br />
            <button id="addTaskButton" type="submit">Add item</button>
        </form>
    )
  }
}

export default TaskForm;