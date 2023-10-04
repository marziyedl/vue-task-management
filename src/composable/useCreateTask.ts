import type TaskProps from "@/models/task.model";

export default function useCreateTask() {
    const localStorageItems = localStorage.getItem('tasks') || '';
    
    const createTask = (item: TaskProps) => {
        try {
            const existingTasks = JSON.parse(localStorageItems) || [];
            existingTasks.push(item);
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
