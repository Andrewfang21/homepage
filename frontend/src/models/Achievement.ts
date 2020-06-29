import Description from "./Description";

interface AchievementModel {
  id: number;
  title: string;
  organizer: string;
  time: string;
  imageUrl: string;
  descriptions: Description[];
}

export default AchievementModel;
