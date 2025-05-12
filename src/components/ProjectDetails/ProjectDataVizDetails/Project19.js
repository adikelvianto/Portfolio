import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[1];
    
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
          Visualizes trends from APU idle and auto shutdown Aircraft Condition Monitoring System (ACMS) reports by plotting key parameters to help identify early signs of system degradation or anomalies. 
          Simplifies trend interpretation for engineering teams through clear, parameter-based insights.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Plots EGT and other APU parameters during idle and auto shutdown events to assess performance trends</li>
                <li>Highlights which APU serials experience auto shutdowns, categorized by shutdown reason</li>
                <li>Supports trend filtering by report date and APU serial number to assist in early anomaly detection</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for interactive trend visualization</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Filtered ACMS data to include only APU idle and auto shutdown reports</li>
                <li>Converted four types of APU control words from 5-digit decimals to binary, then decoded them per Aircraft Maintenance Manual (AMM) logic into shutdown categories</li>
                <li>Aligned time series data by offsetting "+n seconds" parameters to create a trend window following the ACMS report</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Developed logic to automatically decode control word values</li>
                <li>Designed dataset pipelines to normalize and align time-offset parameters</li>
                <li>Created Contour dashboards with dynamic parameter selection, filtering, and trend plotting</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Dynamic filters for APU serial number, date range, and parameter selection</li>
                <li>Scatter plots for multiple parameters including EGT peak, rotation speed, bleed air pressure, etc.</li>
                <li>Category chart summarizing auto shutdown reports by reason</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Converted decimal control words to binary and mapped each bit per AMM to enable automated shutdown categorization</li>
                <li>ACMS parameter timestamps were not explicit, requiring calculation logic to align them with the actual event time</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Increased awareness of APU performance degradation patterns through visual insights</li>
                <li>Improved root cause traceability of shutdown events for engineering follow-up</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Binary-level control word decoding reveals operational logic embedded in raw data</li>
                <li>Consistent preprocessing across data sources is key to building scalable visualizations</li>
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