const http = require('http');
const express = require('express');

const port = 3000;

const app = express();
app.use(express.static('public'));
app.set('port', port);

const server = http.createServer(app);
server.on('listening', () => {
 console.log(`Initialized on port ${port}`);
});

const io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
	console.log('A warrior connected: ' + socket.id);
	socket.on('mouse', (data) => socket.broadcast.emit('mouse', data));
	socket.on('disconnect', () => console.log('A warrior disconnected'));
});

server.listen(port);
