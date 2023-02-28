import { STRING, Model, INTEGER } from 'sequelize';
import db from '.';

export default class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  username: {
    allowNull: false,
    type: STRING,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'users',
});
