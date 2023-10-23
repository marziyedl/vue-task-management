import { TASK_KEY } from "@/constants";
import { getDataFromLocalStorage } from "@/helper";
import type TaskModel from "@/models/task.model";

export function useFetchById() {
  const getById = (id: string): TaskModel | null => {
    try {
      const items = JSON.parse(
        getDataFromLocalStorage(TASK_KEY) || "[]"
      ) as TaskModel[];
      const foundItem = items.find((item) => item.id === id);

      return foundItem || null;
    } catch (error) {
      console.error("Error retrieving item by ID:", error);

      return null;
    }
  };

  return {
    getById,
  };
}
