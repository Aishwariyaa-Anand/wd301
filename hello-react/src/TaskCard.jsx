import './TaskCard.css'

const TaskCard = (props) => {
    return (
        <div className="TaskItem">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p>{props.comp}</p>
            <p>Assignee: {props.name}</p>
        </div>
    )
}

export default TaskCard