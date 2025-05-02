import React from "react";
import ProjectCard from "./ProjectCards";
import { SiPostman } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="BookShelf API – CRUD Book Management with Node.js & Hapi API"
        date="November 2022"
        content= {`
          <p class="project-details-p">The BookShelf API is a backend service that allows users to manage a personal digital library. It provides a clean and secure RESTful interface for creating, retrieving, updating, and deleting book entries, built with Hapi and Node.js using clear validation and structured response handling.</p>

          <br/>
          
          <table class="two-column-table">
            <tr>
              <td class="column">
                <h2>🔍 Overview</h2>
                <ul>
                  <li>Full CRUD for book data</li>
                  <li>Search by title & reading status</li>
                  <li>Mark books as finished/unread</li>
                  <li>Clear and structured API responses</li>
                  <li>Robust input validation</li>
                </ul>
              </td>
              <td class="column">
                <h2>🛠️ Tools & Technologies</h2>
                <ul>
                  <li><strong>Node.js</strong> & <strong>Hapi.js</strong></li>
                  <li><strong>UUID</strong> for unique ID generation</li>
                  <li><strong>Nanoid</strong> as an alternative ID generator</li>
                  <li>Built without a database (in-memory storage)</li>
                </ul>
              </td>
            </tr>
          
            <tr>
              <td class="column">
                <h2>📦 Features</h2>
                <ul>
                  <li>Add, retrieve, update, and delete books</li>
                  <li>Filter books by reading or completion status</li>
                  <li>Get details of a book by ID</li>
                  <li>Comprehensive validation with user-friendly errors</li>
                </ul>
              </td>
              <td class="column">
                <h2>👨‍💻 My Responsibilities</h2>
                <ul>
                  <li>Routing and handler setup</li>
                  <li>Payload validation logic</li>
                  <li>Error handling and response formatting</li>
                  <li>Code organization & documentation</li>
                </ul>
              </td>
            </tr>
          
            <tr>
              <td class="column">
                <h2>⚙️ Special Considerations</h2>
                <ul>
                  <li>Optimized for clarity and learning</li>
                  <li>Lightweight structure with no external database</li>
                  <li>Separation of logic for maintainability</li>
                </ul>
              </td>
              <td class="column">
                <h2>📚 Lessons Learned</h2>
                <ul>
                  <li>Building structured APIs with Hapi</li>
                  <li>Effective validation and error responses</li>
                  <li>Designing intuitive RESTful endpoints</li>
                </ul>
              </td>
            </tr>
          </table>
          `}
        num_of_icon={2}
        icon1={() => <DiNodejs />}
        icon2={() => <SiPostman />}
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/BookShelfAPI"
      />
    </Container>
  );
}

export default ProjectList;
