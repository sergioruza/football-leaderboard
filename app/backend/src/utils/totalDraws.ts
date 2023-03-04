import { IMatchWins } from './interface/IMatchWins';

export default (matchWins: IMatchWins[]) => {
  let draws = 0;
  matchWins.forEach((e) => {
    if (e.win === 'draws') {
      draws += 1;
    }
  });
  return draws;
};
