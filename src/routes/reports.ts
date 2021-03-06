import express from 'express';
import socketio from 'socket.io';
import bcrypt from 'bcryptjs';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { ReportInstance, ReportAttributes } from '../models/Report';
import NotFoundError from '../classes/NotFoundError';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import onlyAuth from '../middlewares/protector/auth';

const reportsRoute: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
    io: socketio.Server
): express.Router => {
    const router: express.Router = express.Router();

    // router.use(onlyAuth());

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<ReportInstance> = Parser.parseQuery<ReportInstance>(
                    req.query.q,
                    models,
                );
                const data: PaginatedResult<ReportInstance> = await models.Report.findAndCountAll(parsed);
                const body: OkResponse = { data };

                res.json(body);
            },
        ),
    );

    router.put(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const data: ReportAttributes = req.body;
                const report: ReportInstance | null = await models.Report.findOne({ where: { id } });
                if (!report) throw new NotFoundError('Report tidak ditemukan');
                report.update(data);
                const body: OkResponse = { data: report };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // createUser,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const data: ReportAttributes = req.body;
                const report: ReportInstance = await models.Report.create(data);
                const toSend: ReportInstance | null = await models.Report.findByPk(report.id, {
                    include: [{
                        model: models.User,
                        attributes: ['id', 'nik', 'username', 'phone']
                    }]
                });
                io.emit('panic', report.id);
                const body: OkResponse = { data: report };

                res.json(body);
            },
        ),
    );

    router.get(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const parsed: sequelize.FindOptions<ReportInstance> = Parser.parseQuery<ReportInstance>(
                    req.query.q,
                    models,
                );
                const report: ReportInstance | null = await models.Report.findByPk(id, parsed);
                if (!report) throw new NotFoundError('Report tidak ditemukan');
                const body: OkResponse = { data: report };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const report: ReportInstance | null = await models.Report.findOne({ where: { id } });
                if (!report) throw new NotFoundError('Report tidak ditemukan');
                await report.destroy();
                const body: OkResponse = { data: report };

                res.json(body);
            },
        ),
    );

    return router;
};

export default reportsRoute;
