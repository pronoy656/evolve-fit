export enum MuscleCategory {
  Biceps = 'Biceps',
  Glutes = 'Glutes',
  LowerBack = 'Lower Back',
  Quadriceps = 'Quadriceps',
  Hamstrings = 'Hamstrings',
  Calves = 'Calves',
  Legs = 'Legs',
  Triceps = 'Triceps',
}

export interface IExercise {
  name: string;
  musal: string;
  difficulty: string;
  equipment: string;
  description: string;
  subCategory: MuscleCategory[];
  image: string;
  vedio: string;
}
