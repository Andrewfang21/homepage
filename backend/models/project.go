package models

import "time"

type Project struct {
	ID           int64                `json:"id" gorm:"column:id"`
	Title        string               `json:"title" gorm:"column:title"`
	Link         string               `json:"link" gorm:"column:link"`
	TechStacks   string               `json:"techStack" gorm:"column:tech_stacks"`
	ImageURLs    []projectImage       `json:"imageUrls"`
	Descriptions []projectDescription `json:"descriptions"`
	CreatedAt    time.Time            `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt    time.Time            `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt    time.Time            `json:"-" sql:"DEFAULT:null"`
}

type projectImage struct {
	ID        int64     `json:"id" gorm:"column:id"`
	ProjectID int64     `json:"-" gorm:"column:project_id"`
	ImageURL  string    `json:"url" gorm:"column:image_link"`
	CreatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt time.Time `json:"-" sql:"DEFAULT:null"`
}

type projectDescription struct {
	ID        int64     `json:"id" gorm:"column:id"`
	ProjectID int64     `json:"-" gorm:"column:project_id"`
	Content   string    `json:"content" gorm:"column:content"`
	CreatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	UpdatedAt time.Time `json:"-" sql:"DEFAULT:current_timestamp"`
	DeletedAt time.Time `json:"-" sql:"DEFAULT:null"`
}
