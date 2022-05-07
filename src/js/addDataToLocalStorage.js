
export default function addDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}