import type TaskProps from "@/models/task.model";

const mockData: TaskProps[] = [
    { id: '1', title: '121216', content: '', status: 'toDo' },
    { id: '2', title: 'Title', content: '', status: 'done' }
]

export default function useFetchDataFromLocalStorage() {
    const fetchTasks = () => {
        let data = localStorage.getItem('tasks') || ''
        if (!data) {
            localStorage.setItem('tasks', JSON.stringify(mockData))
            return mockData
        }

        return JSON.parse(data) as TaskProps[];
    }
    return {fetchTasks}
}

