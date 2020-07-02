package controllers

import (
	"homepage/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// ProfileController is the controller for profile
type ProfileController struct {
	ormer *gorm.DB
}

// Profile defines the operation related to profile
type Profile interface {
	GetProfile(*gin.Context)
}

// NewProfileController returns an "instance" of Profile
func NewProfileController(ormer *gorm.DB) Profile {
	return &ProfileController{
		ormer: ormer,
	}
}

// GetProfile return all achievements
// Routed from GET "/profile"
func (p *ProfileController) GetProfile(c *gin.Context) {
	var profile models.Profile
	var descriptions []models.ProfileDescription

	err := p.ormer.First(&models.Profile{}).Scan(&profile).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
		return
	}

	err = p.ormer.Table("profile_descriptions").Scan(&descriptions).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
		return
	}

	profile.Descriptions = descriptions
	c.JSON(http.StatusOK, profile)
}
