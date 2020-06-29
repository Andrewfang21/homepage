package config

import "fmt"

type DBConfig struct {
	Dialect  string
	Host     string
	Port     int
	Username string
	Password string
	DBName   string
}

func GetDBUrl() string {
	config := &DBConfig{
		Dialect:  "postgres",
		Host:     "localhost",
		Port:     5432,
		Username: "postgres",
		Password: "secret",
		DBName:   "portfolio",
	}

	dbURL := fmt.Sprintf("port=%d host=%s user=%s password=%s dbname=%s sslmode=disable",
		config.Port,
		config.Host,
		config.Username,
		config.Password,
		config.DBName,
	)
	return dbURL
}
