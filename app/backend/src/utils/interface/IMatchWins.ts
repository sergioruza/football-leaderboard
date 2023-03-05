import { IMatcher } from '../../api/services/interfaces/IMatchesService';

export interface IMatchWins extends IMatcher {
  win: number | string | undefined
}
