package server

import (
	"homepage/controllers"
	"homepage/db"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// NewRouter returns the router that handle the endpoints
func NewRouter() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	router.Use(cors.New(cors.Config{
		AllowMethods:     []string{"GET", "OPTIONS"},
		AllowOrigins:     []string{"http://localhost:3000", "http://localhost:5000", "https://andrewfanggara.herokuapp.com/"},
		AllowCredentials: true,
	}))

	db := db.GetDB()
	handler := controllers.NewController(
		controllers.NewAchievementController(db),
		controllers.NewExperienceController(db),
		controllers.NewProfileController(db),
		controllers.NewProjectController(db),
		controllers.NewSkillController(db),
	)

	router.GET("/achievement", handler.Achievement.GetAchievements)
	router.GET("/experience", handler.Experience.GetExperiences)
	router.GET("/profile", handler.Profile.GetProfile)
	router.GET("/project", handler.Project.GetProjects)
	router.GET("/skill", handler.Skill.GetSkills)

	return router
}
