import { TASK_KEY } from "@/constants";
import { getDataFromLocalStorage, setDataInLocalStorage } from "@/helper";
import type TaskModel from "@/models/task.model";

const mockData: TaskModel[] = [
    { id: '1', title: '121216', content: '', status: 'toDo' },
    { id: '2', title: 'Title', content: '', status: 'done' }
]

export function useFetchAll() {
    const fetchTasks = () => {
        let data = getDataFromLocalStorage(TASK_KEY) || ''
        if (!data) {
            setDataInLocalStorage(TASK_KEY, mockData)
            return mockData
        }

        return JSON.parse(data) as TaskModel[];
    }
    return { fetchTasks }
}

