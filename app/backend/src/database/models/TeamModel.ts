import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';
// import Match from './MatchModel';

class Team extends Model {
  declare readonly id: number;
  declare teamName: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'teams',
});

// Team.hasMany(Match, { foreignKey: 'home_team_id', as: 'homeTeamId' });

export default Team;
