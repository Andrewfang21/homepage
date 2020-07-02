package controllers

// Controller handles all controllers
type Controller struct {
	Achievement Achievement
	Experience  Experience
	Profile     Profile
	Project     Project
	Skill       Skill
}

// NewController returns handler for all controllers
func NewController(Achievement Achievement, Experience Experience, Profile Profile, Project Project, Skill Skill) *Controller {
	return &Controller{
		Achievement: Achievement,
		Experience:  Experience,
		Profile:     Profile,
		Project:     Project,
		Skill:       Skill,
	}
}
