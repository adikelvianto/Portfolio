import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[5];
    
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
          Processes QAR data to calculate and visualize daily oil consumption per engine, enabling detection of unusual trends and early maintenance action.
        </p>

        <br />

        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Calculated oil consumption per flight by analyzing stabilized oil quantity data from specific engine phases</li>
                <li>Implemented logic to extract accurate values from QAR timeseries data during Phase 1 (electrical on) and Phase 10 (5 minutes post-shutdown)</li>
                <li>Eliminated negative values and irregularities to ensure only valid consumption data is included</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard visualization and analysis</li>
                <li>Skywise Sensor Alert Inbox to define logic for capturing conditions from Airbus QAR sensor data</li>
              </ul>
            </td>
          </tr>

          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Extracted oil quantity at stabilized points in Phase 1 and Phase 10 for each flight</li>
                <li>Calculated oil consumption by subtracting the post-flight quantity from pre-flight values</li>
                <li>Applied data cleansing rules to exclude negative consumption and incorrect timestamps</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Defined and tested sensor condition logic in Skywise to extract relevant QAR data</li>
                <li>Developed filtering rules to address cases where Phase 10 timestamp preceded Phase 1 (solved using seconds-difference trick)</li>
                <li>Coordinated with powerplant engineers for validation and accuracy confirmation of high oil consumption cases</li>
              </ul>
            </td>
          </tr>

          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Dynamic filters for aircraft registration, date range, and consumption threshold</li>
                <li>Histogram displaying the frequency of high oil consumption per aircraft, segmented by oil consumption range</li>
                <li>Scatter plot to visualize oil consumption trends over time per aircraft</li>
                <li>Detailed table view of flight-level oil usage events</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Required custom logic to identify stabilized values within noisy sensor data</li>
                <li>No native function to compare timestamps directly – solved using calculated second differences</li>
                <li>Ensured valid sequence of events to prevent incorrect oil consumption computation</li>
              </ul>
            </td>
          </tr>

          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Enabled early detection of abnormal oil consumption patterns before faults occurred</li>
                <li>Improved accuracy in identifying engines needing attention, supporting preventive maintenance decisions</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Timeseries data may not directly contain desired parameters but can be manipulated to extract useful insights</li>
                <li>Collaborating with engineering teams is critical to validate automated calculations and dashboards</li>
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