import Description from "./Description";

interface ExperienceModel {
  educations: EducationModel[];
  works: WorkModel[];
}

export interface EducationModel {
  id: number;
  institution: string;
  institutionUrl: string;
  grade: string;
  place: string;
  imageUrl: string;
  time: string;
  role: string;
  descriptions: Description[];
}

export interface WorkModel {
  id: number;
  company: string;
  companyUrl: string;
  imageUrl: string;
  place: string;
  time: string;
  role: string;
  descriptions: Description[];
}

export default ExperienceModel;
