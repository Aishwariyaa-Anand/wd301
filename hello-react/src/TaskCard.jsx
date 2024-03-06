const TaskCard = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Completed on: {props.comp}</p>
            <p>Assignee: {props.name}</p>
        </div>
    )
}

export default TaskCard