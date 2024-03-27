import { useEffect, useState } from "react"
import { Status, Task } from "../interfaces"

export const useDragAndDrop = (initialState: Task[]) => {
    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState<Task[]>([])

    useEffect(() => {
        setListItems(initialState)
    }, [initialState])

    const handleUpdateList = (id: number, status: Status) => {
        let card = listItems.find(item => Number(item.id) === Number(id))
        if (card && card.status !== status) {
            const newCard = { ...card }
            newCard.status = status
            setListItems(prev => ([
                newCard,
                ...prev.filter(item => Number(item.id) !== Number(id))
            ]))
        }
    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}