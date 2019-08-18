const socket = require('socket.io')

module.exports = server => {
    var io = socket(server);
    io.on('connection', (socket) => {
        console.log('made socket connection', socket.id);
        console.log('Made Socket Connection');
        socket.on('chat', function(data) {
            io.sockets.emit('chat', data)
            console.log(data);

        })
    })
}