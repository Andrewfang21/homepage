import { combineReducers } from "redux";
import { experienceReducer } from "./Experience";
import { ExperienceModel } from "../../models/Experience";

export interface StoreState {
  experiences: ExperienceModel;
}

export const reducers = combineReducers<StoreState>({
  experiences: experienceReducer,
});
