import Project from "../../models/Project";
import { ProjectActionTypes, ProjectActions } from "../actions/Project";

export interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  isLoaded: boolean;
}

const INITIAL_STATE: ProjectState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
};

export const projectReducer = (
  state: ProjectState = INITIAL_STATE,
  action: ProjectActionTypes
): ProjectState => {
  switch (action.type) {
    case ProjectActions.PROJECT_SET:
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
        isLoaded: true,
      };
    case ProjectActions.PROJECT_LOAD:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
