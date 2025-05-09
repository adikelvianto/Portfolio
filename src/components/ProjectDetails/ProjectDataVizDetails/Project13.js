import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[7];
    
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
          Fleet-level monitoring of LPSOV (Low Pressure Shutoff Valve) opening times derived from flight data, supporting early detection of system performance degradation and enabling preventive maintenance actions.
        </p>

        <br />

        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>This analysis was driven by past events where LP valve faults forced aircraft to return to the apron, leading to significant delays</li>
                <li>Analyzed QAR flight data to track LPSOV opening times for both engines</li>
                <li>Calculated time differences between engine master switch ON and LPSOV open events</li>
                <li>Plotted the timeline to visualize early degradation signs and correlate with component removals</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Foundry & Contour for data modeling and visualization</li>
                <li>Skywise Sensor Alert Inbox to define condition logic for capturing events from aircraft sensor data (Airbus QAR)</li>
                <li>PFR, and Component Removal records</li>
              </ul>
            </td>
          </tr>

          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Extracted and cleaned raw sensor data from QAR flights</li>
                <li>Identified valid flights with complete sequences of master switch and valve events</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Created logic to detect engine master switch ON and LPSOV open timestamps</li>
                <li>Preprocessed large volumes of sensor data with anomaly detection and threshold logic</li>
                <li>Applied statistical deviation checks to detect early signs of degradation</li>
                <li>Built interactive dashboards with dynamic filters and condition-based color coding</li>
                <li>Periodically monitored the trend and ensured the reliability of the live data pipeline</li>
              </ul>
            </td>
          </tr>

          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Visual timeline highlighting time difference between switch ON and LPSOV open events</li>
                <li>Color-coded visualization indicating abnormal timing behaviors</li>
                <li>Statistical summaries per engine, aircraft, or time period</li>
                <li>Integration with recent component removal and fault history for contextual analysis</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Filtering and validating flights where both master switch and LPSOV events are present</li>
                <li>Designing robust logic to calculate timestamp differences per flight and engine</li>
                <li>Using deviation-based logic to highlight degradation trends from normal patterns</li>
                <li>Linking time-based anomalies with component removal data to build preventive insights</li>
              </ul>
            </td>
          </tr>

          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Enabled early detection of valve degradation based on flight behavior trends</li>
                <li>Reduced risk of costly delays and return-to-apron events caused by LP valve faults</li>
                <li>Supported preventive maintenance decisions with visual and data-driven evidence</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>QAR sensor data can be effectively used to track and forecast hardware degradation</li>
                <li>It is crucial to have historical context: related fault messages and removals enhance interpretation</li>
                <li>Combining flight behavior data with component history improves diagnostic accuracy and timing</li>
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
