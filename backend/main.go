package main

import (
	"homepage/controllers"
	"homepage/db"
	"homepage/models"
	"log"
	"os"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load(".env")

	err := db.CreateConnection()
	if err != nil {
		log.Fatalf("%s\n", err)
		return
	}
	defer db.CloseConnection()

	allowedOrigins := strings.Split(os.Getenv("ALLOWED_ORIGINS"), ",")
	allowedMethods := strings.Split(os.Getenv("ALLOWED_METHODS"), ",")

	r := gin.New()
	r.Use(
		gin.Logger(),
		gin.Recovery(),
		cors.New(cors.Config{
			AllowMethods:     allowedMethods,
			AllowOrigins:     allowedOrigins,
			AllowCredentials: true,
		}),
	)

	db := db.Db

	achievementOrmer := models.NewAchievementOrmer(db)
	experienceOrmer := models.NewExperienceOrmer(db)
	profileOrmer := models.NewProfileOrmer(db)
	projectOrmer := models.NewProjectOrmer(db)
	skillOrmer := models.NewSkillOrmer(db)

	controller := controllers.NewHomepageController(achievementOrmer, experienceOrmer, profileOrmer, projectOrmer, skillOrmer)

	configureRoutes(r, controller)

	port := ":" + os.Getenv("PORT")
	if err := r.Run(port); err != nil {
		log.Fatalf("%s\n", err)
		return
	}
}

func configureRoutes(r *gin.Engine, h controllers.HomepageController) {
	r.GET("/achievements", func(c *gin.Context) {
		resp, statusCode, err := h.GetAchievements()
		if err != nil {
			c.JSON(statusCode, gin.H{"error": err.Error()})
			return
		}
		c.JSON(statusCode, resp)
	})

	r.GET("/experiences", func(c *gin.Context) {
		resp, statusCode, err := h.GetExperiences()
		if err != nil {
			c.JSON(statusCode, gin.H{"error": err.Error()})
			return
		}
		c.JSON(statusCode, resp)
	})

	r.GET("/profile", func(c *gin.Context) {
		resp, statusCode, err := h.GetProfile()
		if err != nil {
			c.JSON(statusCode, gin.H{"error": err.Error()})
			return
		}
		c.JSON(statusCode, resp)
	})

	r.GET("/projects", func(c *gin.Context) {
		resp, statusCode, err := h.GetProjects()
		if err != nil {
			c.JSON(statusCode, gin.H{"error": err.Error()})
			return
		}
		c.JSON(statusCode, resp)
	})

	r.GET("/skills", func(c *gin.Context) {
		resp, statusCode, err := h.GetSkills()
		if err != nil {
			c.JSON(statusCode, gin.H{"error": err.Error()})
			return
		}
		c.JSON(statusCode, resp)
	})
}
