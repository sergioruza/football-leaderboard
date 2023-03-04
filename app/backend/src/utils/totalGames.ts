import { IMatcher } from '../api/services/interfaces/IMatchesService';

export default (id: number, matches: IMatcher[]) => {
  let games = 0;
  matches.forEach((e) => {
    if (e.awayTeamId === id || e.homeTeamId === id) {
      games += 1;
    }
  });

  return games;
};
