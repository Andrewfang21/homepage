import { Dispatch } from "redux";
import { ProfileActionTypes } from "../actions/types";
import { ProfileModel } from "../../models/Profile";
import * as api from "../../api";

// Models ------------------------------------------------------------
export interface LoadingProfile {
  type: ProfileActionTypes.LOADING_PROFILE;
}

export interface SetProfile {
  type: ProfileActionTypes.SET_PROFILE;
  payload: ProfileModel;
}

// Actions ------------------------------------------------------------
export const loadingProfile = (): LoadingProfile => ({
  type: ProfileActionTypes.LOADING_PROFILE,
});

export const setProfile = (payload: ProfileModel): SetProfile => ({
  type: ProfileActionTypes.SET_PROFILE,
  payload: payload,
});

export const fetchProfile = () => (dispatch: Dispatch) => {
  dispatch<LoadingProfile>(loadingProfile());
  const profile: ProfileModel = api.getProfile();
  dispatch<SetProfile>(setProfile(profile));
};
