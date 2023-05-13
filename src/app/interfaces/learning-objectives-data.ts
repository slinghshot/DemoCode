export interface LearningObjective {
  lesson: string;
  link: string;
  show: boolean;
}

export interface LearningObjectivesData {
  learningObjectives: LearningObjective[];
}
