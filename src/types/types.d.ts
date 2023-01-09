import { Weather, Visibility } from './enum';

export interface IDiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type INewDiaryEntry = Omit<IDiaryEntry, 'id'>;
