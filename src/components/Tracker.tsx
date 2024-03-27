import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TrackerColumn } from './TrackerColumn';
import { useDragAndDrop } from '../hooks/useDragAndDrop';

const statuses = ['planned', 'in progress', 'done']

export const Tracker = () => {
    const tasks = useSelector((state: RootState) => state.tasksTracker.tasks)
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(tasks)

    return (
        <div className='tracker'>
            {statuses.map(status => {
                return <TrackerColumn
                    status={status}
                    tasks={listItems}
                    key={status}
                    isDragging={isDragging}
                    handleDragging={handleDragging}
                    handleUpdateList={handleUpdateList}
                />
            })}
        </div>
    )
}
