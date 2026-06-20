import express from 'express';
import http from 'http';

import path from 'path';

import {Server} from 'socket.io';

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const users = new Set();

io.on('connection', (socket) => {

    console.log(`A user is connected!`);

    socket.on('join', (userName) => {
        console.log(userName);
        users.add(userName);
        socket.userName = userName;
        io.emit('userJoin', userName);

        io.emit("userList", Array.from(users));
    })

    socket.on('message', (message) => {
        io.emit('message', message);
    })

    socket.on('disconnect', () => {
        console.log(`A user is disconnected!`, socket.userName);

        users.forEach(user => {
            if (user === socket.userName) {
                users.delete(user);

                io.emit('userLeft', user);
            }
        });

        io.emit("userList", Array.from(users));
    });

})


const port = process.env.PORT || 3000;

function startServer() {
    server.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

startServer();

