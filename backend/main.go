package main

import (
	"homepage/db"
	"homepage/server"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("%s\n", err)
		return
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
