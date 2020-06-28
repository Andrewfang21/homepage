export interface ExperienceModel {
  educations: EducationModel[];
  works: WorkModel[];
}

export interface EducationModel {
  id: number;
  institution: string;
  institutionUrl: string;
  grade: string;
  place: string;
  imageUrl: string;
  time: string;
  role: string;
  descriptions: string[];
}

export interface WorkModel {
  id: number;
  company: string;
  companyUrl: string;
  imageUrl: string;
  place: string;
  time: string;
  role: string;
  descriptions: string[];
}

export const experienceData: ExperienceModel = {
  educations: [
    {
      id: 1,
      institution: "The Chinese University of Hong Kong",
      institutionUrl: "https://www.cuhk.edu.hk",
      grade: "Current CGPA: 0.00 / 4.00",
      place: "Hong Kong SAR",
      imageUrl:
        "https://raw.githubusercontent.com/Andrewfang21/homepage/master/frontend/src/assets/cuhk-logo.png",
      time: "Aug 2018 - Present",
      role: "Computer Science Undergraduate Student",
      descriptions: [
        "Intended Concentration: Intelligence Science & Distributed Systems, Networks and Security",
        "Relevant Courses Taken: Software Engineering, Distributed and Parallel Computing, Database Systems, Design and Analysis of Algorithms, Operating Systems, Cyber Security, Artificial Intelligence, Data Structures, Object-Oriented Programming, Discrete Mathematics, Engineering Economics",
        "Activities and Societies: Google Developer Student (DSC) Core Team Member",
      ],
    },
    {
      id: 2,
      institution: "Darma Yudha Senior High School",
      institutionUrl: "https://darmayudha.com/",
      grade: "CGPA: 92.46 / 100.00",
      place: "Pekanbaru, Indonesia",
      imageUrl:
        "https://raw.githubusercontent.com/Andrewfang21/homepage/master/frontend/src/assets/darma-yudha-logo.png",
      time: "July 2015 - May 2018",
      role: "Nature Science Stream High School Student",
      descriptions: [
        "Activities and Societies: Informatics Olympiad Team and Baseball Team",
      ],
    },
  ],
  works: [
    {
      id: 1,
      company: "STOQO",
      companyUrl: "https://www.stoqo.com/",
      imageUrl:
        "https://raw.githubusercontent.com/Andrewfang21/homepage/master/frontend/src/assets/stoqo-logo.png",
      place: "Jakarta, Indonesia",
      time: "-",
      role: "Software Engineering Intern",
      descriptions: [
        "STOQO is a B2B platform that aims to streamline the Food & Beverages business supply chain.",
        "Rescinded due to COVID19.",
      ],
    },
  ],
};
