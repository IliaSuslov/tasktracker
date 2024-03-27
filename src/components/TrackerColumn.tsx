import { useState } from 'react';
import { TrackerItem } from './TrackerItem'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

export const TrackerColumn = ({ tasks, status, isDragging, handleDragging, handleUpdateList }) => {
    const [add, setAdd] = useState(false)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleUpdateList(Number(e.dataTransfer.getData('status')), status)
        handleDragging(false)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    function handleAddTask() {
        if (title.length) {
            dispatch(addTask({ title, status }))
        }
        setAdd(false)
    }
    return (
        <div
            className={`tracker-col ${isDragging ? 'tracker-col-dragging' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div className='tracker-header'>
                <div className='tracker-header-title'>
                    <h2>{status}</h2>
                    {!add ? <button className='btn btn-green' onClick={() => setAdd(!add)}>Add</button>
                        : <div className='tracker-header-input'>
                            <input onChange={e => setTitle(e.target.value)} />
                            <button className='tracker-header-button' onClick={handleAddTask}>Add</button>
                        </div>
                    }
                </div>
            </div>

            <div className='tracker-tasks'>
                {tasks.map(item => (status === item.status &&
                    <TrackerItem
                        key={item.id}
                        task={item}
                        handleDragging={handleDragging}
                    />
                ))}
            </div>
        </div>
    )
}
