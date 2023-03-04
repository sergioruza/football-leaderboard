export default (totalPoints: number, totalGames: number) => (
  (totalPoints / (totalGames * 3)) * 100).toFixed(2);
