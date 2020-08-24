import { Dispatch } from "redux";
import Project from "../../models/Project";
import * as api from "../../api";

export enum ProjectActions {
  PROJECT_LOAD = "PROJECT_LOAD",
  PROJECT_SET = "PROJECT_SET",
}

export type ProjectActionTypes = ProjectLoad | ProjectSet;

interface ProjectLoad {
  type: ProjectActions.PROJECT_LOAD;
}
interface ProjectSet {
  type: ProjectActions.PROJECT_SET;
  payload: Project[];
}

export const fetchProjects = () => async (dispatch: Dispatch) => {
  dispatch<ProjectLoad>({ type: ProjectActions.PROJECT_LOAD });
  const projects: Project[] = await api.getProjects();
  dispatch<ProjectSet>({ type: ProjectActions.PROJECT_SET, payload: projects });
};
