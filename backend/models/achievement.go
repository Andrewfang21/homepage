package models

import "time"

// Achievement model
type Achievement struct {
	ID           int64                    `json:"id" gorm:"column:id"`
	Title        string                   `json:"title" gorm:"column:title"`
	Time         string                   `json:"time" gorm:"column:time"`
	ImageURL     string                   `json:"imageUrl" gorm:"column:image_url"`
	Organizer    string                   `json:"organizer" gorm:"column:organizer"`
	Descriptions []achievementDescription `json:"descriptions"`
	CreatedAt    time.Time                `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt    time.Time                `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt    time.Time                `json:"-" sql:"DEFAULT:null"`
}

type achievementDescription struct {
	ID            int64     `json:"id" gorm:"column:id"`
	AchievementID int64     `json:"-" gorm:"column:achievement_id"`
	Content       string    `json:"content" gorm:"column:content"`
	CreatedAt     time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt     time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt     time.Time `json:"-" sql:"DEFAULT:null"`
}
