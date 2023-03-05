import { ModelStatic } from 'sequelize';
import GenericError from '../../errors/genericError';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import {
  IMatcher, IMatchesService, infoCreateMatche,
  infoPutMatche, matcheCreated,
} from './interfaces/IMatchesService';

export default class MatchesService implements IMatchesService {
  private model: ModelStatic<Match> = Match;
  private modelTeam: ModelStatic<Team> = Team;

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

  async getByQuery(query: string): Promise<IMatcher[]> {
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
      where: { inProgress: query === 'true' },
    });

    return result;
  }

  async finishMatches(id: number): Promise<string> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return 'Finished';
  }

  async putGoals({ homeTeamGoals, awayTeamGoals }: infoPutMatche, id: number):
  Promise<{ message: 'updated goals' }> {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return { message: 'updated goals' };
  }

  async createMatches(info: infoCreateMatche): Promise<matcheCreated> {
    const homeTeam = await this.modelTeam.findOne({ where: { id: info.homeTeamId } });
    const awayTeam = await this.modelTeam.findOne({ where: { id: info.awayTeamId } });

    if (!homeTeam || !awayTeam) throw new GenericError('There is no team with such id!', 404);

    if (homeTeam?.dataValues.teamName === awayTeam?.dataValues.teamName) {
      throw new GenericError('It is not possible to create a match with two equal teams', 422);
    }

    const result = await this.model.create({ ...info, inProgress: true });

    return result.dataValues;
  }
}
