import { IMatcher } from '../api/services/interfaces/IMatchesService';

export default (id: number, matchWins: IMatcher[]) => {
  let wins = 0;
  let points = 0;
  matchWins.forEach((e) => {
    if (e.win === id) {
      wins += 1;
      points += 3;
    }
  });
  let draws = 0;
  matchWins.filter((e) => e.awayTeamId === id || e.homeTeamId === id).forEach((e) => {
    if (e.win === 'draws') {
      draws += 1;
      points += 1;
    }
  });
  return { wins, points, draws };
};
