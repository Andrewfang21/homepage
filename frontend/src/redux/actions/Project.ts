import { Dispatch } from "redux";

import { ProjectActionTypes } from "../actions/types";
import ProjectModel from "../../models/Project";
import * as api from "../../api";

// Models ------------------------------------------------------------
export interface LoadingProjects {
  type: ProjectActionTypes.LOADING_PROJECTS;
}

export interface SetProjects {
  type: ProjectActionTypes.SET_PROJECTS;
  payload: ProjectModel[];
}

// Actions ------------------------------------------------------------
export const loadingProjects = (): LoadingProjects => ({
  type: ProjectActionTypes.LOADING_PROJECTS,
});

export const setProjects = (payload: ProjectModel[]): SetProjects => ({
  type: ProjectActionTypes.SET_PROJECTS,
  payload: payload,
});

export const fetchProjects = () => async (dispatch: Dispatch) => {
  dispatch<LoadingProjects>(loadingProjects());
  const projects: ProjectModel[] = await api.getProjects();
  dispatch<SetProjects>(setProjects(projects));
};
