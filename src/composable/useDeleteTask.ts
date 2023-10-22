// useLocalStorage.js

import type TaskProps from "@/models/task.model";
import { ref, onMounted } from "vue";

export function useDeleteTask(key: string = 'tasks') {
    const items = ref<TaskProps[]>([]);

    onMounted(() => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            items.value = JSON.parse(storedData);
        }
    });

    function deleteItem(itemId: string = "") {
        if (!itemId) return
        items.value = items.value.filter(item => item.id !== itemId);
        saveToLocalStorage();
    }


    function saveToLocalStorage() {
        localStorage.setItem(key, JSON.stringify(items.value));
    }

    return {
        items,
        deleteItem,
    };
}
