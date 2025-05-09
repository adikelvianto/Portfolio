import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[12];
    
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
          Provides two versions of preprocessing templates for aircraft equipped with QAR or DAR systems. 
          Includes preselected engine parameters (e.g., N1 vibration, N2 vibration, rotational speeds, flight phases) 
          to accelerate engine data analysis and enable fast anomaly detection.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Developed separate dashboards for QAR- and DAR-equipped aircraft due to differences in parameter mnemonics</li>
                <li>Enabled rapid time series exploration of key engine parameters across flight phases</li>
                <li>Supported the powerplant team in early detection of engine anomalies through templated preprocessing</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Quiver for interactive time series visualization</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Utilized Airbus QAR and DAR engine time series datasets</li>
                <li>Mapped relevant mnemonics for both aircraft configurations</li>
                <li>Defined dynamic filters for aircraft registration and selected time ranges</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Structured the dashboard flow from aircraft and time filtering to full parameter visualization</li>
                <li>Documented all filtering logic and mnemonic configurations for reuse</li>
                <li>Plotted key engine parameters with hide/show toggles for each engine</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Flexible toggle to display selected engine parameters simultaneously</li>
                <li>Flight event indicators using scheduled departure and arrival blocks</li>
                <li>Auto-highlighting of threshold breaches for vibration metrics per flight</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Managed mnemonic differences between DAR and QAR with separate templates</li>
                <li>Redesigned y-axis labeling for better timeline readability</li>
                <li>Implemented layered filtering to ensure correct parameter reflections across dashboards</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Accelerated engine abnormality detection by powerplant engineers</li>
                <li>Reduced manual preprocessing efforts for time series plotting</li>
                <li>Improved visibility into aircraft engine behavior and trend anomalies</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Designing dashboards for different data standards (QAR vs DAR) requires upfront planning and modular flows</li>
                <li>Effective documentation of logic and parameters significantly improves team onboarding and reuse</li>
                <li>Time series tools like Palantir Quiver can uncover both granular and high-level insights when used properly</li>
                <li>Attention to user-driven filtering experience is essential for operational usability</li>
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
