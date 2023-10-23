import type TaskModel from "@/models/task.model";

export function useFetchById<typeTaskModel>(storageKey: string = 'tasks') {
    const getById = (id: string): TaskModel | null => {
        try {
            const items = JSON.parse(localStorage.getItem(storageKey) || '[]') as TaskModel[];

            const foundItem = items.find((item) => item.id === id);

            return foundItem || null;
        } catch (error) {
            console.error('Error retrieving item by ID:', error);
            return null;
        }
    };

    return {
        getById,
    };
}
