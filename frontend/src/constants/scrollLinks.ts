import * as routes from "./routes";

export interface PageDetails {
  to: string;
  text: string;
}

interface PageLinks {
  Home: PageDetails;
  Profile: PageDetails;
  Experience: PageDetails;
  Project: PageDetails;
  Achievement: PageDetails;
  Skill: PageDetails;
}

export const links: PageLinks = {
  Home: {
    to: routes.HOME_ROUTE,
    text: "Home",
  },
  Profile: {
    to: routes.PROFILE_ROUTE,
    text: "Profile",
  },
  Experience: {
    to: routes.EXPERIENCE_ROUTE,
    text: "Experiences",
  },
  Project: {
    to: routes.PROJECT_ROUTE,
    text: "Projects",
  },
  Achievement: {
    to: routes.ACHIEVEMENT_ROUTE,
    text: "Achievements",
  },
  Skill: {
    to: routes.SKILL_ROUTE,
    text: "Skills",
  },
};
