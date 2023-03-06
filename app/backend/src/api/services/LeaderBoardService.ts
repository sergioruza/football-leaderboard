import { IInfoLeaderboard } from './interfaces/IInfoLeaderboard';
import { ILearderBoard } from './interfaces/ILeaderBoards';
import MatchesService from './MatchesService';
import TeamsService from './TeamsService';
import totalPointsAndWins from '../../utils/totalPointsAndWins';
import matchWins from '../../utils/matchWins';
import totalGamesUtil from '../../utils/totalGames';
// import totalDrawsUtil from '../../utils/totalDraws';
import goalsScoredUtils from '../../utils/goalsScored';
import teamEfficiency from '../../utils/teamEfficiency';
import losses from '../../utils/losses';

export default class LeaderBoardService implements ILearderBoard {
  // private _service: ITeam;
  private _team: TeamsService;
  private _match: MatchesService;
  constructor() {
    this._team = new TeamsService();
    this._match = new MatchesService();
  }

  async classification(filter: string | undefined): Promise<IInfoLeaderboard[]> {
    const allMatches = (await this._match.getAll()).filter((e) => !e.inProgress);
    const allTeams = await this._team.getAll();
    return allTeams.map((e) => {
      const matchWinsL = matchWins(allMatches, filter, e.id as number);
      const winPointsLoss = totalPointsAndWins(e.id as number, matchWinsL);
      const goalsScored = goalsScoredUtils(e.id as number, allMatches);
      const totalGames = totalGamesUtil(e.id as number, allMatches);
      return { name: e.teamName,
        totalGames,
        totalPoints: winPointsLoss.points,
        totalVictories: winPointsLoss.wins,
        totalDraws: winPointsLoss.draws,
        totalLosses: losses(e.id as number, matchWinsL),
        goalsFavor: goalsScored.goalsFavor,
        goalsOwn: goalsScored.goalsConceded,
        goalsBalance: goalsScored.totalGoalsBalance,
        efficiency: teamEfficiency(winPointsLoss.points, totalGames) };
    });
  }
}

// Auxílio de Arthur Debiasi
