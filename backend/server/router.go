package server

import (
	"homepage/controllers"
	"homepage/db"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func NewRouter() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	router.Use(cors.New(cors.Config{
		AllowMethods:     []string{"GET"},
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowCredentials: true,
	}))

	db := db.GetDB()
	handler := controllers.NewController(
		controllers.NewAchievementController(db),
		controllers.NewExperienceController(db),
		controllers.NewProjectController(db),
	)

	router.GET("/achievement", handler.Achievement.GetAchievements)
	router.GET("/experience", handler.Experience.GetExperiences)
	router.GET("/project", handler.Project.GetProjects)

	return router
}
