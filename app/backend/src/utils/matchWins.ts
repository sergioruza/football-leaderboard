import { IMatcher } from '../api/services/interfaces/IMatchesService';

export default (allMatches: IMatcher[]) => {
  const wins = allMatches.map((e) => {
    if (e.awayTeamGoals > e.homeTeamGoals) {
      e.win = e.awayTeamId;
      return e;
    } if (e.homeTeamGoals > e.awayTeamGoals) {
      e.win = e.homeTeamId;
      return e;
    }
    e.win = 'draws';
    return e;
  });
  // console.log(wins[10]);
  return wins;
};

// fix: auxilio de Richard para refatorar código com bug
