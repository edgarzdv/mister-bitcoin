export default {
    saveToStorage,
    loadFromStorage
}

function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

