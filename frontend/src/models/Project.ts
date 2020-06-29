interface ProjectModel {
  id: number;
  title: string;
  link: string;
  images: string[];
  descriptions: string[];
  techStacks: string[];
}

export const projectData: ProjectModel[] = [
  {
    id: 1,
    title: "StudentApp",
    link: "https://github.com/Andrewfang21/student-app",
    images: [
      "https://i.imgur.com/IiCAPG6.png",
      "https://i.imgur.com/ixjaqpO.png",
    ],
    descriptions: [
      "An Android application designed for students to manage their daily schedules and track their expenses.",
      "The application include firebase social media authentication and real-time push notification feature.",
    ],
    techStacks: ["Dart", "Flutter", "Firebase"],
  },
  {
    id: 2,
    title: "CUHK ClubApp",
    link: "https://github.com/AndyPhoenix9879/Cnergy",
    images: [
      "https://i.imgur.com/98zuijI.png",
      "https://i.imgur.com/ePJDl71.png",
    ],
    descriptions: [
      "A web-based application designed to allow students in CUHK to hold and join various clubs and activities.",
      "Collaborate in a group consists of five students. This project is done as a requirement for the course CSCI3100 - Software Engineering.",
      "Contribute both in front-end services and back-end services. Back-end services include authentication and creating APIs while front-end services include state management and fetching API responses.",
    ],
    techStacks: [
      "Typescript",
      "TypeORM",
      "Vue.js",
      "Vuex",
      "Javascript",
      "MySQL",
    ],
  },
];

export default ProjectModel;
