
const socket = io();

const form = document.getElementById('message-form');
const input = document.getElementById('message-input');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = input.value;

    if (message) {
        socket.emit('message', message);
        input.value = '';
    }
})

socket.on('chat message', (message) => {

    const item = document.createElement('li');
    item.textContent = message;
    message.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
})
