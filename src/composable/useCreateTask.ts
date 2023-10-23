import { TASK_KEY } from "@/constants";
import { generateUniqueRandomId, getDataFromLocalStorage, setDataInLocalStorage } from "@/helper";
import type TaskModel from "@/models/task.model";

export  function useCreateTask() {
    const localStorageItems = getDataFromLocalStorage(TASK_KEY) || '';

    const createTask = (item: TaskModel) => {
        try {
            const existingTasks = JSON.parse(localStorageItems) || [];
            const uniqueId = generateUniqueRandomId();
            existingTasks.push({ ...item, id: uniqueId });
            setDataInLocalStorage(TASK_KEY,existingTasks);

            return true;
        } catch (error) {
            return;
        }
    };

    return {
        createTask,
    };
}
