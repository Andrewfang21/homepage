package models

import "time"

type Experience struct {
	Educations []Education `json:"educations"`
	Works      []Work      `json:"works"`
}

type Education struct {
	ID             int64                  `json:"id" gorm:"column:id"`
	Institution    string                 `json:"institution" gorm:"column:institution"`
	InstitutionURL string                 `json:"institutionUrl" gorm:"column:institution_url"`
	Grade          string                 `json:"grade" gorm:"column:grade"`
	Place          string                 `json:"place" gorm:"column:place"`
	ImageURL       string                 `json:"imageUrl" gorm:"image_url"`
	Time           string                 `json:"time" gorm:"column:time"`
	Role           string                 `json:"role" gorm:"column:role"`
	Descriptions   []educationDescription `json:"descriptions"`
	CreatedAt      time.Time              `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt      time.Time              `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt      time.Time              `json:"-" sql:"DEFAULT:null"`
}

type educationDescription struct {
	ID          int64     `json:"id" gorm:"column:id"`
	EducationID int64     `json:"-" gorm:"column:education_id"`
	Content     string    `json:"content" gorm:"column:content"`
	CreatedAt   time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt   time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt   time.Time `json:"-" sql:"DEFAULT:null"`
}

type Work struct {
	ID           int64             `json:"id" gorm:"column:id"`
	Company      string            `json:"company" gorm:"column:company"`
	CompanyURL   string            `json:"companyUrl" gorm:"column:company_url"`
	ImageURL     string            `json:"imageUrl" gorm:"column:image_url"`
	Role         string            `json:"role" gorm:"column:role"`
	Time         string            `json:"time" gorm:"time"`
	Place        string            `json:"place" gorm:"column:place"`
	Descriptions []workDescription `json:"descriptions"`
	CreatedAt    time.Time         `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt    time.Time         `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt    time.Time         `json:"-" sql:"DEFAULT:null"`
}

type workDescription struct {
	ID        int64     `json:"id" gorm:"column:id"`
	WorkID    int64     `json:"-" gorm:"column:work_id"`
	Content   string    `json:"content" gorm:"column:content"`
	CreatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt time.Time `json:"-" sql:"DEFAULT:null"`
}
