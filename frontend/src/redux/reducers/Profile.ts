import ProfileModel from "../../models/Profile";
import { ProfileAction, ProfileActionTypes } from "../actions/types";

export interface ProfileActionModel {
  profile: ProfileModel;
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: ProfileActionModel = {
  profile: { name: "", message: "", contents: [], imageUrl: "" },
  loading: false,
  loaded: false,
};

export const profileReducer = (
  state: ProfileActionModel = INITIAL_STATE,
  action: ProfileAction
): ProfileActionModel => {
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
    case ProfileActionTypes.GET_PROFILE:
      return { ...state, profile: state.profile };
    default:
      return state;
  }
};
