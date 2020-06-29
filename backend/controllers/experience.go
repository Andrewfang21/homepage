package controllers

import (
	"homepage/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// ExperienceController is the controller for experience
type ExperienceController struct {
	ormer *gorm.DB
}

// Experience defines the operation related to experience
type Experience interface {
	GetExperiences(*gin.Context)
}

// NewExperienceController returns an "instance" of Experience
func NewExperienceController(ormer *gorm.DB) Experience {
	return &ExperienceController{
		ormer: ormer,
	}
}

// GetExperiences return all experiences
// Routed from GET "/experience"
func (e *ExperienceController) GetExperiences(c *gin.Context) {
	var educations []models.Education
	var works []models.Work

	e.ormer.LogMode(true)
	err := e.ormer.
		Preload("Descriptions").
		Order("id DESC").
		Find(&educations).
		Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
	}

	err = e.ormer.
		Preload("Descriptions").
		Order("id DESC").
		Find(&works).
		Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
	}

	experiences := models.Experience{
		Educations: educations,
		Works:      works,
	}

	c.JSON(http.StatusOK, experiences)
}
