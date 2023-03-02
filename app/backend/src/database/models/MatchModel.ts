import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamModel';

export default class Match extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    autoIncrement: true,
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },

  homeTeamId: {
    type: INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  awayTeamId: {
    type: INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },

  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },

  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'matches',
});

Match.belongsTo(Team, { foreignKey: 'away_team_id', as: 'awayTeam' });
Match.belongsTo(Team, { foreignKey: 'home_team_id', as: 'homeTeam' });
Team.hasMany(Match, { foreignKey: 'id', as: 'matchAwayId' });
Team.hasMany(Match, { foreignKey: 'id', as: 'matchHomeId' });
