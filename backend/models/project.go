package models

import (
	"database/sql"
)

// Project model
type Project struct {
	ID           int64    `json:"id"`
	Title        string   `json:"title"`
	Link         string   `json:"link"`
	ImageURLs    []string `json:"imageUrls"`
	DemoURL      string   `json:"demoUrl"`
	Descriptions string   `json:"descriptions"`
}

type projectOrmer struct {
	db *sql.DB
}

// ProjectOrmer defines the operations of projectOrmer
type ProjectOrmer interface {
	GetAll() ([]*Project, error)
	GetImageUrls(projectID int64) ([]string, error)
}

// NewProjectOrmer returns an instance of projectOrmer
func NewProjectOrmer(db *sql.DB) ProjectOrmer {
	return &projectOrmer{db: db}
}

func (o *projectOrmer) GetAll() ([]*Project, error) {
	queryString := `
		SELECT
			id, title, link, demo_url, descriptions
		FROM projects
		ORDER BY id DESC
	`
	queryResult, err := o.db.Query(queryString)
	if err != nil {
		return nil, err
	}
	defer queryResult.Close()

	var projects []*Project
	for queryResult.Next() {
		var project Project
		err := queryResult.Scan(
			&project.ID,
			&project.Title,
			&project.Link,
			&project.DemoURL,
			&project.Descriptions,
		)
		if err != nil {
			return nil, err
		}

		project.ImageURLs, err = o.GetImageUrls(project.ID)
		if err != nil {
			return nil, err
		}
		projects = append(projects, &project)
	}

	return projects, nil
}

func (o *projectOrmer) GetImageUrls(projectID int64) ([]string, error) {
	queryString := `
		SELECT image_link
		FROM project_images
		WHERE project_id = $1
	`
	queryResult, err := o.db.Query(queryString, projectID)
	if err != nil {
		return nil, err
	}

	var urls []string
	for queryResult.Next() {
		var url string
		err := queryResult.Scan(&url)
		if err != nil {
			return nil, err
		}
		urls = append(urls, url)
	}

	return urls, nil
}
