import { IMatchWins } from '../../utils/interface/IMatchWins';
import { IInfoLeaderboard } from './interfaces/IInfoLeaderboard';
import { ILearderBoard } from './interfaces/ILeaderBoards';
import { IMatcher } from './interfaces/IMatchesService';
import MatchesService from './MatchesService';
import TeamsService from './TeamsService';
import totalPointsAndWins from '../../utils/totalPointsAndWins';
import matchWins from '../../utils/matchWins';
import totalGames from '../../utils/totalGames';

export default class LeaderBoard implements ILearderBoard {
  // private _service: ITeam;
  private _team: TeamsService;
  private _match: MatchesService;
  constructor() {
    this._team = new TeamsService();
    this._match = new MatchesService();
  }

  async leaderBoard(): Promise<IInfoLeaderboard> {
    const allMatches = await this._match.getAll();
    const allTeams = await this._team.getAll();

    const result = allTeams.map((e) => {
      const name = e.teamName;
      const matchWinsL = matchWins(allMatches);
      const winPointsLoss = totalPointsAndWins(e.id as number, matchWinsL as IMatchWins[]);

      const totalPoints = winPointsLoss.points;
      const totalGamesL = totalGames(e.id as number, allMatches as IMatcher[]);
    });
  }
}
