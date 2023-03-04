import { ILearderBoard } from './interfaces/ILeaderBoards';
import { IMatcher } from './interfaces/IMatchesService';
import { ITeam } from './interfaces/ITeam';
import MatchesService from './MatchesService';
import TeamsService from './TeamsService';

export default class LeaderBoard implements ILearderBoard {
  constructor(service: ITeam)

  totalGames(): void {

  }


  totaTlies(): void {

  }

  totalLosses(): void {

  }

  teamUtilization(): void {

  }

  calculateGoals(): void {

  }
  leaderBoard(): void {
    const matches = new MatchesService();
    const team = new TeamsService();
    const allMatches = matches.getAll();
    const allTeams = team.getAll();
  }
}
