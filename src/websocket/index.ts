import socketio from 'socket.io';
import rootHandler from './handlers/root';

const websocket: (io: socketio.Server) => void = (io: socketio.Server): void => {
	io.on('connect', (socket: socketio.Socket) => rootHandler(io, socket));
};

export default websocket;
