package controllers

import (
	"homepage/models"
	"net/http"
)

type homepageController struct {
	achievementOrmer models.AchievementOrmer
	experienceOrmer  models.ExperienceOrmer
	profileOrmer     models.ProfileOrmer
	projectOrmer     models.ProjectOrmer
	skillOrmer       models.SkillOrmer
}

// HomepageController defines the operation of homepageController
type HomepageController interface {
	GetAchievements() ([]*models.Achievement, int, error)
	GetExperiences() (*models.Experience, int, error)
	GetProfile() (*models.Profile, int, error)
	GetProjects() ([]*models.Project, int, error)
	GetSkills() ([]*models.Skill, int, error)
}

// NewHomepageController returns a controller for homepage service
func NewHomepageController(
	achievementOrmer models.AchievementOrmer,
	experienceOrmer models.ExperienceOrmer,
	profileOrmer models.ProfileOrmer,
	projectOrmer models.ProjectOrmer,
	skillOrmer models.SkillOrmer) HomepageController {
	return &homepageController{
		achievementOrmer: achievementOrmer,
		experienceOrmer:  experienceOrmer,
		profileOrmer:     profileOrmer,
		projectOrmer:     projectOrmer,
		skillOrmer:       skillOrmer,
	}
}

func (c *homepageController) GetAchievements() ([]*models.Achievement, int, error) {
	achievements, err := c.achievementOrmer.GetAll()
	if err != nil {
		return nil, http.StatusInternalServerError, err
	}
	return achievements, http.StatusOK, nil
}

func (c *homepageController) GetExperiences() (*models.Experience, int, error) {
	experiences, err := c.experienceOrmer.GetAll()
	if err != nil {
		return nil, http.StatusInternalServerError, err
	}
	return experiences, http.StatusOK, nil
}

func (c *homepageController) GetProfile() (*models.Profile, int, error) {
	profile, err := c.profileOrmer.Get()
	if err != nil {
		return nil, http.StatusInternalServerError, err
	}
	return profile, http.StatusOK, nil
}

func (c *homepageController) GetProjects() ([]*models.Project, int, error) {
	projects, err := c.projectOrmer.GetAll()
	if err != nil {
		return nil, http.StatusInternalServerError, err
	}
	return projects, http.StatusOK, nil
}

func (c *homepageController) GetSkills() ([]*models.Skill, int, error) {
	projects, err := c.skillOrmer.GetAll()
	if err != nil {
		return nil, http.StatusInternalServerError, err
	}
	return projects, http.StatusOK, nil
}
