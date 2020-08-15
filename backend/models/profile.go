package models

import "database/sql"

// Profile model
type Profile struct {
	ID           int64    `json:"-"`
	Name         string   `json:"name"`
	Message      string   `json:"message"`
	ImageURL     string   `json:"imageUrl"`
	Email        string   `json:"email"`
	Descriptions []string `json:"descriptions"`
}

type profileOrmer struct {
	db *sql.DB
}

// ProfileOrmer defines the operations of profileOrmer
type ProfileOrmer interface {
	Get() (*Profile, error)
	GetDescriptions() ([]string, error)
}

// NewProfileOrmer returns an instance of profileOrmer
func NewProfileOrmer(db *sql.DB) ProfileOrmer {
	return &profileOrmer{db: db}
}

func (o *profileOrmer) Get() (*Profile, error) {
	queryString := `
		SELECT name, message, image_url, email
		FROM profile
	`
	queryResult := o.db.QueryRow(queryString)

	var profile Profile
	err := queryResult.Scan(
		&profile.Name,
		&profile.Message,
		&profile.ImageURL,
		&profile.Email,
	)
	if err != nil {
		return nil, err
	}

	profile.Descriptions, err = o.GetDescriptions()
	if err != nil {
		return nil, err
	}

	return &profile, nil
}

func (o *profileOrmer) GetDescriptions() ([]string, error) {
	queryString := `
		SELECT content
		FROM profile_descriptions
		ORDER BY id ASC
	`
	queryResult, err := o.db.Query(queryString)
	if err != nil {
		return nil, err
	}

	var descriptions []string
	for queryResult.Next() {
		var description string
		err := queryResult.Scan(&description)
		if err != nil {
			return nil, err
		}
		descriptions = append(descriptions, description)
	}

	return descriptions, nil
}
