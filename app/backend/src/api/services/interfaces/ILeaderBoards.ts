import { IInfoLeaderboard } from './IInfoLeaderboard';

export interface ILearderBoard {

  classification(): Promise<IInfoLeaderboard[]>

  // classificationSort(classification: IInfoLeaderboard[]): Promise<IInfoLeaderboard[]>
}
