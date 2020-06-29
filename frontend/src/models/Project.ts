import Description from "./Description";

interface ProjectModel {
  id: number;
  title: string;
  link: string;
  techStack: string;
  imageUrls: ImageModel[];
  descriptions: Description[];
}

export interface ImageModel {
  id: number;
  url: string;
}

export default ProjectModel;
