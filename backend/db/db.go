package db

import (
	"database/sql"
	"os"

	_ "github.com/lib/pq"
)

// Db is the database handler
var Db *sql.DB

// CreateConnection establish connection with the database
func CreateConnection() error {
	psqlString := os.Getenv("DATABASE_URL")

	db, err := sql.Open("postgres", psqlString)
	if err != nil {
		return err
	}

	Db = db
	return nil
}

// CloseConnection is used to close the database connection
func CloseConnection() {
	Db.Close()
}
