interface Experience {
  educations: Education[];
  works: Work[];
}

export interface Education {
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

export interface Work {
  id: number;
  company: string;
  companyUrl: string;
  imageUrl: string;
  place: string;
  time: string;
  role: string;
  descriptions: string[];
}

export default Experience;
