import Sequelize from 'sequelize';
import { UserInstance, UserAttributes } from '../User';
import { TokenInstance, TokenAttributes } from '../Token';
import { ReportInstance, ReportAttributes } from '../Report';

interface Obj {
	[s: string]: any;
}

export default interface ModelFactoryInterface extends Obj {
	sequelize: Sequelize.Sequelize;
	Sequelize: Sequelize.SequelizeStatic;
	User: Sequelize.Model<UserInstance, UserAttributes>;
	Token: Sequelize.Model<TokenInstance, TokenAttributes>;
	Report: Sequelize.Model<ReportInstance, ReportAttributes>;
}
