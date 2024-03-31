import React, { useState } from "react";
import Task from "./TaskFC";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  //onDeleteTask: (index: number) => void;
}

//interface State {}
/*class TaskList extends React.Component<Props, State> {
  
  render() {
    return (
        <div>
          {this.props.tasks.map((task, idx) => (
            <Task
              key={idx}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
            />
          ))}
        </div>
      );
  }
}*/

const TaskListFC = (props: Props) => {
  const [task, setTask] = useState<TaskItem[]>(props.tasks);

  const handleDeleteTask = (idx: number) => {
    // Remove the task at the specified index from the tasks array
    console.log(task);
    props.tasks.splice(idx, 1);
    setTask({tasks: props.tasks});
    console.log(task);
  };

  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li key={idx}>
        <Task
          idx={idx}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          deletetask={() => handleDeleteTask(idx)}
        />
        </li>
      ))}
    </ul>
  ) 
};

export default TaskListFC;

/*import React from "react";
import Task from "./Task";

interface Props {
}

interface TaskItem {
  title: string
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {
          tasks: []
        }
    }
    componentDidMount() {
        const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
        this.setState((state, props) => ({
        tasks,
        }));
    }
    render() {
        return this.state.tasks.map((task, idx) => <Task key={idx} title={task.title} />);
    }
}

export default TaskList;*/