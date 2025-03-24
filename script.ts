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
const usernameInput2 = 'user1';
const passwordInput2 = 'password1';

login(usernameInput2, passwordInput2);


//Esto es un ejemplo de como se puede hacer un login con HTML y TypeScript
document.getElementById('registro')?.addEventListener('click', () => {
    const usernameInput = (document.getElementById('username') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    if (usernameInput && passwordInput) {
        users.push({ username: usernameInput, password: passwordInput });
        console.log('User registered successfully');
    } else {
        console.log('Please enter a username and password');
    }

    //Agregando nueva funcionalidad de auth-module


    //Agregando nueva funcionalidad de User-module
});