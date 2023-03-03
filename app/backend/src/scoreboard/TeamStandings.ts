import Match from '../database/models/MatchModel';

export interface ITeamStanding {
  totalOfPoints(matches: Match): void
  utilization(): void
  goalBalance(): void

}
