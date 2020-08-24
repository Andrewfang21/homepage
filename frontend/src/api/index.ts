import axios from "axios";

import Achievement from "../models/Achievement";
import Experience from "../models/Experience";
import Profile from "../models/Profile";
import Project from "../models/Project";
import Skill from "../models/Skill";

const isOnProduction: boolean = process.env.NODE_ENV === "production";

const http = axios.create({
  baseURL: isOnProduction
    ? "https://andrewfang-api.herokuapp.com/"
    : "http://localhost:8080",
});

export async function getExperiences(): Promise<Experience> {
  const response = await http.get("/experiences");
  return response.data;
}

export async function getProjects(): Promise<Project[]> {
  const response = await http.get("/projects");
  return response.data;
}

export async function getAchievements(): Promise<Achievement[]> {
  const response = await http.get("/achievements");
  return response.data;
}

export async function getSkills(): Promise<Skill[]> {
  const response = await http.get("/skills");
  return response.data;
}

export async function getProfile(): Promise<Profile> {
  const response = await http.get("/profile");
  return response.data;
}
