import { IDiaryEntry, INewDiaryEntry } from '../types/types';
import { diaryEntries } from './diariesData';

/* NOTE: Cuando no controlamos la estructura de la data la debemos formar a que utilice el tipo
dato que tiene la interface con la asersion de datos "as + tipo dato" 

Ejemplo:
const diaries: Array<IDiaryEntry> = diaryData as Array<IDiaryEntry>; */

/* Definimos el typo de dato que debe retornar la peticion */
const diaries: IDiaryEntry[] = diaryEntries;

export const getAllDiaries = (): IDiaryEntry[] => diaries;

export const getDiariesByID = (id: number): IDiaryEntry | undefined => {
  const diaryEntry = diaries.find((e) => e.id === id);
  return diaryEntry;
};

export const createDiaryEntry = (diaryEntry: INewDiaryEntry): IDiaryEntry => {
  const newDiaryEntry: IDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...diaryEntry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};
