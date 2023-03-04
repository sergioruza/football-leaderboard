import { IMatchWins } from './interface/IMatchWins';

export default (matchWins: IMatchWins[]) => {
  let draws = 0;
  matchWins.forEach((e) => {
    if (e.wins === 'draws') {
      draws += 1;
    }
  });
  return draws;
};
