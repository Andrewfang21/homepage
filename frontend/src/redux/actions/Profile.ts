import { Dispatch } from "redux";

import ProfileModel from "../../models/Profile";

import { ProfileActionTypes } from "../actions/types";
import * as api from "../../api";

// Models ------------------------------------------------------------
export interface LoadingProfile {
  type: ProfileActionTypes.LOADING_PROFILE;
}

export interface SetProfile {
  type: ProfileActionTypes.SET_PROFILE;
  payload: ProfileModel;
}

export interface GetProfile {
  type: ProfileActionTypes.GET_PROFILE;
}

// Actions ------------------------------------------------------------
export const loadingProfile = (): LoadingProfile => ({
  type: ProfileActionTypes.LOADING_PROFILE,
});

export const setProfile = (payload: ProfileModel): SetProfile => ({
  type: ProfileActionTypes.SET_PROFILE,
  payload: payload,
});

export const getProfile = (): GetProfile => ({
  type: ProfileActionTypes.GET_PROFILE,
});

export const getFetchedProfile = () => (dispatch: Dispatch) => {
  dispatch<GetProfile>(getProfile());
};

export const fetchProfile = () => (dispatch: Dispatch) => {
  dispatch<LoadingProfile>(loadingProfile());
  const profile: ProfileModel = api.getProfile();
  dispatch<SetProfile>(setProfile(profile));
};
