package models

import "database/sql"

// Experience model
type Experience struct {
	Educations []*education `json:"educations"`
	Work       []*work      `json:"works"`
}

type education struct {
	ID             int64    `json:"id"`
	Institution    string   `json:"institution"`
	InstitutionURL string   `json:"institutionUrl"`
	Grade          string   `json:"grade"`
	Place          string   `json:"place"`
	ImageURL       string   `json:"imageUrl"`
	Time           string   `json:"time"`
	Role           string   `json:"role"`
	Descriptions   []string `json:"descriptions"`
}

type work struct {
	ID           int64    `json:"id"`
	Company      string   `json:"company"`
	CompanyURL   string   `json:"companyUrl"`
	ImageURL     string   `json:"imageUrl"`
	Role         string   `json:"role"`
	Time         string   `json:"time"`
	Place        string   `json:"place"`
	Descriptions []string `json:"descriptions"`
}

type experienceOrmer struct {
	db *sql.DB
}

// ExperienceOrmer defines the operations of experienceOrmer
type ExperienceOrmer interface {
	GetAll() (*Experience, error)
	GetEducations() ([]*education, error)
	GetWorks() ([]*work, error)
	GetDescriptions(query string, ID int64) ([]string, error)
}

// NewExperienceOrmer returns an instance of experienceOrmer
func NewExperienceOrmer(db *sql.DB) ExperienceOrmer {
	return &experienceOrmer{db: db}
}

func (o *experienceOrmer) GetAll() (*Experience, error) {
	var experience Experience
	var err error

	experience.Educations, err = o.GetEducations()
	if err != nil {
		return nil, err
	}
	experience.Work, err = o.GetWorks()
	if err != nil {
		return nil, err
	}

	return &experience, nil
}

func (o *experienceOrmer) GetEducations() ([]*education, error) {
	queryString := `
		SELECT
			id, institution, institution_url, grade, place, image_url, time, role
		FROM educations
		ORDER BY id DESC
	`
	queryResult, err := o.db.Query(queryString)
	if err != nil {
		return nil, err
	}
	defer queryResult.Close()

	var educations []*education
	for queryResult.Next() {
		var education education
		err := queryResult.Scan(
			&education.ID,
			&education.Institution,
			&education.InstitutionURL,
			&education.Grade,
			&education.Place,
			&education.ImageURL,
			&education.Time,
			&education.Role,
		)
		if err != nil {
			return nil, err
		}

		queryString := `
			SELECT content
			FROM education_descriptions
			WHERE education_id = $1
			ORDER BY id ASC
		`
		education.Descriptions, err = o.GetDescriptions(queryString, education.ID)
		if err != nil {
			return nil, err
		}
		educations = append(educations, &education)
	}

	return educations, nil
}

func (o *experienceOrmer) GetWorks() ([]*work, error) {
	queryString := `
		SELECT
			id, company, company_url, image_url, role, time, place
		FROM works
		ORDER BY id DESC
	`
	queryResult, err := o.db.Query(queryString)
	if err != nil {
		return nil, err
	}
	defer queryResult.Close()

	var works []*work
	for queryResult.Next() {
		var work work
		err := queryResult.Scan(
			&work.ID,
			&work.Company,
			&work.CompanyURL,
			&work.ImageURL,
			&work.Role,
			&work.Time,
			&work.Place,
		)
		if err != nil {
			return nil, err
		}

		queryString := `
			SELECT content
			FROM work_descriptions
			WHERE work_id = $1
			ORDER BY id ASC
		`
		work.Descriptions, err = o.GetDescriptions(queryString, work.ID)
		if err != nil {
			return nil, err
		}
		works = append(works, &work)
	}

	return works, nil
}

func (o *experienceOrmer) GetDescriptions(query string, ID int64) ([]string, error) {
	queryResult, err := o.db.Query(query, ID)
	if err != nil {
		return nil, err
	}
	defer queryResult.Close()

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
