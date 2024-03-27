export type Status = 'planned' | "in progress" | "done"

export interface Task {
    id: number
    title: string
    status: Status
}

export interface TasksTrackerState {
    tasks: Task[]
}