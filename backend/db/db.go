package db

import (
	"homepage/config"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)

var db *gorm.DB

func CreateConnection() error {
	env := os.Getenv("APP_ENV")

	var psqlInfo string
	if env == "development" {
		psqlInfo = config.GetDBUrl()
	} else {
		// For heroku environment
		psqlInfo = os.Getenv("DATABASE_URL")
	}

	var err error
	db, err = gorm.Open("postgres", psqlInfo)
	if err != nil {
		return err
	}
	return nil
}

func CloseConnection() {
	db.Close()
}

func GetDB() *gorm.DB {
	return db
}
