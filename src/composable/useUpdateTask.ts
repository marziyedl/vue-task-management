import { TASK_KEY } from "@/constants";
import { getDataFromLocalStorage, setDataInLocalStorage } from "@/helper";
import type TaskModel from "@/models/task.model";

export function useUpdateTask() {
  const updateTask = (updatedTask: TaskModel) => {
    try {
      const existingTasks =
          JSON.parse(getDataFromLocalStorage(TASK_KEY) || "[]") || [];
      const index = existingTasks.findIndex(
        (task: TaskModel) => task.id === updatedTask.id
      );

      if (index !== -1) {
        existingTasks[index] = updatedTask;
          setDataInLocalStorage(TASK_KEY, existingTasks);

        return true;
      } else {
          console.error("Task not found");
          
        return false;
      }
    } catch (error) {
        console.error("Error updating task:", error);
        
      return false;
    }
  };

  return {
    updateTask,
  };
}
