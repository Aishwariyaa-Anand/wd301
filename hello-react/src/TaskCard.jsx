import './TaskCard.css'

const TaskCard = (props) => {
    const { title, dueDate, completedAtDate, assigneeName, isPending } = props;


    return (
        <div className="TaskItem">
            <h2 className="text-xl font-bold">{title}</h2>
            {isPending ? <p>Due on: {dueDate}</p> : <p>Completed on: {completedAtDate}</p>}
            <p>Assignee: {assigneeName}</p>
        </div>
    )
}

export default TaskCard