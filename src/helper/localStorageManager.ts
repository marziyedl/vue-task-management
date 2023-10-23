import { TASK_KEY } from "@/constants";

export function setDataInLocalStorage(key = TASK_KEY, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFromLocalStorage(key = TASK_KEY) {
  return localStorage.getItem(key);
}
