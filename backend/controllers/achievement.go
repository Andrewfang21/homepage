package controllers

import (
	"homepage/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// AchievementController is the controller for achievement
type AchievementController struct {
	ormer *gorm.DB
}

// Achievement defines the operation related to achievement
type Achievement interface {
	GetAchievements(*gin.Context)
}

// NewAchievementController returns an "instance" of Achievement
func NewAchievementController(ormer *gorm.DB) Achievement {
	return &AchievementController{
		ormer: ormer,
	}
}

// GetAchievements return all achievements
// Routed from GET "/achievement"
func (a *AchievementController) GetAchievements(c *gin.Context) {
	var achievements []models.Achievement

	a.ormer.LogMode(true)
	err := a.ormer.
		Preload("Descriptions").
		Order("id DESC").
		Find(&achievements).
		Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
	}

	c.JSON(http.StatusOK, achievements)
}
