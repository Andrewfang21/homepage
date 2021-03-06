package models

import (
	"database/sql"
)

// Achievement model
type Achievement struct {
	ID           int64  `json:"id"`
	Title        string `json:"title"`
	Time         string `json:"time"`
	ImageURL     string `json:"imageUrl"`
	Organizer    string `json:"organizer"`
	Descriptions string `json:"descriptions"`
}

type achievementOrmer struct {
	db *sql.DB
}

// AchievementOrmer defines the operations of achievementOrmer
type AchievementOrmer interface {
	GetAll() ([]*Achievement, error)
}

// NewAchievementOrmer returns an instance of achievementOrmer
func NewAchievementOrmer(db *sql.DB) AchievementOrmer {
	return &achievementOrmer{db: db}
}

func (o *achievementOrmer) GetAll() ([]*Achievement, error) {
	queryString := `
		SELECT
			id, title, time, image_url, organizer, descriptions
		FROM achievements
		ORDER BY id DESC
	`
	queryResult, err := o.db.Query(queryString)
	if err != nil {
		return nil, err
	}
	defer queryResult.Close()

	var achievements []*Achievement
	for queryResult.Next() {
		var achievement Achievement
		err := queryResult.Scan(
			&achievement.ID,
			&achievement.Title,
			&achievement.Time,
			&achievement.ImageURL,
			&achievement.Organizer,
			&achievement.Descriptions,
		)
		if err != nil {
			return nil, err
		}

		achievements = append(achievements, &achievement)
	}

	return achievements, nil
}
