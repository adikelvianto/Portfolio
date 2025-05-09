import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[11];
    
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
          Summarizes vibration-triggered ACMS advisories (N1/N2-based) for both sensors (Fan and TRF) across the fleet. 
          Helps powerplant engineering teams monitor and take early action on potential engine imbalance or mechanical deterioration.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Developed a dashboard to track and analyze ACMS mechanical advisories triggered by excessive N1 or N2 vibrations from both sensors (Fan and TRF)</li>
                <li>Displayed the maximum vibration value from each advisory report, extracted from a series of 10 timestamps</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard development and dynamic filtering</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Utilized and processed ACMS mechanical advisory reports from the Airbus fleet</li>
                <li>Extracted and retained the highest vibration value from each advisory report</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Processed and structured the data to identify peak vibrations from 10-point reports</li>
                <li>Implemented customizable filters for vibration thresholds, aircraft registration, and time range</li>
                <li>Created documentation to support future enhancements and facilitate team adoption</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Interactive filters to define N1/N2 vibration thresholds by sensor (Fan or TRF)</li>
                <li>Dynamic scatter plot to easily identify aircraft with high engine vibration during a specific time period</li>
                <li>Drill-down capability by clicking on charts or rows in the summary section</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Each advisory contained 10 vibration readings — resolved by calculating and storing the maximum value</li>
                <li>Balanced detailed insights and high-level overview using flexible visualization techniques</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Provided a reliable reference for monitoring engine vibration trends</li>
                <li>Reduced manual review time of advisory reports across the fleet</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Designing fleet-wide summaries requires consistency in preprocessing and filtering logic</li>
                <li>Selecting the right data granularity (e.g., max values per report) is key for effective visualization</li>
                <li>Proper documentation is essential for ensuring smooth knowledge transfer and long-term maintenance</li>
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
