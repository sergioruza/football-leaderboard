import { IMatcher } from '../api/services/interfaces/IMatchesService';
// import { IMatchWins } from './interface/IMatchWins';

export default (matchWins: IMatcher[]) => {
  let draws = 0;
  matchWins.forEach((e) => {
    if (e.win === 'draws') {
      draws += 1;
    }
  });
  return draws;
};
