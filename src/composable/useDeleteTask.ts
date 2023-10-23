
import { TASK_KEY } from "@/constants";
import { getDataFromLocalStorage, setDataInLocalStorage } from "@/helper";
import type TaskModel from "@/models/task.model";
import { ref, onMounted } from "vue";

export function useDeleteTask() {
    const items = ref<TaskModel[]>([]);

    onMounted(() => {
        const storedData = getDataFromLocalStorage(TASK_KEY);
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
        setDataInLocalStorage(TASK_KEY, items.value);
    }

    return {
        items,
        deleteItem,
    };
}
