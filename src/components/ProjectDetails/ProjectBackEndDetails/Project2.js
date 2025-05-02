import React from "react";
import ProjectCard from "./ProjectCards";
import { SiPostgresql, SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="OpenMusic API – Music Service with Node.js, RabbitMQ & Redis"
        date="July 2023"
        content={`
          <p class="project-details-p">The OpenMusic API is a robust backend service designed to manage music albums, songs, playlists, and user collaborations.
           It features secure authentication, file uploads, server-side caching, and asynchronous processing using message queues, all built with a modular and scalable architecture.</p>
      
          <br/>
      
          <table class="two-column-table">
            <tr>
              <td class="column">
                <h2>🔍 Overview</h2>
                <ul>
                  <li>Full CRUD for Albums & Songs</li>
                  <li>JWT-based Authentication & User Roles</li>
                  <li>Playlist & collaboration feature</li>
                  <li>Song export via email using RabbitMQ & Nodemailer</li>
                  <li>Album cover image upload & retrieval</li>
                  <li>Like system with Redis caching</li>
                </ul>
              </td>
              <td class="column">
                <h2>🛠️ Tools & Technologies</h2>
                <ul>
                  <li><strong>Node.js</strong> & <strong>Hapi.js</strong></li>
                  <li><strong>PostgreSQL</strong> for relational data</li>
                  <li><strong>Redis</strong> for caching</li>
                  <li><strong>RabbitMQ</strong> for background tasks</li>
                  <li><strong>Nodemailer</strong> for email delivery</li>
                  <li><strong>JWT</strong> for auth</li>
                </ul>
              </td>
            </tr>
      
            <tr>
              <td class="column">
                <h2>📦 Modules</h2>
                <ul>
                  <li>Albums, Songs, and Playlist CRUD</li>
                  <li>Query search for song title/performer</li>
                  <li>Collaborative playlists (invite/remove users)</li>
                  <li>Upload album cover and serve public files</li>
                </ul>
              </td>
              <td class="column">
                <h2>👨‍💻 My Responsibilities</h2>
                <ul>
                  <li>Database & API schema design</li>
                  <li>Implementation of authentication & token refresh</li>
                  <li>RabbitMQ integration for export service</li>
                  <li>Redis caching for likes data</li>
                  <li>Validation & error handling</li>
                </ul>
              </td>
            </tr>
      
            <tr>
              <td class="column">
                <h2>⚙️ Special Features</h2>
                <ul>
                  <li>Email-based song export system (JSON file)</li>
                  <li>Authorization-based access control for playlists</li>
                  <li>Like/unlike toggle system per user</li>
                  <li>Cache invalidation & custom headers with Redis</li>
                </ul>
              </td>
              <td class="column">
                <h2>📚 Lessons Learned</h2>
                <ul>
                  <li>Working with messaging queues (RabbitMQ)</li>
                  <li>Secure REST API design & data validation</li>
                  <li>Implementing file uploads and Redis caching</li>
                  <li>Handling concurrency and background jobs</li>
                </ul>
              </td>
            </tr>
          </table>
        `}
        num_of_icon={4}
        icon1={() => <DiNodejs />}
        icon2={() => <SiPostgresql />}
        icon3={() => <SiPostman />}
        icon4={() => <FaAws />}
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/OpenMusicAPI"
      />
    </Container>
  );
}

export default ProjectList;
