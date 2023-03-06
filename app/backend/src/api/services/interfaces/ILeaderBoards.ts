import { IInfoLeaderboard } from './IInfoLeaderboard';

export interface ILearderBoard {

  classification(filter: string | undefined): Promise<IInfoLeaderboard[]>

  // classificationSort(classification: IInfoLeaderboard[]): Promise<IInfoLeaderboard[]>
}
