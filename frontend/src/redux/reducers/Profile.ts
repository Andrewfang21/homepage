import { ProfileModel } from "../../models/Profile";
import { ProfileAction, ProfileActionTypes } from "../actions/types";

export interface ProfileActionModel {
  profile: ProfileModel;
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: ProfileActionModel = {
  profile: { name: "", contents: [], imageUrl: "" },
  loading: false,
  loaded: false,
};

export const profileReducer = (
  state: ProfileActionModel = INITIAL_STATE,
  action: ProfileAction
) => {
  switch (action.type) {
    case ProfileActionTypes.SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        loaded: true,
      };
    case ProfileActionTypes.LOADING_PROFILE:
      return { ...state, loading: true };
    default:
      return state;
  }
};