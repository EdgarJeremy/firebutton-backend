import express from 'express';
import bcrypt from 'bcrypt';
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
                console.log(parsed);
                const data: PaginatedResult<ReportInstance> = await models.Report.findAndCountAll(parsed);
                const body: OkResponse = { data };

                res.json(body);
            },
        ),
    );

    router.get(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const report: ReportInstance | null = await models.Report.findOne({ where: { id } });
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
