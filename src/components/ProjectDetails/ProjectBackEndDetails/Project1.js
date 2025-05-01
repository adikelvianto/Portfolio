import React from "react";
import ProjectCard from "./ProjectCards";
import { AiFillGithub } from "react-icons/ai";
import { SiPostgresql, SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Forum API"
        date="August 2023"
        content={`
          <h1>Forum API – A Lightweight Discussion Platform</h1>
          <p>The Forum API is a RESTful backend service that enables users to register, log in, and participate in threaded discussions. It was built as a submission for Dicoding’s Back-End Developer Program, emphasizing clean architecture, automated testing, and robust error handling.</p>

          </br>
          
          <table class="two-column-table">
            <!-- Row 1 -->
            <tr>
              <td class="column">
                <h2>🔍 Overview</h2>
                <ul>
                  <li>Secure user registration & authentication</li>
                  <li>Thread creation & nested commenting</li>
                  <li>Like/unlike on comments & replies</li>
                  <li>Full nesting retrieval of discussion threads</li>
                </ul>
              </td>
              <td class="column">
                <h2>🛠️ Tools & Technologies</h2>
                <ul>
                  <li><strong>Node.js</strong> & <strong>Hapi.js</strong></li>
                  <li><strong>PostgreSQL</strong> database</li>
                  <li><strong>JWT</strong> for authentication</li>
                  <li><strong>Postman</strong> for API testing</li>
                  <li><strong>Jest</strong> for unit/integration tests</li>
                </ul>
              </td>
            </tr>

            <!-- Row 2 -->
            <tr>
              <td class="column">
                <h2>🧱 Architectural Design</h2>
                <ul>
                  <li>Clean Architecture layering</li>
                  <li>Modular separation of concerns</li>
                  <li>Decoupled business logic & delivery</li>
                </ul>
              </td>
              <td class="column">
                <h2>👨‍💻 My Responsibilities</h2>
                <ul>
                  <li>Endpoint & controller implementation</li>
                  <li>Database schema design (users, threads, comments, likes)</li>
                  <li>Test coverage via Jest (TDD approach)</li>
                  <li>Error handling & validation logic</li>
                </ul>
              </td>
            </tr>

            <!-- Row 3 -->
            <tr>
              <td class="column">
                <h2>📌 Key Features</h2>
                <ul>
                  <li>Secure auth & token refresh</li>
                  <li>Thread & comment CRUD</li>
                  <li>Like/unlike system</li>
                  <li>Recursive reply retrieval</li>
                </ul>
              </td>
              <td class="column">
                <h2>⚙️ Challenges & Solutions</h2>
                <ul>
                  <li><strong>Nested replies:</strong> Optimized recursive queries</li>
                  <li><strong>Modularity:</strong> Dependency injection for flexibility</li>
                </ul>
              </td>
            </tr>

            <!-- Row 4 -->
            <tr>
              <td class="column">
                <h2>🧪 Testing & Reliability</h2>
                <ul>
                  <li>100% unit/integration coverage</li>
                  <li>Edge-case & failure mode tests</li>
                </ul>
              </td>
              <td class="column">
                <h2>📚 Lessons Learned</h2>
                <ul>
                  <li>Implementing clean architecture in Node.js</li>
                  <li>Writing maintainable, testable back-end code</li>
                  <li>Designing secure, production-ready APIs</li>
                </ul>
              </td>
            </tr>
          </table>
        `}
        num_of_icon={5}
        icon1={() => <DiNodejs />}
        icon2={() => <SiPostgresql />}
        icon3={() => <SiPostman />}
        icon4={() => <FaAws />}
        icon5={() => <AiFillGithub />}
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/ForumAPI"
      />
    </Container>
  );
}

export default ProjectList;
