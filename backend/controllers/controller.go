package controllers

type Controller struct {
	Achievement Achievement
	Experience  Experience
	Project     Project
}

func NewController(Achievement Achievement, Experience Experience, Project Project) *Controller {
	return &Controller{
		Achievement: Achievement,
		Experience:  Experience,
		Project:     Project,
	}
}
