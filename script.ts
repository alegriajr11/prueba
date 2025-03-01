interface User {
    username: string;
    password: string;
}

const users: User[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

function login(username: string, password: string): boolean {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        console.log('Login successful');
        return true;
    } else {
        console.log('Login failed');
        return false;
    }
}

// Example usage
const usernameInput = 'user1';
const passwordInput = 'password1';

login(usernameInput, passwordInput);