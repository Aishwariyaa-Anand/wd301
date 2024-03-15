import React from 'react'
import './TaskCard.css'

interface TaskCardProps {
    title: string;
    dueDate?: string;
    completedAtDate?: string;
    assigneeName: string;
    isPending: boolean;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {

    return (
        <div className="TaskItem">
            <h2 className="text-xl font-bold">{props.title}</h2>
            {props.isPending ? <p>Due on: {props.dueDate}</p> : <p>Completed on: {props.completedAtDate}</p>}
            <p>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard