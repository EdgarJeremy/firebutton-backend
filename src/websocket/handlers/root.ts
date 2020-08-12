import socketio from 'socket.io';
import { isObject } from 'lodash';
import ModelFactoryInterface from '../../models/typings/ModelFactoryInterface';

const rootHandler: (io: socketio.Server, socket: socketio.Socket, models: ModelFactoryInterface) => void = (io: socketio.Server, socket: socketio.Socket, models: ModelFactoryInterface): void => {
    console.log('Connected:', socket.id);
    socket.on('panic', (data) => {
        console.log(data);
        models.Report.create({
            user_id: data.user.id,
            latitude: data.position.coords.latitude,
            longitude: data.position.coords.longitude,
            photo: data.photo
        }).then((report) => {
            models.Report.findByPk(report.id, {
                include: [{
                    model: models.User,
                    attributes: ['id', 'nik', 'username', 'phone']
                }]
            }).then((r) => {
                io.sockets.emit('panic', r);
            });
        });
    });
    socket.on('respond', () => {
        io.sockets.emit('respond');
    });
};

export default rootHandler;
