package models

import "database/sql"

// Experience model
type Experience struct {
	Educations []*education `json:"educations"`
	Work       []*work      `json:"works"`
}

type education struct {
	ID             int64  `json:"id"`
	Institution    string `json:"institution"`
	InstitutionURL string `json:"institutionUrl"`
	Grade          string `json:"grade"`
	Place          string `json:"place"`
	ImageURL       string `json:"imageUrl"`
	Time           string `json:"time"`
	Role           string `json:"role"`
	Descriptions   string `json:"descriptions"`
}

type work struct {
	ID           int64  `json:"id"`
	Company      string `json:"company"`
	CompanyURL   string `json:"companyUrl"`
	ImageURL     string `json:"imageUrl"`
	Role         string `json:"role"`
	Time         string `json:"time"`
	Place        string `json:"place"`
	Descriptions string `json:"descriptions"`
}

type experienceOrmer struct {
	db *sql.DB
}

// ExperienceOrmer defines the operations of experienceOrmer
type ExperienceOrmer interface {
	GetAll() (*Experience, error)
	GetEducations() ([]*education, error)
	GetWorks() ([]*work, error)
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
			id, institution, institution_url, grade, place, image_url, time, role, descriptions
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
			&education.Descriptions,
		)
		if err != nil {
			return nil, err
		}

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
			id, company, company_url, image_url, role, time, place, descriptions
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
			&work.Descriptions,
		)
		if err != nil {
			return nil, err
		}

		works = append(works, &work)
	}

	return works, nil
}
