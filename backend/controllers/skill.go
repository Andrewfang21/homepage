package controllers

import (
	"homepage/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

// SkillController is the controller for skill
type SkillController struct {
	ormer *gorm.DB
}

// Skill defines the operation related to skill
type Skill interface {
	GetSkills(*gin.Context)
}

// NewSkillController returns an "instance" of Skill
func NewSkillController(ormer *gorm.DB) Skill {
	return &SkillController{
		ormer: ormer,
	}
}

// GetSkills return all skills
// Routed from GET "/skill"
func (s *SkillController) GetSkills(c *gin.Context) {
	var skills []models.Skill
	s.ormer.LogMode(true)

	err := s.ormer.Order("label").Find(&skills).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
	}

	c.JSON(http.StatusOK, skills)
}
