export function setDataInLocalStorage(key = 'tasks', data: any) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function getDataFromLocalStorage(key = 'tasks') {
   return localStorage.getItem(key)
}