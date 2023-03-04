import { IMatchWins } from './interface/IMatchWins';

export default (id: number, matchesWin: IMatchWins[]) => {
  const filterAway = matchesWin.filter((e) => e.awayTeamId === id);
  const filterHome = matchesWin.filter((e) => e.homeTeamId === id);

  let loss = 0;
  filterAway.forEach((e) => {
    if (e.win === e.homeTeamId) {
      console.log('entrou');

      loss += 1;
    }
  });

  filterHome.forEach((e) => {
    if (e.win === e.awayTeamId) {
      loss += 1;
    }
  });

  return 3;
};
