import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[13];
    
      // Build dynamic icon props
      const iconProps = {};
      for (let i = 1; i <= project.num_of_icon; i++) {
        const iconName = project[`icon${i}`];
        if (iconName && iconMap[iconName]) {
          iconProps[`icon${i}`] = iconMap[iconName];
        }
      }

  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title={project.title}
      date={project.date}
      num_of_icon={project.num_of_icon}
      {...iconProps}
      hasDemo={project.hasDemo}
      hasGithub={project.hasGithub}
      ghLink={project.ghLink}
      content={`
        <p class="project-details-p">
          Monitors repair-related technical requests submitted to manufacturers (e.g., Airbus), 
          with clear status tracking and topic categorization. Minimizes the risk of missed or unanswered events.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Used by the airframe engineering team to monitor the repair progress of submitted technical requests</li>
                <li>Enabled categorization by damage type and aircraft, preventing follow-up delays</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard development</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Technical request dataset from manufacturer (e.g., Airbus)</li>
                <li>Filtered and grouped by repair status, topic, and aircraft registration</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Designed and structured the dashboard layout for clarity</li>
                <li>Collaborated with the airframe engineering team to define relevant tracking fields</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Filter by open, in-progress, and closed status</li>
                <li>Breakdown by damage type and component area</li>
                <li>Search and group by aircraft registration and ATA chapter</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>No major technical challenge</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Reduced risk of untracked or delayed follow-ups</li>
                <li>Improved cross-team situational awareness on ongoing repairs</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Centralizing repair request updates ensures no communication or follow-up is skipped</li>
              </ul>
            </td>
          </tr>
        </table>
      `}
   />
   </Container>
  );
}

export default ProjectList;