const CMD = require('./app/const/cmd');
const ChatController = require('./app/controller/chat');

SocketServer = function(http) {
    // Define Server Socket
    let io = require('socket.io')(http);

    // On Client Socket Connected to Server Socket
    io.on('connection', function(socket) {

        // On New Message
        /**
         * data = {msg: MESSAGE TEXT, img: IMAGE URL, vid: VIDEO URL}
         */
        socket.on(CMD.ON_NEW_MESSAGE, (data) => {
            ChatController.OnNewMessage(socket, data.msg, data.img, data.vid);
        });

        // On Client Socket disconnected from Server Socket
        socket.on('disconnect', function(){
            chat.closeConnection(socket);
        });
    });
}