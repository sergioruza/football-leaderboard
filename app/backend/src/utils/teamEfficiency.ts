export default (totalPoints: number, totalGames: number): number => {
  const value = (totalPoints / (totalGames * 3)) * 100;

  return Number(value.toFixed(2));
};
