import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TrackerColumn } from './TrackerColumn';
import { useDragAndDrop } from '../hooks/useDragAndDrop';

const statuses = ['planned', 'in progress', 'done']

export const Tracker = () => {
    const tasks = useSelector((state: RootState) => state.tasksTracker.tasks)
    const { isDragging, handleDragging, handleUpdateList } = useDragAndDrop()

    return (
        <div className='tracker'>
            {statuses.map(status => {
                return <TrackerColumn
                    status={status}
                    tasks={tasks}
                    key={status}
                    isDragging={isDragging}
                    handleDragging={handleDragging}
                    handleUpdateList={handleUpdateList}
                />
            })}
        </div>
    )
}
