export enum MuscleCategory {
  Chest = 'Chest',
  Neck = 'Neck',
  Shoulders = 'Shoulders',
  Arms = 'Arms',
  Back = 'Back',
  LowerBack = 'Lower Back',
  Core = 'Core',
  Legs = 'Legs',
  Triceps = 'Triceps',
  Biceps = 'Biceps',
  Glutes = 'Glutes',
  Quadriceps = 'Quadriceps',
  Hamstrings = 'Hamstrings',
  Calves = 'Calves',
  Other = 'Other',
}

export interface IExercise {
  coachId: string;
  name: string;
  musal: string;
  difficulty: string;
  equipment: string;
  description: string;
  subCategory: MuscleCategory[];
  image?: string;
  video?: string;
}
