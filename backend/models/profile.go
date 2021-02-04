package models

import "database/sql"

// Profile model
type Profile struct {
	ID           int64  `json:"-"`
	Name         string `json:"name"`
	Message      string `json:"message"`
	ImageURL     string `json:"imageUrl"`
	Email        string `json:"email"`
	Descriptions string `json:"descriptions"`
}

type profileOrmer struct {
	db *sql.DB
}

// ProfileOrmer defines the operations of profileOrmer
type ProfileOrmer interface {
	Get() (*Profile, error)
}

// NewProfileOrmer returns an instance of profileOrmer
func NewProfileOrmer(db *sql.DB) ProfileOrmer {
	return &profileOrmer{db: db}
}

func (o *profileOrmer) Get() (*Profile, error) {
	queryString := `
		SELECT name, message, image_url, email, descriptions
		FROM profile
	`
	queryResult := o.db.QueryRow(queryString)

	var profile Profile
	err := queryResult.Scan(
		&profile.Name,
		&profile.Message,
		&profile.ImageURL,
		&profile.Email,
		&profile.Descriptions,
	)
	if err != nil {
		return nil, err
	}

	return &profile, nil
}
