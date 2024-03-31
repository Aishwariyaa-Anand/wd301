/* eslint-disable @typescript-eslint/no-unused-vars */
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

/*class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
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
}*/


const TaskFormFC = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title:"",
    description:"",
    dueDate:"",
  });
  // const [title, setTitle] = React.useState("");
  // const [description, setDescription] = React.useState("");
  // const [dueDate, setDueDate] = React.useState("");

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };

  return <>
   <form onSubmit={addTask}>
    <div className="grid md:grid-cols-4 md:gap-3">
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="todoTitle"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Todo Title
        </label>
        <br/>
        <input
          id="todoTitle"
          name="todoTitle"
          type="text"
          value={formState.title}
          onChange={titleChanged}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="todoDescription"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Description
        </label>
        <br/>
        <input
          id="todoDescription"
          name="todoDescription"
          type="text"
          value={formState.description}
          onChange={descriptionChanged}
          placeholder=" "
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="todoDueDate"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Due Date
        </label>
        <br/>
        <input
          id="todoDueDate"
          name="todoDueDate"
          type="date"
          value={formState.dueDate}
          onChange={dueDateChanged}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <button
          id="addTaskButton"
          type="submit"
          className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add item
        </button>
      </div>
    </div>
  </form>
  </>
}


export default TaskFormFC;