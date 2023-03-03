import { ILearderBoard } from './interfaces/ILeaderBoards';
import { ITeam } from './interfaces/ITeam';
import MatchesService from './MatchesService';
import TeamsService from './TeamsService';

export default class LeaderBoard implements ILearderBoard {
  constructor(service: ITeam)
  totalOfPoints(): void {
    throw new Error('Method not implemented.');
  }

  totalGames(): void {
    throw new Error('Method not implemented.');
  }

  totalWins(): void {
    throw new Error('Method not implemented.');
  }

  totaTlies(): void {
    throw new Error('Method not implemented.');
  }

  totalLosses(): void {
    throw new Error('Method not implemented.');
  }

  teamUtilization(): void {
    throw new Error('Method not implemented.');
  }

  calculateGoals(): void {
    throw new Error('Method not implemented.');
  }

  leaderBoard(): void {
    const matches = new MatchesService();
    const team = new TeamsService();
    const allMatches = matches.getAll();
    const allTeams = team.getAll();
  }
}
