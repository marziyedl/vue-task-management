const mockData = [
    { title: 'Title', content: '', status: 'done' },
    { title: 'Title', content: '', status: 'done' }
]

export default function useFetchDataFromLocalStorage() {
    const data = localStorage.getItem('tasks')
    if (!data) localStorage.setItem('tasks', mockData.toString())
    return JSON.parse(data)
}
    
