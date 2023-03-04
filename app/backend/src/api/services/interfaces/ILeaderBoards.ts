import { IInfoLeaderboard } from './IInfoLeaderboard';

export interface ILearderBoard {

  classification(): Promise<IInfoLeaderboard[]>
}
