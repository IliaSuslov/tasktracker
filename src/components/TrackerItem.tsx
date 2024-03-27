import { useState } from "react"
import { Task } from "../interfaces"
import { useDispatch } from "react-redux"
import { changeTaskTitle } from "../store/taskSlice"

export const TrackerItem = ({ task, handleDragging }: { task: Task, handleDragging: any }) => {
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('status', `${task.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)


    const handleChangeTaskTitle = () => {
        if (title.length) {
            dispatch(changeTaskTitle({ taskId: task.id, title }))
        }
        setEditable(false)
    }
    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="tracker-tasks-item"
        >
            {editable ? <input onChange={e => setTitle(e.target.value)} /> : <p>{task.title}</p>}
            {!editable
                ? <button className="btn btn-blue" onClick={() => setEditable(!editable)}>Edit</button>
                : <button className="btn btn-green" onClick={handleChangeTaskTitle}>Save</button>
            }
        </div>
    )
}
