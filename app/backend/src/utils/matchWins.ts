import { IMatcher } from '../api/services/interfaces/IMatchesService';

export default (allMatches: IMatcher[]) => {
  const wins = allMatches.map((e) => {
    if (e.awayTeamGoals > e.homeTeamGoals) {
      return { ...e, win: e.awayTeamId };
    }

    if (e.homeTeamGoals > e.awayTeamGoals) {
      return { ...e, win: e.homeTeamId };
    }

    return { ...e, win: 'draw' };
  });

  return wins;
};
