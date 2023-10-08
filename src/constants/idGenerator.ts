function generateRandomId() {
    const id = Math.random().toString(36).substr(2, 8);
    return id;
}

function isIdDuplicate(id: string) {
    const storedIds = JSON.parse(localStorage.getItem('tasks') || '[]');
    return storedIds.includes(id);
}

export function generateUniqueRandomId() {
    let id = '';
    do {
        id = generateRandomId();
    } while (isIdDuplicate(id));
    return id;
}




