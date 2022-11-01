export function getUserData() {
    const user = sessionStorage.getItem('user');
    if(user) {
        return JSON.parse(user);
    } else {
        return undefined;
    }
}

export function setUserData(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export function clearUserData() {
    sessionStorage.removeItem('user');
}