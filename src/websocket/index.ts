import socketio from 'socket.io';
import rootHandler from './handlers/root';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';

const websocket: (io: socketio.Server, models: ModelFactoryInterface) => void = (io: socketio.Server, models: ModelFactoryInterface): void => {
	io.on('connect', (socket: socketio.Socket) => rootHandler(io, socket, models));
};

export default websocket;
