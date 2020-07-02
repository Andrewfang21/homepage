import Description from "./Description";

interface ProfileModel {
  name: string;
  message: string;
  imageUrl: string;
  email: string;
  descriptions: Description[];
}

export default ProfileModel;
