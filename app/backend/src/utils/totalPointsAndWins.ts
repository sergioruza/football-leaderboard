import { IMatchWins } from './interface/IMatchWins';

export default (id: number, matchWins: IMatchWins[]) => {
  let wins = 0;
  let points = 0;
  let losses = 0;

  matchWins.forEach((e) => {
    if (e.win === id) {
      wins += 1;
      points += 3;
    }

    if (e.win === 'draw') {
      points += 1;
    }

    if (e.win !== id && e.win !== 'draw') {
      losses += 1;
    }
  });

  return { wins, points, losses };
};
