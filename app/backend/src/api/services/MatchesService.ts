import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import { IMatcher, IMatchesService } from './interfaces/IMatchesService';

const a = [
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  {
    id: 42,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Ferroviária',
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann',
    },
  },
];

export default class MatchesService implements IMatchesService {
  private model: ModelStatic<Match> = Match;

  async getAll(): Promise<IMatcher[]> {
    const result = await this.model.findAll({
      include: [
        {
          model: Team,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: Team,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
      ],
      attributes: { exclude: ['away_team_id', 'home_team_id'] },

    });

    return result;
  }
}
