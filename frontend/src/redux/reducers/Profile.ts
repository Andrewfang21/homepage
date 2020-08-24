import Profile from "../../models/Profile";
import { ProfileActions, ProfileActionTypes } from "../actions/Profile";

export interface ProfileState {
  profile: Profile;
  isLoading: boolean;
  isLoaded: boolean;
}

const INITIAL_STATE: ProfileState = {
  profile: { name: "", descriptions: [], email: "", message: "", imageUrl: "" },
  isLoading: false,
  isLoaded: false,
};

export const profileReducer = (
  state: ProfileState = INITIAL_STATE,
  action: ProfileActionTypes
): ProfileState => {
  switch (action.type) {
    case ProfileActions.PROFILE_SET:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        isLoaded: true,
      };
    case ProfileActions.PROFILE_LOAD:
      return { ...state, isLoading: true, isLoaded: false };
    case ProfileActions.PROFILE_GET:
      return { ...state, profile: state.profile };
    default:
      return { ...state };
  }
};
