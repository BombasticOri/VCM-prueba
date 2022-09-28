import { Sequelize } from 'sequelize';

const sequelize = new Sequelize (
    'api_v1',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
export default sequelize;