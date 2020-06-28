import { LoadingExperience, SetExperience } from "./Experience";

export enum ExperienceActionTypes {
  SET_EXPERIENCE,
  LOADING_EXPERIENCE,
}

export type ExperienceAction = LoadingExperience | SetExperience;
