import { IMatchWins } from './interface/IMatchWins';

export default (id: number, matchWins: IMatchWins[]) => {
  let wins = 0;
  let points = 0;

  matchWins.forEach((e) => {
    if (e.wins === id) {
      wins += 1;
      points += 3;
    }

    if (e.wins === 'draw') {
      points += 1;
    }
  });

  return { wins, points };
};
