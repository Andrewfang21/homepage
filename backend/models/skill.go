package models

import "database/sql"

// Skill model
type Skill struct {
	ID    int64  `json:"id"`
	Name  string `json:"name"`
	Label string `json:"label"`
}

type skillOrmer struct {
	db *sql.DB
}

// SkillOrmer defines the operations of skillOrmer
type SkillOrmer interface {
	GetAll() ([]*Skill, error)
}

// NewSkillOrmer returns an instance of skillOrmer
func NewSkillOrmer(db *sql.DB) SkillOrmer {
	return &skillOrmer{db: db}
}

func (o *skillOrmer) GetAll() ([]*Skill, error) {
	queryString := `
		SELECT
			id, name, label
		FROM skills
		ORDER BY id ASC
	`
	queryResult, err := o.db.Query(queryString)
	if err != nil {
		return nil, err
	}
	defer queryResult.Close()

	var skills []*Skill
	for queryResult.Next() {
		var skill Skill
		err := queryResult.Scan(
			&skill.ID,
			&skill.Name,
			&skill.Label,
		)
		if err != nil {
			return nil, err
		}
		skills = append(skills, &skill)
	}

	return skills, nil
}
