import ProjectModel from "../../models/Project";
import { ProjectAction, ProjectActionTypes } from "../actions/types";

export interface ProjectActionModel {
  projects: ProjectModel[];
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: ProjectActionModel = {
  projects: [],
  loading: false,
  loaded: false,
};

export const projectReducer = (
  state: ProjectActionModel = INITIAL_STATE,
  action: ProjectAction
): ProjectActionModel => {
  switch (action.type) {
    case ProjectActionTypes.SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
        loaded: true,
      };
    case ProjectActionTypes.LOADING_PROJECTS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
