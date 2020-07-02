package controllers

import (
	"homepage/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// ProjectController is the controller for project
type ProjectController struct {
	ormer *gorm.DB
}

// Project defines the operation related to project
type Project interface {
	GetProjects(*gin.Context)
}

// NewProjectController returns an "instance" of Project
func NewProjectController(ormer *gorm.DB) Project {
	return &ProjectController{
		ormer: ormer,
	}
}

// GetProjects return all projects
// Routed from GET "/project"
func (p *ProjectController) GetProjects(c *gin.Context) {
	var projects []models.Project

	p.ormer.LogMode(true)
	err := p.ormer.
		Preload("Descriptions").
		Preload("ImageURLs").
		Order("id DESC").
		Find(&projects).
		Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
	}
	c.JSON(http.StatusOK, projects)
}
