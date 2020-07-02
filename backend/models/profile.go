package models

import "time"

// Profile model
type Profile struct {
	ID           int64                `json:"-" gorm:"column:id"`
	Name         string               `json:"name" gorm:"column:name"`
	Message      string               `json:"message" gorm:"column:message"`
	ImageURL     string               `json:"imageUrl" gorm:"column:image_url"`
	Email        string               `json:"email" gorm:"column:email"`
	Descriptions []ProfileDescription `json:"descriptions"`
	CreatedAt    time.Time            `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt    time.Time            `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt    time.Time            `json:"-" sql:"DEFAULT:null"`
}

// ProfileDescription is the description of Profile model
type ProfileDescription struct {
	ID        int64     `json:"id" gorm:"column:id"`
	UserID    int64     `json:"-" gorm:"column:user_id"`
	Content   string    `json:"content" column:"content"`
	CreatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt time.Time `json:"-" sql:"DEFAULT:null"`
}

// TableName is used to singularize the `profile` table name
func (Profile) TableName() string {
	return "profile"
}
