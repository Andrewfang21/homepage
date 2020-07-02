package models

// Skill model
type Skill struct {
	ID    int64  `json:"id" gorm:"column:id"`
	Name  string `json:"name" gorm:"column:name"`
	Level int32  `json:"level" gorm:"column:level"`
}
