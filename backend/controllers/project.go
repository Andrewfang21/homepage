package controllers

import (
	"homepage/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

type ProjectController struct {
	ormer *gorm.DB
}

type Project interface {
	GetProjects(*gin.Context)
}

func NewProjectController(ormer *gorm.DB) Project {
	return &ProjectController{
		ormer: ormer,
	}
}

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
