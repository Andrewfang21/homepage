import { Dispatch } from "redux";
import Profile from "../../models/Profile";
import * as api from "../../api";

export enum ProfileActions {
  PROFILE_LOAD = "PROFILE_LOAD",
  PROFILE_SET = "PROFILE_SET",
  PROFILE_GET = "PROFILE_GET",
}

export type ProfileActionTypes = ProfileLoad | ProfileSet | ProfileGet;

interface ProfileLoad {
  type: ProfileActions.PROFILE_LOAD;
}
interface ProfileSet {
  type: ProfileActions.PROFILE_SET;
  payload: Profile;
}
interface ProfileGet {
  type: ProfileActions.PROFILE_GET;
}

export const loadingProfile = (): ProfileLoad => ({
  type: ProfileActions.PROFILE_LOAD,
});

export const setProfile = (payload: Profile): ProfileSet => ({
  type: ProfileActions.PROFILE_SET,
  payload: payload,
});

export const getProfile = (): ProfileGet => ({
  type: ProfileActions.PROFILE_GET,
});

export const fetchProfile = () => async (dispatch: Dispatch) => {
  dispatch<ProfileLoad>(loadingProfile());
  const profile: Profile = await api.getProfile();
  dispatch<ProfileSet>(setProfile(profile));
};
