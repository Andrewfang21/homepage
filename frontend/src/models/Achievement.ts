import tokiImageUrl from "../assets/toki-logo.png";
import osnImageUrl from "../assets/osn-logo.jpeg";
import pcrImageUrl from "../assets/pcr-logo.png";

export interface AchievementModel {
  id: number;
  title: string;
  organizer: string;
  time: string;
  image: string;
  descriptions: string[];
}

export const achievementData: AchievementModel[] = [
  {
    id: 1,
    title: "IOI Training Camp First Stage",
    time: "Sept 2018 - Oct 2018",
    organizer: "Indonesia Computing Olympiad Team",
    image: tokiImageUrl,
    descriptions: [
      "Selected as one of the participants in IOI (International Olympiad in Informatics) First Stage Training Camp.",
      "This training camp is held as a preparation to select top students to represent Indonesia in IOI.",
      "Learned advanced algorithms and data structures, such as Segment Tree, Fenwick Tree, Square-Root Decomposition, Network Flows, Strongly Connected Component, etc.",
    ],
  },
  {
    id: 2,
    title: "National Science Olympiad in Informatics",
    time: "June 2017",
    organizer: "Indonesia Minister of Education and Culture",
    image: osnImageUrl,
    descriptions: [
      "National Science Olympiad in Informatics is an annual competition held by Indonesia Minister of Education and Culture to filter the best students mainly in the area of Competitive Programming",
      "The contest consists of two days, where the participants are given 3 tasks to be solved in 5 hours each day. Each task is divided into several subtasks with its own constraints and the number of points",
      "Awarded with bronze medal after ranked 25th out of 76 participants across all provinces in Indonesia",
    ],
  },
  {
    id: 3,
    title: "PCR Informatics Olympiad",
    time: "Nov 2017",
    organizer: "Polytechnic Caltex Riau",
    image: pcrImageUrl,
    descriptions: [
      "PCR Informatics Olympiad is an annual competitive programming competition held by Polytechnic Caltex Riau",
      "The contest is divided to two sessions, with 5 problems given in each session to be solved in 3 hours.",
      "Ranked 1st place after solving all problems with the least time penalties",
    ],
  },
];
