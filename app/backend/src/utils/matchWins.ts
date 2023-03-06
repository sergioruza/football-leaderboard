import { IMatcher } from '../api/services/interfaces/IMatchesService';

export default (allMatches: IMatcher[], filter: string | undefined, id: number) => {
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
  if (filter === 'home') {
    return wins.filter((e) => e.homeTeamId === id);
  }
  if (filter === 'away') {
    return wins.filter((e) => e.awayTeamId === id);
  }
  return wins;
};

// fix: auxilio de Richard para refatorar código com bug
