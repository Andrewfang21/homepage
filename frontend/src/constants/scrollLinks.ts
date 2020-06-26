import * as routes from "./routes";

export interface PageDetails {
  to: string;
  text: string;
}

interface PageLinks {
  Home: PageDetails;
  About: PageDetails;
  Experience: PageDetails;
  Project: PageDetails;
  Skill: PageDetails;
}

export const links: PageLinks = {
  Home: {
    to: routes.HOME_ROUTE,
    text: "Home",
  },
  About: {
    to: routes.ABOUT_ROUTE,
    text: "About",
  },
  Experience: {
    to: routes.EXPERIENCE_ROUTE,
    text: "Experience",
  },
  Project: {
    to: routes.PROJECT_ROUTE,
    text: "Project",
  },
  Skill: {
    to: routes.SKILL_ROUTE,
    text: "Skill",
  },
};
