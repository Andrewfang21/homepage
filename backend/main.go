package main

import (
	"homepage/db"
	"homepage/server"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		os.Setenv("APP_ENV", "production")
	}

	err = db.CreateConnection()
	if err != nil {
		log.Fatalf("%s\n", err)
		return
	}
	defer db.CloseConnection()

	err = server.InitServer()
	if err != nil {
		log.Fatalf("%s\n", err)
		return
	}
}
