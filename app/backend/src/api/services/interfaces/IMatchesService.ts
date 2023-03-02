export type IMatcher = {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeTeam?: {
    teamName: string
  },
  awayTeam?: {
    teamName: string,
  }
};

export type infoPutMathe = {
  homeTeamGoals: number,
  awayTeamGoals: number,
};

export interface IMatchesService {
  getAll(): Promise<IMatcher[]>
  getByQuery(query: string): Promise<IMatcher[]>
  finishMatches(id: number): Promise<string>
}
