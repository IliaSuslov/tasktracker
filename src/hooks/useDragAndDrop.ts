import { useState } from "react"
import { Status } from "../interfaces"
import { useDispatch } from "react-redux"
import { changeTaskStatus } from "../store/taskSlice"

export const useDragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false)
    const dispatch = useDispatch()

    const handleUpdateList = (id: number, status: Status) => {
        dispatch(changeTaskStatus({ taskId: Number(id), status }))
    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        handleUpdateList,
        handleDragging,
    }
}