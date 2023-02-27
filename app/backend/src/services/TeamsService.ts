import { ModelStatic } from 'sequelize';
import { Team } from 'src/database/models';

import { IServiceTeams } from './interfaces/IServiceTeams';
import { ITeam } from './interfaces/ITeam';

export default class TeamsService implements IServiceTeams {
  protected model: ModelStatic<Team> = Team;
  getAll(): Promise<ITeam[]> {
    return this.model.findAll();
  }
}
