// useUpdateTask.ts
import type TaskModel from '@/models/task.model';

export default function useUpdateTask() {
    const updateTask = (updatedTask: TaskModel) => {
        try {
            const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]') || [];
            const index = existingTasks.findIndex((task: TaskModel) => task.id === updatedTask.id);

            if (index !== -1) {
                existingTasks[index] = updatedTask;
                localStorage.setItem('tasks', JSON.stringify(existingTasks));

                return true;
            } else {
                console.error('Task not found');
                return false;
            }
        } catch (error) {
            console.error('Error updating task:', error);
            return false;
        }
    };

    return {
        updateTask,
    };
}
