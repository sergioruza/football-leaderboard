import { IMatcher } from '../api/services/interfaces/IMatchesService';

export default (id: number, matches: IMatcher[]) => {
  let goalsFavor = 0;
  let goalsConceded = 0;
  matches.forEach((e) => {
    if (e.homeTeamId === id) {
      goalsFavor += e.homeTeamGoals;
      goalsConceded += e.awayTeamGoals;
    }
    if (e.awayTeamId === id) {
      goalsFavor += e.awayTeamGoals;
      goalsConceded += e.homeTeamGoals;
    }
  });

  const totalGoalsBalance = goalsFavor - goalsConceded;
  return { goalsFavor, goalsConceded, totalGoalsBalance };
};
