import { Task } from "../interfaces"

export const TrackerItem = ({ task, handleDragging }: { task: Task, handleDragging: any }) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('status', `${task.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="tracker-tasks-item"
        >
            <p>{task.title}</p>
        </div>
    )
}
