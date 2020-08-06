import socketio from 'socket.io';
import { isObject } from 'lodash';

const rootHandler: (io: socketio.Server, socket: socketio.Socket) => void = (io: socketio.Server, socket: socketio.Socket): void => {
    console.log('Connected:', socket.id);
    socket.on('panic', (data) => {
        io.emit('panic', data);
    });
    socket.on('respond', () => {
        console.log('respond');
        io.sockets.emit('respond');
    });
};

export default rootHandler;
