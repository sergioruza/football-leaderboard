import { IMatcher } from '../api/services/interfaces/IMatchesService';
// import { IMatchWins } from './interface/IMatchWins';

export default (id: number, matchesWin: IMatcher[]) => {
  const filterAway = matchesWin.filter((e) => e.awayTeamId === id);
  const filterHome = matchesWin.filter((e) => e.homeTeamId === id);
  let loss = 0;

  filterAway.forEach((e) => {
    if (e.win === e.homeTeamId) {
      loss += 1;
    }
  });

  filterHome.forEach((e) => {
    if (e.win === e.awayTeamId) {
      console.log(e.win);
      loss += 1;
    }
  });

  return loss;
};
