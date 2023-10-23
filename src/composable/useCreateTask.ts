import { generateUniqueRandomId } from "@/constants/idGenerator";
import type TaskModel from "@/models/task.model";

export default function useCreateTask() {
    const localStorageItems = localStorage.getItem('tasks') || '';

    const createTask = (item: TaskModel) => {
        try {
            const existingTasks = JSON.parse(localStorageItems) || [];
            const uniqueId = generateUniqueRandomId();
            existingTasks.push({ ...item, id: uniqueId });
            localStorage.setItem('tasks', JSON.stringify(existingTasks));

            return true;
        } catch (error) {
            return;
        }
    };

    return {
        createTask,
    };
}
