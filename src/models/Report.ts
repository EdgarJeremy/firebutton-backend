import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import { UserInstance } from './User';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface ReportAttributes {
    id?: number;
    latitude: number;
    longitude: number;
    photo: string;
    verified: boolean;
    user_id?: number;
}

export interface ReportInstance extends Sequelize.Instance<ReportAttributes>, ReportAttributes {
    user: UserInstance;
}

export const ReportFactory: Factory<ReportInstance, ReportAttributes> = (
    sequelize: Sequelize.Sequelize,
    DataTypes: Sequelize.DataTypes,
): Sequelize.Model<ReportInstance, ReportAttributes> => {
    const attributes: SequelizeAttributes<ReportAttributes> = {
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    };
    const Report: Sequelize.Model<ReportInstance, ReportAttributes> = sequelize.define<
        ReportInstance,
        ReportAttributes
    >('report', attributes, { underscored: true });

    Report.associate = (models: ModelFactoryInterface): void => {
        Report.belongsTo(models.User, { onDelete: 'cascade' });
    };

    return Report;
};
