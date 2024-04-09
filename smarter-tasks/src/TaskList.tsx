
import Task from "./Task";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const [task, setTask] = useLocalStorage<Props>(
    "tasks", {
      tasks: [],
    }
  );

  const handleDeleteTask = (idx: number) => {
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

export default TaskList;
