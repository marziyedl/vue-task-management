import type TaskProps from "@/models/task.model";

export default function useFetchById<typeTaskProps>(storageKey: string = 'tasks') {
    const getById = (id: string): TaskProps | null => {
        try {
            const items = JSON.parse(localStorage.getItem(storageKey) || '[]') as TaskProps[];

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
