package server

import (
	"fmt"
	"os"
)

// InitServer initializes the server
func InitServer() error {
	r := NewRouter()
	port := fmt.Sprintf(":%s", os.Getenv("PORT"))

	err := r.Run(port)
	if err != nil {
		return err
	}
	return nil
}
